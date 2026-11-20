# James Tsetsekas — Portfolio

Source for [jamestsetsekas.com](https://jamestsetsekas.com/), my personal portfolio and project archive.

I am a Web & Digital Experience Developer at RightFiber and a Product Engineer at [Conduit](https://conduit.market/). The site highlights my work across React, TypeScript, Nostr, Bitcoin Lightning, payments, fintech analytics, and developer tooling.

## Featured work

- [Conduit](https://conduit.market/) — open-source peer-to-peer commerce on Nostr with Bitcoin Lightning payments.
- [Reset Guard](https://github.com/JamesTsetsekas/ResetGuard) — an opt-in Windows tray app for Codex reset automation and read-only Claude usage monitoring. [Download the latest release](https://github.com/JamesTsetsekas/ResetGuard/releases/latest).
- [nos2x Auto Approver](https://github.com/JamesTsetsekas/nos2x-auto-approver) — a Chromium signer fork for repeatable Nostr development and QA with explicit host allowlists.
- [Fintech Analytics Suite](https://github.com/JamesTsetsekas/Fintech) — interactive Bitcoin charts, cycle signals, historical phases, and device-local alerts backed by Python data pipelines.
- [Digital Securities Settlement](https://github.com/JamesTsetsekas/digital-securities-settlement) — an Ethereum-based atomic DvP settlement prototype with compliance controls.
- [Bond Settlement on DAML](https://github.com/JamesTsetsekas/bond-settlement-daml) — a multi-party bond issuance and settlement model on Canton/DAML.
- [Oneshot Arcade](https://github.com/JamesTsetsekas/oneshot-arcade) - playable AI browser-game comparisons across original briefs.
- [Oneshot Visuals](https://github.com/JamesTsetsekas/oneshot-visuals) - SVG, animation, and interactive visual coding comparisons.
- [Pareto Frontier Explorer](https://github.com/JamesTsetsekas/pareto-frontier) - an interactive AI model cost-vs-score chart with the Pareto frontier, built on auto-refreshed ARC Prize leaderboard data. [Explore it](https://jamestsetsekas.github.io/pareto-frontier/).
- [Price HUD](https://github.com/JamesTsetsekas/price-hud) - a Bitcoin-first GNOME Shell price and mempool-fee extension.

## Blog section

The homepage includes published articles from [the blog RSS feed](https://blog.jamestsetsekas.com/rss.xml), newest first. Six appear initially; **Load more articles** reveals six more until the full feed is visible. Titles link to the original articles.

Posts are fetched at build time and refreshed in the browser through `/api/blog`. On Vercel, successful API responses are cached for an hour, with stale responses available during revalidation. New blog publications appear without a portfolio deployment after cache refresh. No GitHub token or duplicated article content is needed.

A failed refresh keeps the build-time posts. If the feed is unavailable during the build, the section still links to the blog. Static exports retain the build-time articles but need a rebuild for updates because they do not host API routes.

Run `npm run test:blog` for feed parsing and failure-handling checks.

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
