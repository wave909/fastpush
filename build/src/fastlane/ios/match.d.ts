import { IOSLane } from ".";
export declare type MatchType = "appstore" | "development" | "adhoc" | "enterprise" | "developer_id";
export declare type MatchArgs = {
    /**
     * Match can generate profiles that contain custom entitlements by passing in the entitlement's name with the template_name parameter.
     */
    template_name?: string;
    /**
     * Only fetch existing certificates and profiles, don't generate new ones
     */
    readonly?: boolean;
    /**
     * Skip syncing provisioning profiles
     */
    skip_provisioning_profiles?: boolean;
    /**
     * Set the provisioning profile's platform to work with (i.e. ios, tvos, macos)
     */
    platform?: "ios" | "macos" | "tvos";
};
/**
 * https://docs.fastlane.tools/actions/match/
 * fastlane run match - show documentation
 */
export declare function match(type: MatchType, args?: MatchArgs): IOSLane;
