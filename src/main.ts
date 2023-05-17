import * as core from '@actions/core'
import * as fs from 'fs/promises'
import path from 'path'

async function GenerateAPIKeyJSON(key: string, keyID: string, issuerID: string, isInHouse: boolean, outputDirectory: string): Promise<string>
{
    const APIKeyFileName = 'api-key.json'

    const json = JSON.stringify({
        "key_id": keyID,
        "issuer_id": issuerID,
        "in_house": isInHouse,
        "key": key
    })

    const outputPath = path.join(outputDirectory, APIKeyFileName)
    await fs.writeFile(outputPath, json)

    core.setOutput('output-path', outputPath)

    core.startGroup(`Generate ${APIKeyFileName}`)
    core.info(`APP_STORE_CONNECT_API_KEY_PATH=${outputPath}`)
    core.info(`${APIKeyFileName}:\n${json}`)
    core.endGroup()

    core.exportVariable('APP_STORE_CONNECT_API_KEY_PATH', outputPath)

    return outputPath
}

async function Run()
{
    try {
        await GenerateAPIKeyJSON(
            core.getInput('key'),
            core.getInput('key-id'),
            core.getInput('issuer-id'),
            core.getBooleanInput('in-house'),
            core.getInput('output-directory')
        )
    } catch (ex: any) {
        core.setFailed(ex.message)
    }
}

Run()
