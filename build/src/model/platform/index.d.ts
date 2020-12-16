import { Version } from '../../cli/utils';
export * from './AndroidPlatform';
export * from './IOSPlatform';
export declare const platformTypes: readonly ["android", "ios"];
export declare type Platform = typeof platformTypes[number];
export interface PlatformActions {
    type: Platform;
    getVersionName(): Promise<string>;
    setVersionName(newVersion: Version): Promise<[Version, Version]>;
    incrementBuildNumber(): Promise<[number, number]>;
    getBuildNumber(): Promise<number>;
}
