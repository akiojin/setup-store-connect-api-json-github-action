import * as core from '@actions/core'
import * as fs from 'fs/promises'
import path from 'path'

export default class JSONHelper
{
    /**
     * Output ExportOptions.plist.
     * 
     * @param outputDirctory Output directory.
     * @param keyID Export Team ID
     * @param issuerID Output Bitcode?
     * @param inHouse Output Symbols?
     * @param key Output Symbols?
     * @returns Path of ExportOptions.plist
     */
    static async Export(
        outputDirctory: string,
        keyID: string,
        issuerID: string,
        inHouse: boolean,
        key: string): Promise<string>
    {
        const script = JSONHelper.Generate(keyID, issuerID, inHouse, key)
        const json = path.join(outputDirctory, 'APIKey.json')
        await fs.writeFile(json, script)
    
        core.startGroup('Generate "APIKey.json"')
        core.setOutput('output-path', json)
        core.info(`APIKey.json:\n${script}`)
        core.endGroup()
    
        return json;
    }
    
    static Generate(
        keyID: string,
        issuerID: string,
        inHouse: boolean,
        key: string): string
    {
        return `{
  "key_id": "${keyID}",
  "issuer_id": "${issuerID}",
  "in_house": ${inHouse},
  "key": "${key.replaceAll('\n', '\\n')}"
}`;
    }
}