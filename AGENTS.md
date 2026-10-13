# Repository guidance

## Commands and verification
- Use Bun with `bun.lock`: `bun ci` installs dependencies; `bun start` runs the local site; `bun run build` builds it; `bun run typecheck` runs TypeScript checking; `bun run lint` lints `src`, `docusaurus.config.ts`, and `babel.config.js`; `bun run format` formats `src`, `docs`, and root config files; `bun run format:check` checks them without writing.
- CI (`.github/workflows/build.yml`) uses Node 26.5.1 and runs `bun ci`, then `format:check`, `lint`, `typecheck`, and `build` in that order. Oxc requires Node `^20.19.0 || >=22.12.0`; tool versions are pinned in `package.json`.
- Keep `tsconfig.json` extending `@docusaurus/tsconfig`; override inherited `baseUrl` with `null` and define the `@site/*` path alias in the root `compilerOptions`.
- Both site and Markdown broken links are configured as warnings in `docusaurus.config.ts`; a successful build does not prove links are valid. Review link warnings when changing pages or anchors.

## Wiki content
- This is a Chinese translation of the official Slimefun Wiki, built with Docusaurus. The official wiki is `https://github.com/Slimefun/Slimefun4/wiki`; its content repository is `https://github.com/Slimefun/wiki`. Read `docs/Expanding-the-Wiki.mdx` for contribution rules; keep wiki content in Simplified Chinese.
- Preserve all official page paths: `https://github.com/Slimefun/Slimefun4/wiki/Addons` maps to `https://slimefun-wiki.guizhanss.cn/Addons`. Follow the official wiki's overall structure, but do not assume its content must be copied verbatim.
- Docs in `docs/` are served at `/`, not `/docs/`. Navigation is manually maintained in `src/sidebars.ts` (`rootSidebar`); register new pages there.
- Match official Slimefun Wiki page filenames when a corresponding page exists. Use hyphens instead of spaces; use `.mdx` for pages containing images, `.md` otherwise.
- Add explicit heading IDs matching the official Wiki anchors and a blank line after each heading. Preserve existing IDs when translating or renaming headings.
- Hard line breaks use two trailing spaces in `.md`; in `.mdx`, `<br />` and `<br/>` are equivalent. Avoid HTML other than `<details>`, `<summary>`, and `<br>` in wiki prose.
- For images, import `ImageGallery` from `@site/src/components/ImageGallery` in MDX and pass `images` entries with `src` and `alt`. Local files live in `static/images/` and use `/images/...` URLs; filenames use lowercase letters, digits, and hyphens, with PNG for still images and GIF for animations.
- Official Wiki images may use `https://fastly.jsdelivr.net/gh/Slimefun/Wiki@master/images/...` instead of being copied locally; do not link other external images. Minecraft screenshots must use default textures and contain no server branding or addresses.
- Do not delete existing pages or images without giving a detailed reason (see the contribution guide).

## Formatting
- Oxfmt settings override `.editorconfig`; the current formatter uses two-space indentation, including JSON. Preserve Markdown hard line breaks when editing.
