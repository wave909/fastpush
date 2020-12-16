export declare type FastpushResult = ReturnType<typeof fastpush>;
/**
 * CLI parser that map your args input to JS object with options
 * @param args
 */
export declare function fastpush(args?: string[]): {
    increment: "none" | "patch" | "minor" | "major";
    track: "production" | "beta" | "alpha";
    silent: boolean;
    project: string;
    rollout: number;
    env: string;
    flavor: string;
    build: "bundle" | "assemble";
    android: boolean;
    ios: boolean;
    scheme: string;
    skip: boolean;
};
