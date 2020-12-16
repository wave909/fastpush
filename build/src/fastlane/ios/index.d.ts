import { Lane } from "../Lane";
export declare type IOSLane = Lane & {
    type: 'ios';
};
export declare function ios(lanes: IOSLane[]): void;
export declare function ios(lanes: IOSLane[], projectDirectory: string): void;
