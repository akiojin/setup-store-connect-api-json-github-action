import * as core from '@actions/core'
import JSONHelper from './JSONHelper'

async function Run()
{
    try {
        const path = JSONHelper.Export(
            core.getInput('output-directory'),
            core.getInput('key-id'),
            core.getInput('issuer-id'),
            core.getBooleanInput('in-house'),
            core.getInput('key'))
        core.exportVariable('APP_STORE_CONNECT_API_KEY_PATH', path)

        core.info("Output JSON file and set the environment variable APP_STORE_CONNECT_API_KEY_PATH.")
    } catch (ex: any) {
        core.setFailed(ex.message)
    }
}

Run()
