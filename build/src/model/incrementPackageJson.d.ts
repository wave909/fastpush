import { IncrementType } from '../cli/IncrementType';
import { Version } from '../cli/utils';
/**
 * Increment version in packageJson and return array with [oldVersion, newVersion]
 */
export declare function incrementPackageJson(type: IncrementType, packageJsonPath?: string): Promise<[Version, Version]>;
