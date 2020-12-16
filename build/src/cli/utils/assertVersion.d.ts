import { Version } from './Version';
/**
 * Check that version argument has formatting like 'number.number.number' and trying migrate to this format if it's not.
 * @param version
 */
export declare function assertVersion(version: Version): Promise<Version>;
