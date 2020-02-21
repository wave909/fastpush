import { assertVersion, Version } from '../cli/utils'
import { Incrementer } from '../utils/increment/Incrementer'
import { readVersionFrom } from '../utils/increment/readVersion'
import { IncrementType } from '../cli/IncrementType'
import jetpack = require('fs-jetpack')

/**
 * Increment version in packageJson and return array with [oldVersion, newVersion]
 */
export async function incrementPackageJson(
  type: IncrementType,
  packageJsonPath: string = jetpack.cwd() + '/package.json',
): Promise<[Version, Version]> {
  const version = await readVersionFrom(packageJsonPath)
  const currentVersion = await assertVersion(version)
  const newVersion = Incrementer.increment(currentVersion, type)

  return [version, newVersion]
}