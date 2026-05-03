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

## Why this setup works
- **Static Export**: By using `output: 'export'` in `next.config.ts`, the site is converted to pure HTML/CSS/JS, which is perfectly suited for CDN delivery.
- **No Node.js Runtime**: This avoids the need for a dedicated server, making it extremely fast and cost-efficient.
- **Edge Compatibility**: All assets are served from the nearest Cloudflare data center to your users.

## Local Verification
Before deploying, you can verify the build locally:
```bash
npm run build
# This will create an 'out' directory
npx serve out
```
