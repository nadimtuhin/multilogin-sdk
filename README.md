# multilogin-x-sdk

TypeScript SDK for the [Multilogin X API](https://documenter.getpostman.com/view/28533318/2s946h9Cv9).

[![CI](https://github.com/nadimtuhin/multilogin-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/nadimtuhin/multilogin-sdk/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Install

```bash
npm install multilogin-x-sdk
```

Requires Node.js >= 18 (uses native `fetch`).

## Usage

```typescript
import { MultiloginClient } from 'multilogin-x-sdk';

const client = new MultiloginClient({
  baseUrl: 'https://api.multilogin.com',
  token: process.env.MULTILOGIN_TOKEN,   // JWT from login.mjs or dashboard
});

const profiles = await client.profileManagement.list();
await client.launcher.startProfile(profileId);
```

## Get a token

```bash
cp .env.example .env
# fill in MULTILOGIN_EMAIL and MULTILOGIN_PASSWORD
node login.mjs
# prints MULTILOGIN_TOKEN=... — add it to .env
```

## Namespaces

| Namespace | What it covers |
|-----------|---------------|
| `client.launcher` | Start, stop, manage browser profiles |
| `client.profileManagement` | Create, update, delete profiles |
| `client.profileAccessManagement` | Sign in, tokens, workspaces |
| `client.proxy` | Proxy management |
| `client.cookieManagement` | Cookie import/export |
| `client.scriptRunner` | Script execution |

## Authentication

Pass a Bearer token via the `token` option or set `MULTILOGIN_TOKEN` in your environment. See the [Multilogin X API docs](https://documenter.getpostman.com/view/28533318/2s946h9Cv9) for token acquisition.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT
