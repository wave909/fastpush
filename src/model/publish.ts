import { PublishOptions } from '../cli/PublishOptions'
import { Platform, providePlatformActions } from './platform'
import jetpack = require('fs-jetpack')

export async function publish(platforms: Platform[], options: PublishOptions) {
  console.log(options)
  buildIosAndShowEnv(options)

  // const selectedPlatforms = await assertPlatforms(platforms)
  // const packageJson = `${options.project.fullName}/package.json`

  // const [oldVersion, newVersion] = await incrementVersion(packageJson, options.increment)
  // const packageContent = await parseFile(packageJson)
  // packageContent['version'] = newVersion
  // await jetpack.writeAsync(packageJson, packageContent)
  // success(`Up package.json version from [${oldVersion}] -> [${newVersion}]`)

  // const actions = providePlatformActions(selectedPlatforms, options)
  // actions.forEach(async (action: PlatformActions) => {
  //   const [oldBuildNumber, currentBuildNumber] = await action.incrementBuildNumber()
  //   const [oldVersion, currentVersion] = await action.setVersion(newVersion)
  //   await action.build()
  //   await action.publish()
  // })
}

async function buildIosAndShowEnv(options: PublishOptions) {
  const actions = providePlatformActions(['android'], options)
  await actions[0].build()
}
