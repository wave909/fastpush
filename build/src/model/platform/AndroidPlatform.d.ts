import { Version } from '../../cli/utils';
import { PlatformActions, Platform } from '.';
/**
 * @param android - android project directory path
 */
export declare class AndroidPlatform implements PlatformActions {
    private projectDirectory;
    private androidDirectory;
    private buildGradlePath;
    type: Platform;
    /**
     * Android platform specific actions, that can help you with build process
     * @param projectDirectory - path to react-native root project directory ["current-working-directory"]
     * @param androidDirectory - path to android platform directory ["current-working-directory/android"]
     * @param buildGradlePath - path to app/build.gradle file ["current-working-directory/android/app/build.gradle"]
     */
    constructor(projectDirectory?: string, androidDirectory?: string, buildGradlePath?: string);
    getBuildNumber(): Promise<number>;
    getVersionName(): Promise<string>;
    incrementBuildNumber(): Promise<[number, number]>;
    setVersionName(version: string): Promise<[Version, Version]>;
    private changeField;
}
