import { z } from 'zod';
import { BaseResource } from './baseResource.js';

/**
 * Schema for Hardware Asset resource (basic fields - extend as needed)
 */
const HardwareAssetSchema = z.unknown();

export type HardwareAsset = z.infer<typeof HardwareAssetSchema>;

/**
 * Hardware Assets resource
 */
export class HardwareAssetsResource extends BaseResource<HardwareAsset> {
  constructor(httpClient: any, logger: any) {
    super(httpClient, logger, '/core/v1/assets/hardware', HardwareAssetSchema);
    this.sortParamName = 'sort';
  }
}

