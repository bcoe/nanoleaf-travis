# nanoleaf-travis

Display your travis builds using [nanoleaf aurora](https://nanoleaf.me/en/).

## Environment Variables

Set the following environment variables to connect to
Travis and your Aurora Nanoleaf.

* `GITHUB_TOKEN`: your GitHub access token.
* `AURORA_TOKEN`: access token for your nanoleaf aurora.
* `AURORA_HOST`: your nanoleaf aurora address.
* `MONITORED_REPOS`: `reponame:panel-id:[public]`; the third parameter public should be provided if the repo is an OSS repo rather than a private repo.
