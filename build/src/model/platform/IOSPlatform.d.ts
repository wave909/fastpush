import { Platform, PlatformActions } from '.';
import { Version } from '../../cli/utils';
export declare class IOSPlatform implements PlatformActions {
    private projectDirectory;
    private iosDirectory;
    type: Platform;
    constructor(projectDirectory?: string, iosDirectory?: string);
    /**
     * Execute `xcrun agvtool new-marketing-version ${newVersion}`
     * @param newVersion your version in format `number.number.number` (ex: 1.2.3)
     */
    setVersionName(newVersion: string): Promise<[Version, Version]>;
    /**
     * Execute `xcrun agvtool next-version -all` for increment build number
     * @returns [oldBuildNumber, newBuildNumber]
     */
    incrementBuildNumber(): Promise<[number, number]>;
    /**
     * Execute `xcrun agvtool what-version` inside ios directory and get parsed result.
     * Be sure, that you enable `agvtool` for your project https://dzone.com/articles/agvtool-automating-ios-build-and-version-numbers
     */
    getBuildNumber(): Promise<number>;
    /**
     * Execute `xcrun agvtool what-marketing-version` and parse returned value
     * @returns version name like "1.2.3"
     */
    getVersionName(): Promise<Version>;
    private exec;
}
