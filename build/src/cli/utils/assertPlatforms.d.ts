import { Platform, platformTypes } from '../../model/platform';
export declare type PlatformAtLeastOne = [typeof platformTypes[0]] | [typeof platformTypes[1]] | [typeof platformTypes[0], typeof platformTypes[1]];
/**
 * Assert input platforms and return array that contains at least 1 platform
 * @param platforms
 */
export declare function assertPlatforms(platforms: Platform[]): Promise<PlatformAtLeastOne>;
