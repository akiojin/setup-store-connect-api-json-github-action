import * as core from '@actions/core'
import * as fs from 'fs/promises'
import path from 'path'

async function Run()
{
    try {
        const json = JSON.stringify({
            "key_id": core.getInput('key-id'),
            "issuer_id": core.getInput('issuer-id'),
            "in_house": core.getBooleanInput('in-house'),
            "key": core.getInput('key')
        })

        const outputPath = path.join(core.getInput('output-directory'), 'APIKey.json')
        core.setOutput('output-path', outputPath)

        await fs.writeFile(outputPath, json)
    
        core.startGroup('Generate "APIKey.json"')
        core.info(`APIKey.json:\n${json}`)
        core.endGroup()

        core.exportVariable('APP_STORE_CONNECT_API_KEY_PATH', path)
        core.info(`APP_STORE_CONNECT_API_KEY_PATH=${outputPath}`)
    } catch (ex: any) {
        core.setFailed(ex.message)
    }
}

Run()
