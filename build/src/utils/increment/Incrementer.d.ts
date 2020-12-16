import { IncrementType } from '../../cli/IncrementType';
export declare class Incrementer {
    /**
     * Increment version or return null if can`t do it
     * @param from semver string like "0.0.0"
     * @param type patch, minor, major
     */
    static increment(from: string, type: IncrementType): string;
    static tryMigrateVersion(from: string): string;
}
