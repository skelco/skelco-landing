
# skelco-landing

A Vite + React landing site scaffold using Tailwind CSS and AWS Amplify for optional backend resources. Includes client UI and references to AWS SES for sending email from a secure backend.

## Quick start

- Install dependencies:

```powershell
npm ci
```

- Run development server:

```powershell
npm run dev
```

Open `http://localhost:5173` (or the port shown by Vite).

## Build & preview

- Build production assets:

```powershell
npm run build
```

- Preview the production build locally:

```powershell
npm run preview
```

## Lint

```powershell
npm run lint
```

## Project notes

- The project contains an `amplify/` folder and `src/aws-exports.js`, which indicates an Amplify backend has been created or pulled into the repo.
- The dependency `@aws-sdk/client-ses` is present. Sending email should be implemented on a server-side process (Lambda or API) with proper IAM credentials — never put AWS secret keys in client code.

## Amplify

- To pull an existing Amplify backend locally (when you have access):

```powershell
amplify pull --appId <APP_ID> --envName <ENV_NAME>
```

- To initialize a new Amplify environment:

```powershell
amplify init
```

- To publish backend + frontend from your machine:

```powershell
amplify publish
```

## Deployment

- AWS Amplify Console: connect this repository and configure a build command (default `npm ci && npm run build`).
- Netlify / Vercel: use `npm ci && npm run build` and publish the `dist` directory.

## Recommended changes

- Update the `name` field in `package.json` to `skelco-landing` (already applied).
- Consider adding an `engines` entry in `package.json` to recommend a Node version (e.g., Node 18+).
- Add `CONTRIBUTING.md` and `LICENSE` if this repo is public.

## Security & environment

- Keep AWS credentials out of the repo. Use CI/CD secret stores or IAM roles for deployment.
- Ensure SES-based email sending runs on the server (Lambda/API) with least-privilege IAM roles.

## Scripts (as defined in `package.json`)

- `dev` — starts Vite dev server
- `build` — builds production assets
- `preview` — previews built assets locally
- `lint` — runs ESLint
- `deploy` — currently runs the build script (adjust if you have a custom deploy step)

If you'd like, I can also add an `engines` entry to `package.json` and run `npm ci` + `npm run lint` to confirm there are no immediate issues.
