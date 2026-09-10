# James Tsetsekas — Portfolio

Source for [jamestsetsekas.com](https://jamestsetsekas.com/), my personal portfolio and project archive.

I am a Web & Digital Experience Developer at Great Plains Communications (now Rightfiber) and a Product Engineer at [Conduit](https://conduit.market/). The site highlights my work across React, TypeScript, Nostr, Bitcoin Lightning, payments, fintech analytics, and developer tooling.

## Featured work

- [Conduit](https://conduit.market/) — open-source peer-to-peer commerce on Nostr with Bitcoin Lightning payments.
- [Codex Reset Guard](https://github.com/JamesTsetsekas/CodexResetGuard) — an opt-in Windows tray app that redeems selected, existing banked Codex resets at a chosen usage threshold. [Download the latest release](https://github.com/JamesTsetsekas/CodexResetGuard/releases/latest).
- [nos2x Auto Approver](https://github.com/JamesTsetsekas/nos2x-auto-approver) — a Chromium signer fork for repeatable Nostr development and QA with explicit host allowlists.
- [Fintech Analytics Suite](https://github.com/JamesTsetsekas/Fintech) — Bitcoin market-cycle, on-chain, volatility, returns, and price-model visualizations.
- [Digital Securities Settlement](https://github.com/JamesTsetsekas/digital-securities-settlement) — an Ethereum-based atomic DvP settlement prototype with compliance controls.
- [Bond Settlement on DAML](https://github.com/JamesTsetsekas/bond-settlement-daml) — a multi-party bond issuance and settlement model on Canton/DAML.

## Stack

- Next.js 11 and React 17
- Bootstrap 5 and Sass
- Font Awesome
- Vercel production deployment

## Local development

Requires Node.js 22 and npm.

```sh
npm ci
npm run dev
```

The development server runs at [http://localhost:3001](http://localhost:3001).

## Content and validation

Portfolio copy, project cards, links, and SEO metadata live in [`config/config.js`](config/config.js). Before publishing a change, run:

```sh
npm run lint
npm run build
```

Merges to `main` are deployed to Vercel and served from [jamestsetsekas.com](https://jamestsetsekas.com/).

## License

[MIT](LICENSE)
