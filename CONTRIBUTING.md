# Contributing

## Setup

```bash
git clone https://github.com/nadimtuhin/multilogin-sdk.git
cd multilogin-sdk
npm install
npm run build
```

## Environment

Copy `.env.example` to `.env` and fill in your Multilogin credentials:

```bash
cp .env.example .env
```

## Pull request checklist

- [ ] `npm run build` passes
- [ ] No real credentials, tokens, or email addresses in committed files
- [ ] `.env.example` updated if new env vars added
