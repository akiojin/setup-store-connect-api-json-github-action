# setup-store-connect-api-json-github-action

![BuildAndTest](https://github.com/akiojin/setup-store-connect-api-json-github-action/actions/workflows/BuildAndTest.yml/badge.svg)

This action creates the JSON of the API key to use the Store Connect API.
It also sets the environment variable `APP_STORE_CONNECT_API_KEY_PATH` for fastlane to the JSON file path created.

The JSON generated by this action is in the following format

```JSON
{
  "key_id": "<Key ID>",
  "issuer_id": "<Issuer ID>",
  "in_house": true or false,
  "key": "<API Key>"
}
```

## API Key

An API key is a value required to use the App Store Connect API.
This key can be created at [App Store Connect](https://appstoreconnect.apple.com/access/api).

![API Key](API_Key.png)

The API key was created through App Store Connect and the downloaded file (*.p8) should look like this

```txt
-----BEGIN PRIVATE KEY-----
MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgqRVRAdjtVB+K2T7R
Jzl3TJ3ninFWn7cMU8C/KaJtb1GgCgYIKoZIzj0DAQehRANCAAS2yyN09ebrFtlD
umqAQ1WJTrpbcWhHnoGNrdVk2waj2eRL1ThZoBYkQUqkc9Qo11prUiETlfh+3/Lv
........
-----END PRIVATE KEY-----
```

Set this value to the GitHub Actions secret.

![Secrets](Secrets.png)

## Usage

### Simple usage

```yml
- uses: akiojin/setup-store-connect-api-json-github-action@v0.1.0
  with:
    key-id: ${{ secrets.APPLE_STORE_CONNECT_KEY_ID }}
    issuer-id: ${{ secrets.APPLE_STORE_CONNECT_ISSUER_ID }}
    key: ${{ secrets.APPLE_STORE_CONNECT_KEY }}
```

## Arguments

### Inputs

| Name               | Required | Type      | Default       | Description                                                                                                    |
| ------------------ | -------- | --------- | ------------- | -------------------------------------------------------------------------------------------------------------- |
| `key-id`           | `true`   | `string`  |               | Specifies the Key ID.                                                                                          |
| `issuer-id`        | `true`   | `string`  |               | Specifies the Issuer ID.                                                                                        |
| `in-house`         | `false`  | `boolean` | `false`       | Specify true for Apple Developer Enterprise Program. Otherwise, specify false. If omitted, false is specified. |
| `key`              | `true`   | `string`  |               | Specify the contents of the p8 file downloaded from Store Connect.                                             |
| `output-directory` | `false`  | `string`  | `runner.temp` | Specifies the output directory for JSON files. If omitted, `runner.temp` is set.                               |

### Outputs

| Name          | Type     | Description                       |
| ------------- | -------- | --------------------------------- |
| `output-path` | `string` | The output JSON file path is set. |

## License

Any contributions made under this project will be governed by the [MIT License](https://github.com/akiojin/setup-store-connect-api-json-github-action/blob/main/LICENSE).
