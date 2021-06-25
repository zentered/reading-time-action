import core, { setOutput } from '@actions/core'
import { writeFileSync, statSync } from 'fs'
import calculateRoutesReadingTime from './calculateRoutesReadingTime.mjs'
import getFile from './getFile.mjs'

async function run() {
  try {
    const folderPath = core.getInput('path')
    const manifestPath = `${folderPath}/manifest.json`

    const buffer = await getFile(manifestPath)
    const manifest = await JSON.parse(buffer.toString())

    const routesWithReadingTime = await calculateRoutesReadingTime(
      manifest.routes
    )

    const newManifest = JSON.stringify(
      {
        ...manifest,
        routes: routesWithReadingTime
      },
      null,
      2
    )
    writeFileSync(manifestPath, newManifest)

    const statResult = statSync(manifestPath)
    setOutput('size', `${statResult.size}`)
  } catch (error) {
    core.error(error)
    core.setFailed(error.message)
  }
}

run()
