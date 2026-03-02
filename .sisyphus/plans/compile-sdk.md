# Compile Multilogin SDK to JavaScript

## TL;DR

> Compile the TypeScript SDK to JavaScript so it can be imported at runtime without TypeScript issues.
> 
> **Deliverables**: Compiled JS files in dist/, updated package.json
> **Effort**: Medium (requires build setup)

---

## Context

The SDK is published as TypeScript source files, which causes runtime issues:
- Interfaces don't exist at runtime (stripped by TS compiler)
- TypeScript parameter properties (`public code`) not supported in Node/Bun direct TS loading

---

## Work Objectives

### Core Objective
Compile TypeScript to JavaScript and update package.json to point to compiled output.

### Must Have
- [ ] Install tsup (or use tsc) for compilation
- [ ] Update package.json to export from dist/ instead of src/
- [ ] Update .gitignore to exclude dist/
- [ ] Verify compiled code works: `bun run test-profile.mjs`

### Must NOT Have
- [ ] Don't modify the SDK source code
- [ ] Don't break existing functionality

---

## Execution Strategy

1. Install tsup as devDependency
2. Configure tsup to compile src/ to dist/
3. Update package.json exports to point to dist/
4. Update .gitignore
5. Build and verify

---

## TODOs

- [ ] 1. Install tsup and configure build

  **What to do**:
  - Run: `npm install -D tsup`
  - Add build script to package.json: `"build": "tsup src/index.ts --outDir dist --format esm"`
  - Create tsup.config.ts or use CLI flags

  **Acceptance Criteria**:
  - [ ] `npm run build` produces JS files in dist/

- [ ] 2. Update package.json exports

  **What to do**:
  - Change "main" to "./dist/index.js"
  - Change "exports" to point to "./dist/index.js"
  - Add "types" to point to "./dist/index.d.ts"

  **Acceptance Criteria**:
  - [ ] package.json points to dist/ output

- [ ] 3. Update .gitignore

  **What to do**:
  - Add "dist/" to .gitignore

  **Acceptance Criteria**:
  - [ ] dist/ is ignored in git

- [ ] 4. Verify test-profile.mjs works

  **What to do**:
  - Run: `npm run build`
  - Run: `bun run test-profile.mjs`

  **Acceptance Criteria**:
  - [ ] Script runs without import errors

---

## Success Criteria

- [ ] SDK compiles without errors
- [ ] test-profile.mjs can import the SDK
- [ ] Package is ready for npm publish (after publishing, consumers can use it)
