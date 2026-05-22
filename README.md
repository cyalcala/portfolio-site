# Cyrus Alcala - AI Builder & Technical Writer Portfolio

Welcome to my portfolio! I'm **Cyrus Alcala**, an AI Builder and Technical Writer specializing in building autonomous systems, RAG pipelines, CRM integrations, and authoring clear, developer-focused technical guides.

This website is built using **Vue.js**, **GSAP** (GreenSock Animation Platform), **Tailwind CSS**, and **Lenis** (for smooth scroll integration). It is deployed via **Cloudflare Pages** at [cyrusalcala.pages.dev](https://cyrusalcala.pages.dev).

---

## 🛠 Tech Stack

- **Framework**: Vue 3 (Composition API + TypeScript)
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP (GreenSock Animation Platform) + Custom ScrollTrigger Animations
- **Smooth Scroll**: Lenis Scroll
- **Build Tool**: Vite.js

---

## 🚀 Getting Started

To run the project locally, follow these steps:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

The site will be available locally at `http://localhost:5173/`.

---

## 📦 Production Build

To compile the application for production:

```bash
npm run build
```

The built site will be located in the `dist/` directory.

---

## ☁️ Deployment on Cloudflare Pages

To deploy this site on Cloudflare Pages, follow these steps:

1. **Push Changes to GitHub**:
   Ensure all changes are pushed to your repository:
   ```bash
   git add .
   git commit -m "Configure portfolio for Cyrus Alcala"
   git push origin main
   ```

2. **Set up Cloudflare Pages**:
   - Go to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
   - Navigate to **Workers & Pages** > **Pages** > **Connect to Git**.
   - Select your repository: `portfolio-site`.
   - Set the following build settings:
     - **Framework preset**: `Vite` (or `None`)
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Node.js Version**: `20` or later (configured in Environment Variables if needed, e.g. `NODE_VERSION=20`)
   - Click **Save and Deploy**.

3. **Configure Custom Domain**:
   - In Cloudflare Pages, go to your project settings.
   - Go to the **Custom domains** tab.
   - Add your custom domain or ensure the default `cyrusalcala.pages.dev` subdomain is configured.

---

## 🎨 Credits & Acknowledgments

- **Original UI Design**: Huy Nguyen ([huyng.xyz](https://www.huyng.xyz))
- **Original Code & Animations**: Ebraheem Alhetari ([GitHub](https://github.com/Hetari/portfolio))
