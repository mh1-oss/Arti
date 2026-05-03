# Deploying to Cloudflare Pages

This project is optimized for **Cloudflare Pages** using Next.js Static Site Generation (SSG).

## Prerequisites
- A Cloudflare account.
- The project code pushed to a Git repository (GitHub, GitLab, or Bitbucket).

## Step-by-Step Deployment

1.  **Log in to Cloudflare Dashboard**:
    Go to [dash.cloudflare.com](https://dash.cloudflare.com/) and navigate to **Workers & Pages**.

2.  **Create a New Application**:
    Click **Create application** > **Pages** > **Connect to Git**.

3.  **Select Your Repository**:
    Choose the repository containing this project.

4.  **Configure Build Settings**:
    Cloudflare should automatically detect Next.js. If not, use these settings:
    - **Framework preset**: `Next.js`
    - **Build command**: `npm run build`
    - **Build output directory**: `out`
    - **Root directory**: `/` (or leave blank if it's the root)

5.  **Environment Variables (Optional)**:
    Ensure you are using **Node.js version 18 or higher**. You can set this in Cloudflare under `Settings > Builds & Deployments > Tooling` or by adding an environment variable `NODE_VERSION = 18`.

6.  **Deploy**:
    Click **Save and Deploy**. Cloudflare will now build your site and host it on their global edge network.

## Troubleshooting: OpenNext / Standalone Error
If you see an error like `Error: ENOENT: no such file or directory, open '.next/standalone/...'`, it means Cloudflare is trying to deploy your site as a **Full-stack Application** using OpenNext instead of a **Static Site**.

### To fix this:
1.  **In Cloudflare Dashboard**:
    - Go to **Workers & Pages** > **[Your Project]** > **Settings** > **Builds & deployments**.
    - Ensure **Build command** is set to `npm run build`.
    - Ensure **Build output directory** is set to `out` (Next.js 14+ static output folder).
2.  **Compatibility Date**:
    - Ensure the compatibility date is recent (e.g., `2024-01-01`).
3.  **Root Directory**:
    - Set it to `/`.

### Why avoid OpenNext for this project?
This project is configured for `output: 'export'` in `next.config.ts`. This generates a pure static site in the `out/` folder, which is:
- **Faster**: Served directly from the CDN without executing Worker code.
- **Cheaper**: No Worker execution limits or costs.
- **Simpler**: No need for complex standalone configurations.

If you *really* need server-side features (like Next.js API routes), you would need to change `output: 'export'` to `output: 'standalone'` in `next.config.ts`, but for a corporate branding site, static is highly recommended.

## Local Verification
Before deploying, you can verify the build locally:
```bash
npm run build
# This will create an 'out' directory
npx serve out
```
