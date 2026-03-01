# Multilogin X SDK Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Generate and publish a TypeScript SDK for the Multilogin X API from a Postman collection.

**Architecture:** Minimal quick-start approach - use postman-sdk-gen CLI to generate SDK from Postman collection, configure package.json for npm publishing with ES modules and TypeScript sources, publish directly without build step.

**Tech Stack:** TypeScript, Postman SDK Generator (@sirhc77/postman-sdk-gen), npm, native fetch

---

## Task 1: Create package.json

**Files:**
- Create: `package.json`

**Step 1: Write package.json with minimal npm package configuration**

```json
{
  "name": "multilogin-x-sdk",
  "version": "1.0.0",
  "description": "TypeScript SDK for Multilogin X API - generated from Postman collection",
  "type": "module",
  "main": "./src/MultiloginClient.ts",
  "types": "./src/MultiloginClient.ts",
  "exports": {
    ".": {
      "types": "./src/MultiloginClient.ts",
      "default": "./src/MultiloginClient.ts"
    }
  },
  "files": [
    "src",
    "README.md"
  ],
  "keywords": [
    "multilogin",
    "sdk",
    "api",
    "typescript",
    "browser-profiles",
    "automation"
  ],
  "author": "",
  "license": "MIT",
  "engines": {
    "node": ">=18.0.0"
  },
  "devDependencies": {
    "@sirhc77/postman-sdk-gen": "^0.2.0",
    "typescript": "^5.0.0"
  }
}
```

**Step 2: Verify package.json is valid JSON**

Run: `cat package.json | jq .`
Expected: Outputs formatted JSON without errors

**Step 3: Commit**

```bash
git add package.json
git commit -m "chore: add package.json with npm configuration"
```

---

## Task 2: Create README.md

**Files:**
- Create: `README.md`

**Step 1: Write README.md with usage documentation**

```markdown
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
```

**Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add README.md with usage documentation"
```

---

## Task 3: Install SDK generator globally

**Files:**
- No files created/modified

**Step 1: Install postman-sdk-gen globally**

Run: `npm install -g @sirhc77/postman-sdk-gen`
Expected: Installation completes successfully, `postman-sdk-gen` command available

**Step 2: Verify installation**

Run: `postman-sdk-gen --version`
Expected: Outputs version number (e.g., `0.2.0`)

---

## Task 4: Generate SDK from Postman collection

**Files:**
- Create: `src/` directory structure (all generated files)
- Modify: None (generation only)

**Step 1: Run postman-sdk-gen to generate SDK**

Run:
```bash
postman-sdk-gen "Multilogin X API.postman_collection.json" \
  --output ./src \
  --client-name MultiloginClient \
  --use-fetch
```
Expected: Generates `src/` directory with `MultiloginClient.ts` and 8 namespace folders

**Step 2: Verify main client file exists**

Run: `ls -la src/MultiloginClient.ts`
Expected: File exists and is non-empty

**Step 3: Verify all namespace folders exist**

Run: `ls -la src/`
Expected: Output includes folders: `launcher/`, `profileAccessManagement/`, `profileManagement/`, `browserProfileData/`, `proxy/`, `premadeCookies/`, `scriptRunner/`, `profileImportExport/`

**Step 4: Commit**

```bash
git add src/
git commit -m "feat: generate SDK from Postman collection"
```

---

## Task 5: Verify SDK can be imported (sanity check)

**Files:**
- No files created/modified

**Step 1: Create temporary test file to verify import**

Run:
```bash
cat > test-import.ts << 'EOF'
import { MultiloginClient } from './src/MultiloginClient';

// This should compile without errors
const client = new MultiloginClient({ baseUrl: 'https://api.multilogin.com' });
console.log('Import successful');
EOF
```

**Step 2: Compile with TypeScript**

Run: `npx tsc --noEmit test-import.ts`
Expected: No TypeScript errors, exits with code 0

**Step 3: Clean up test file**

Run: `rm test-import.ts test-import.ts.map 2>/dev/null || true`

---

## Task 6: Publish to npm

**Files:**
- No files created/modified

**Step 1: Check if logged into npm**

Run: `npm whoami`
Expected: Outputs your npm username (or prompts to login if not logged in)

**Step 2: Dry-run publish to validate package**

Run: `npm publish --dry-run`
Expected: Package validates successfully, shows what would be published

**Step 3: Publish to npm registry**

Run: `npm publish`
Expected: Package publishes successfully, outputs URL to package page

**Step 4: Verify package is accessible**

Run: `npm view multilogin-x-sdk`
Expected: Displays package information from npm registry

---

## Task 7: Clean up and verify final state

**Files:**
- No files created/modified

**Step 1: Verify project structure**

Run:
```bash
ls -la
```
Expected: Shows `package.json`, `README.md`, `src/`, and the original Postman collection

**Step 2: Verify src/ structure**

Run:
```bash
tree src/ -L 2
```
Expected: Shows `MultiloginClient.ts` and 8 namespace folders

**Step 3: Count generated files**

Run: `find src/ -type f | wc -l`
Expected: More than 0 files (exact count depends on Postman collection)

**Step 4: Final git status check**

Run: `git status`
Expected: No uncommitted changes (all work committed)
