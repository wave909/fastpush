import { FastpushResult } from './cli/fastpush';
import { Hooks } from './cli/hooks';
export declare const defaultHooks: Hooks;
export declare function publish(options: FastpushResult, passedHooks?: Hooks): Promise<void>;
