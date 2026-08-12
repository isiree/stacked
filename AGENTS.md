# Stacked repository guidance

## Product purpose

Stacked is a desktop-first personal productivity app that represents workload as a physical-style stack of task cards. Its core principle is: **the workload should feel lighter as work gets completed**. Preserve the visual stack concept rather than turning the product into a generic to-do list.

## Current stack and structure

- Electron with Electron Forge and the Forge Vite plugin
- React and TypeScript in the renderer
- npm, with the Node version pinned in `.nvmrc`
- `src/main.ts`: Electron main process and window lifecycle
- `src/preload.ts`: preload boundary for future safe renderer APIs
- `src/renderer.tsx`: React renderer entry
- `index.html`: renderer HTML entry
- `forge.config.ts`: Forge packaging and Vite entry configuration
- `vite.*.config.ts`: main, preload, and renderer build configuration
- `docs/PROJECT_SPEC.md`: product scope and direction

## Verified commands

- `npm start`: launch the Electron app in development mode
- `npm run typecheck`: run TypeScript without emitting files
- `npm run lint`: lint TypeScript and TSX files
- `npm run package`: create a local packaged application

Use the Node version from `.nvmrc` before installing dependencies or running project commands.

## Architecture rules

- Keep Electron main, preload, and React renderer responsibilities separate.
- Keep privileged Node, Electron, filesystem, and future database access out of the renderer. Expose narrowly scoped capabilities through preload and IPC.
- Prefer small, maintainable changes and avoid premature abstractions or dependencies.
- Keep UI changes minimal and structural until finalized design direction is provided.

## MVP scope

Version 0.1 is limited to task creation, title, flexible time horizon, optional estimated duration and timer, visual stacked cards, reordering, completion state and animation, stack repositioning, and local persistence. Initial horizons are Next Hour, Morning, Afternoon, Evening, Today, and Later.

Do not add accounts, cloud sync, AI, collaboration, email or calendar integrations, advanced analytics, or other unrequested scope.

## Workflow and Git rules

- Inspect existing code, documentation, and worktree changes before editing.
- Preserve user changes and Git history. Do not commit or push unless explicitly requested.
- Never commit dependencies, generated build/package output, secrets, or environment-specific files.
- Do not use force dependency fixes, `--legacy-peer-deps`, or `npm audit fix --force` without explicit approval after explaining the need.
- For significant decisions, briefly explain the finding, root cause, intended minimum change, and concepts worth remembering.

## Verification

Run the most relevant typecheck, lint, build/package, and launch checks for the change. Diagnose a failure before making additional changes, and report any remaining warning or blocker clearly.
