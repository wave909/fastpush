import { mapObjectToArgs } from "../mappers";
import { IOSLane } from ".";

export type GymArgs = {
  /**
   * The project's scheme. Make sure it's marked as Shared	
   */
  scheme?: string
  
  /**
   * Path to the workspace file	
   */
  workspace?: string

  /**
   * Path to the project file	
   */
  project?: string

  /**
   * Should the project be cleaned before building it?	
   */
  clean?: boolean

  verbose?: boolean

  /**
   * Hide all information that's not necessary while building	
   */
  silent?: boolean

  /**
   * The configuration to use when building the app. Defaults to 'Release'	
   */
  // configuration?: "Release" | "Debug"
}

/**
 * Alias for the build_app action
 * gym builds and packages iOS apps for you. It takes care of all the heavy lifting and makes it super easy to generate a signed ipa or app file 💪
 * 
 * https://docs.fastlane.tools/actions/gym/
 */
export function gym(args?: GymArgs): IOSLane {
  return {
    type: "ios",
    name: "gym",
    args: mapObjectToArgs(args)
  }
}