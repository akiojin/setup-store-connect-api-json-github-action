export default class JSONHelper {
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
    static Export(outputDirctory: string, keyID: string, issuerID: string, inHouse: boolean, key: string): Promise<string>;
    static Generate(keyID: string, issuerID: string, inHouse: boolean, key: string): string;
}
