import { z } from 'zod';
import { HttpClient } from '../../http/httpClient.js';
import { Logger } from '../../logging/logger.js';
import { BaseListOptions, ListResult } from '../../types/common.js';
import { Filters, buildFilterParams } from '../../types/filters.js';
import { SortSpec, addSortToParams } from '../../types/sorting.js';
import { paginatePages, PageFetcher } from '../../types/pagination.js';
import { createPaginatedEnvelopeSchema } from './schemas.js';
import { ResponseValidationError } from '../../http/errors.js';

export interface ResourceListOptions extends BaseListOptions {
  filters?: Filters;
  sort?: SortSpec[];
}

/**
 * Base class for API resources
 */
export abstract class BaseResource<T = unknown> {
  protected httpClient: HttpClient;
  protected logger: Logger;
  protected basePath: string;
  protected itemSchema?: z.ZodTypeAny;
  protected sortParamName: 'sort' | 'sort_by' = 'sort';

  constructor(
    httpClient: HttpClient,
    logger: Logger,
    basePath: string,
    itemSchema?: z.ZodTypeAny
  ) {
    this.httpClient = httpClient;
    this.logger = logger;
    this.basePath = basePath;
    this.itemSchema = itemSchema;
  }

  /**
   * Builds query parameters for list operations
   */
  protected buildListParams(options?: ResourceListOptions): URLSearchParams {
    const params = new URLSearchParams();

    if (options?.pageSize) {
      params.append('page_size', String(options.pageSize));
    }

    if (options?.cursor) {
      params.append('cursor', options.cursor);
    }

    // Add filters
    if (options?.filters) {
      const filterParams = buildFilterParams(options.filters);
      filterParams.forEach((value, key) => {
        params.append(key, value);
      });
    }

    // Add sort
    if (options?.sort) {
      addSortToParams(params, options.sort, this.sortParamName);
    }

    return params;
  }

  /**
   * Lists resources with optional filtering and sorting
   */
  async list(options?: ResourceListOptions): Promise<ListResult<T>> {
    const params = this.buildListParams(options);
    const response = await this.httpClient.get<unknown>(this.basePath, params);

    // Validate response if schema is provided
    if (this.itemSchema) {
      const schema = createPaginatedEnvelopeSchema(this.itemSchema);
      const result = schema.safeParse(response);
      
      if (!result.success) {
        throw new ResponseValidationError(
          'Invalid response format',
          result.error.issues
        );
      }
      
      return result.data as ListResult<T>;
    }

    return response as ListResult<T>;
  }

  /**
   * Gets a single resource by ID
   */
  async getById(id: string): Promise<T> {
    const path = `${this.basePath}/${id}`;
    const response = await this.httpClient.get<unknown>(path);

    // Validate response if schema is provided
    if (this.itemSchema) {
      const result = this.itemSchema.safeParse(response);
      
      if (!result.success) {
        throw new ResponseValidationError(
          'Invalid response format',
          result.error.issues
        );
      }
      
      return result.data as T;
    }

    return response as T;
  }

  /**
   * Returns an async generator that yields pages of resources
   */
  async *paginate(options?: ResourceListOptions): AsyncGenerator<T[], void, unknown> {
    const fetchPage: PageFetcher<T> = async (cursor?: string) => {
      return this.list({ ...options, cursor });
    };

    yield* paginatePages(fetchPage, options?.pageSize);
  }

  /**
   * Returns an async generator that yields individual resources
   */
  async *paginateItems(options?: ResourceListOptions): AsyncGenerator<T, void, unknown> {
    for await (const page of this.paginate(options)) {
      for (const item of page) {
        yield item;
      }
    }
  }
}

