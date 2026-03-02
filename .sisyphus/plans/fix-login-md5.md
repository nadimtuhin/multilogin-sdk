# Fix Multilogin SDK Login Issue

## TL;DR

> Fix the login.mjs script to use MD5-hashed password as required by Multilogin X API.
> 
> **Deliverables**: Fixed login.mjs script
> **Effort**: Trivial (single file, 2-line change)

---

## Context

The Multilogin X API requires MD5-hashed passwords for authentication. Current login.mjs sends plain text password, causing "Incorrect credentials" error.

---

## Work Objectives

### Core Objective
Fix login.mjs to hash password with MD5 before sending to API.

### Must Have
- [ ] Import crypto module in login.mjs
- [ ] Hash password with MD5 before sending

### Must NOT Have
- [ ] Don't change API endpoint
- [ ] Don't modify other files

---

## Execution Strategy

Single task - no parallelism needed.

---

## TODOs

- [ ] 1. Fix login.mjs to use MD5-hashed password

  **What to do**:
  - Add `import crypto from 'crypto';` at top of login.mjs
  - Change password field to: `password: crypto.createHash('md5').update(password).digest('hex')`

  **Acceptance Criteria**:
  - [ ] bun run login.mjs returns token (not "Incorrect credentials")
  - [ ] Token is printed to console for user to copy

  **Commit**: YES
  - Message: `fix: hash password with MD5 for login`
  - Files: `login.mjs`

---

## Success Criteria

- [ ] Login returns valid token
- [ ] No "Incorrect credentials" error
