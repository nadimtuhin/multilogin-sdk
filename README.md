# multilogin-x-sdk

TypeScript SDK for Multilogin X API - generated from official Postman collection.

## Installation

```bash
npm install multilogin-x-sdk
```

## Requirements

- Node.js >= 18.0.0 (for native fetch support)

## Usage

```typescript
import { MultiloginClient } from 'multilogin-x-sdk';

const client = new MultiloginClient({
  baseUrl: 'https://api.multilogin.com',
  // Authentication will be auto-configured from Postman auth scheme
});

// Access endpoints via namespace folders
const profiles = await client.profileManagement.list();
const profile = await client.profileManagement.create({ /* ... */ });
await client.launcher.startProfile(profileId);
```

## Generated Namespaces

The SDK is organized into namespaces matching Postman collection folders:

- `client.launcher` - Start, stop, and manage browser profiles
- `client.profileAccessManagement` - Sign in, manage tokens and workspaces
- `client.profileManagement` - Create, update, delete browser profiles
- `client.browserProfileData` - Unlock browser profiles
- `client.proxy` - Proxy management
- `client.premadeCookies` - Pre-made cookie management
- `client.scriptRunner` - Script execution
- `client.profileImportExport` - Profile import/export

## Authentication

The SDK supports authentication methods defined in the Postman collection:

- Bearer Token (recommended)
- API Key
- Basic Auth

See [Multilogin X API Documentation](https://documenter.getpostman.com/view/28533318/2s946h9Cv9) for details on obtaining tokens.

## License

MIT
