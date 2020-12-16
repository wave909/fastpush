import { Version } from '../../cli/utils';
/**
 * Read version from file
 * @param file input
 */
export declare function readVersionFrom(file: string): Promise<Version>;
/**
 * Save version to file
 * @param file input
 * @param version
 * @return [oldVersion, newVersion]
 */
export declare function saveVersionTo(file: string, version: string): Promise<[Version, Version]>;
