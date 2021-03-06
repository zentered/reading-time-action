<p align="center">
  <img src="docs/rttm.png">
</p>

<p align="center">
  <a href="https://github.com/zentered/reading-time-action/actions/workflows/test.yml"><img alt="Unit Test status" src="https://github.com/zentered/reading-time-action/actions/workflows/test.yml/badge.svg"></a>
  <a href="https://github.com/zentered/reading-time-action/actions/workflows/publish.yml"><img alt="Unit Test status" src="https://github.com/zentered/reading-time-action/actions/workflows/publish.yml/badge.svg"></a>
  <a href="https://semantic-release.gitbook.io/semantic-release/"><img alt="Semantic Release bagde" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg"></a>
  <a href="https://zentered.co"><img alt="Semantic Release bagde" src="https://img.shields.io/badge/>-Zentered-lightgrey?style=flat"></a>
</p>

# Reading Time to Manifest Action

GitHub Action to calculate reading time of Markdown files in the specified folder and add results to a manifest.json

## Usage

```yaml
- uses: zentered/reading-time-action
  with:
    path: docs
```

## Inputs

| Name   | Requirement | Default | Description                                            |
| ------ | ----------- | ------- | ------------------------------------------------------ |
| `path` | optional    | `docs`  | Path where the markdown files and manifest are located |

## Outputs

```json
{
  "text": "1 min",
  "minutes": 0.475,
  "time": 28500,
  "words": 95
}
```

## Complete Workflow with Commit & Push

This action does not commit/push to your repo. You can use the [github-push-action](https://github.com/ad-m/github-push-action). Here's a complete example:

```yaml
name: Reading Time

 on:
   push:
     branches:
       - '**'
       - '!main'
     paths:
       - 'docs/**'

 jobs:
   reading-time:
     runs-on: ubuntu-latest
     name: calculate reading time
     steps:
       - uses: actions/checkout@v2
       - name: Сalculate reading time
         uses: zentered/reading-time-action@v1.0.0
       - name: Commit Manifest
         run: |
           git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"
           git config --local user.name "github-actions[bot]"
           git commit docs/manifest.json -m "chore: calculate reading time"
       - name: Push changes
         uses: ad-m/github-push-action@v0.6.0
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           branch: ${{ github.ref }}
```

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md).

## License

See [LICENSE](LICENSE).
