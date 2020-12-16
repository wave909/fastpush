import { Lane } from "../Lane";
export * from './gradle';
export * from './supply';
export declare type AndroidLane = {
    type: 'android';
} & Lane;
export declare function android(lanes: AndroidLane[]): void;
export declare function android(lanes: AndroidLane[], projectDirectory: string): void;
