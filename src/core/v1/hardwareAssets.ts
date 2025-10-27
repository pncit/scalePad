import { z } from 'zod';
import { BaseResource } from './baseResource.js';
import { HttpClient } from '../../http/httpClient.js';
import { Logger } from '../../logging/logger.js';

/**
 * Schema for Hardware Asset resource (basic fields - extend as needed)
 */
const HardwareAssetSchema = z.unknown();

export type HardwareAsset = z.infer<typeof HardwareAssetSchema>;

/**
 * Hardware Assets resource
 */
export class HardwareAssetsResource extends BaseResource<HardwareAsset> {
  constructor(httpClient: HttpClient, logger: Logger) {
    super(httpClient, logger, '/core/v1/assets/hardware', HardwareAssetSchema);
    this.sortParamName = 'sort';
  }
}

