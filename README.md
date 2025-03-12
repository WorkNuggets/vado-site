# VADO Site

_AI-Powered Real Estate Platform for Enhanced Home Tours_

Project Overview
----------------

Vado is an AI-powered real estate platform that transforms the way people tour homes. It enhances **self-guided home tours** with real-time **AI insights**, immersive **AR visualization** for potential renovations or furniture placement, and automated follow-ups between agents and buyers. Built with Astro 4.0 and Tailwind CSS, Vado leverages the **AstroWind** template as a foundation. The website is optimized for **SEO**, **high performance**, and ease of use, ensuring fast load times and great user experience on any device.

Key Features
------------

*   **Self-Guided Tours:** Users can tour open houses at their own pace without needing an agent present on-site. The platform provides guidance and information as users navigate the property.
    
*   **AI-Powered Insights:** As users explore a home, Vado’s AI offers real-time insights about the property—highlighting features, suggesting potential improvements or modifications, and answering common questions using AI.
    
*   **AR Visualization:** Integrated augmented reality allows users to preview renovations and furniture placement. Point your device in a room to visualize new paint colors, flooring, or how furniture might fit.
    
*   **Seamless Agent Follow-ups:** After a tour, Vado automatically assists with follow-up communication. It can send tour summaries to the buyer, notify the real estate agent, and even schedule meetings or answer questions using AI-driven responses.
    
*   **Lead Tracking:** For real estate agents, Vado keeps a record of potential buyers and their tour activities. Agents get a dashboard of leads with insights on what properties were viewed and what interested each buyer, helping prioritize follow-ups.
    

Installation & Setup
--------------------

**Prerequisites:** Before you begin, ensure you have the following installed on your development machine:

*   **Node.js** – version 18 or higher (to support Astro 4.0 and its dependencies)
    
*   **npm** – version 8 or higher (comes with Node, for managing packages)
    
*   **Git** – for cloning the repository
    

**Setup Steps:**

1.  bashCopygit clone https://github.com/WorkNuggets/vado.git_(Replace the URL with your SSH or HTTPS link if different.)_
    
2.  bashCopycd vado
    
3.  bashCopynpm install
    
4.  bashCopynpm run devThis will start the site locally (by default at **http://localhost:3000**). You should see console output from Astro indicating the server is running. Open your browser at the shown localhost URL to view the Vado website in development mode with hot-reloading.
    

Project Structure
-----------------

This project follows the standard Astro and AstroWind structure. Key directories include:

*   **src/pages/** – Contains the page components (Astro or MDX files) that correspond to site routes. For example, src/pages/index.astro is the homepage, and other .astro or .md files here become distinct pages on the website.
    
*   **src/components/** – Contains reusable UI components, organized by feature or type. You’ll find components for layout (headers, footers), widgets, and any custom elements used across pages. This makes it easy to maintain and reuse common pieces of the UI.
    
*   **src/layouts/** – Contains layout components that wrap pages (e.g., base page layout, blog post layout if applicable). Layouts help avoid repeating common page structure and SEO tags on every page.
    
*   **public/** – Static assets such as images, icons, and any files that don’t need processing. Files in public are served at the root of the site. For example, public/robots.txt will be accessible as /robots.txt on the deployed site.
    
*   **Other notable files:**
    
    *   astro.config.mjs – Astro configuration, defining site build options and any integrations.
        
    *   src/config.yaml – Main configuration file for site-wide settings (site title, metadata, toggling features, etc.).
        
    *   package.json – Lists dependencies and contains script commands for building and running the project.
        

> **Note:** Astro will build pages from src/pages/ automatically. Components in src/components/ can be imported as needed into pages or layouts. Any dynamic behavior or interactive widgets can use frameworks like React/Vue/Svelte within Astro if required (AstroWind is set up to be framework-agnostic for islands of interactivity).

Commands & Configuration
------------------------

**Development & Build Commands:** (run these in the project root directory)

*   npm run dev – Start the local development server (with hot-reloading) at **http://localhost:3000**. Use this during development to see changes in real-time.
    
*   npm run build – Build the website for production. This generates an optimized static site in the dist/ folder. Use this before deploying the site.
    
*   npm run preview – Preview the production build locally. This serves the content from the dist/ folder so you can test the build output in a local server environment.
    
*   npm run format – Format the code using Prettier, following the project’s style rules. (Useful before committing changes.)
    

**Configuration:**Key configuration options are located in **src/config.yaml**. This YAML file allows you to adjust site-wide settings without digging into the code. For example, you can update the site name, base URL, default SEO metadata (title and description templates), and toggle certain features. If Vado has feature flags (for example, enabling/disabling the blog or certain AI features), they would be configured here as well. After editing src/config.yaml, restart the dev server to see changes take effect. Be sure to also update any environment variables or integration keys (if any AI or AR services require API keys) – these might be in a .env file (not committed to the repo) as needed.

Deployment Options
------------------

Vado is a static-site project (with dynamic functionality handled via client-side scripts or third-party services), so it can be deployed to any static hosting provider or integrated into serverless platforms. Here are common deployment methods:

*   **Manual Deployment:** Generate a production build by running npm run build. This will output a dist/ directory containing the static files. You can then upload the contents of dist/ to any hosting service (such as AWS S3 + CloudFront, GitHub Pages, Firebase Hosting, etc.). Ensure you also upload the public/ assets (which are included in dist after the build). If deploying to a subpath (like a GitHub Pages project page), remember to set the base in astro.config.mjs or src/config.yaml accordingly.
    
*   **Deploy to Vercel:** Vercel provides first-class support for Astro projects. You can either use the **Vercel CLI** or the GitHub integration for continuous deployment.
    
    *   **GitHub Integration:** Push this repository to GitHub (if not already). In your Vercel dashboard, import the project by selecting the GitHub repo. Vercel will autodetect Astro and configure the build (usually, npm install, then npm run build). Set the output directory to dist. Once deployed, Vercel will provide a live URL for your site, and it will auto-deploy new commits on the chosen branch (e.g., main).
        
    *   **One-Click Deploy:** You can also use a "Deploy to Vercel" button if provided in the repo (look for a Vercel badge/link). Clicking it will clone the repo into your Vercel account and start a deployment._(Vercel handles serverless functions too, but as Vado is static with Astro, no special config is needed beyond the default.)_
        
*   **Deploy to Netlify:** Netlify is another popular option for Astro projects.
    
    *   **Netlify UI:** In Netlify, choose "New site from Git" and select your repository. Set the build command to npm run build and the publish directory to dist/. Netlify will build and deploy the site automatically.
        
    *   **Netlify CLI:** Alternatively, use netlify deploy command from the Netlify CLI after building, to push the dist/ folder to a Netlify site.
        
    *   The repo includes a netlify.toml (if using AstroWind’s default) which may already be configured for optimal Netlify settings. This can handle headers, redirects, and other Netlify-specific configurations.
        

Both Vercel and Netlify provide CDN hosting, SSL, and continuous deployment out of the box, which suits Vado’s needs for speed and reliability. Feel free to deploy on other services like **GitHub Pages**, **Cloudflare Pages**, or **Surge** – Astro’s output is static, so any static host will work. Just remember to adjust base URLs or configuration if the site isn't at the root of a domain.

Troubleshooting & Support
-------------------------

Having trouble? Here are some common issues and solutions:

*   **Development server not starting or crashing:** Ensure your Node.js version is up-to-date (Node 18+). Older Node versions may not support Astro 4 features. If you see errors during npm install, try deleting the node\_modules folder and running a clean install.
    
*   **Tailwind CSS not applying styles:** If you don’t see Tailwind styles, verify that the Tailwind CSS imports are correct. The main Tailwind CSS file (usually src/assets/styles/tailwind.css in AstroWind) should be imported in your layout or astro.config.mjs. Also, ensure the dev server is running so Tailwind can build the styles.
    
*   **Build or deployment issues:** If npm run build fails, check the error message. It could be an import that Astro can't resolve or a missing environment variable. Ensure that any external service keys (for AI or AR features) are properly set in a .env file and that the Astro integration for environment variables is configured. For deployment, double-check that the correct build output folder (dist) is being published.
    
*   **AR or AI features not working locally:** Some AR functionalities might require HTTPS (for camera access) or specific device capabilities. If testing locally, you might need to use astro preview with HTTPS or deploy to test those features. Similarly, AI insights might be stubbed or require an internet connection to fetch data. Refer to any docs specific to those features if provided.
    

For further help, you can refer to the following resources:

*   **Astro Documentation:** The official Astro docs cover how Astro works, integration guides, and troubleshooting common Astro issues. This is helpful if you need to customize the framework or debug build issues.
    
*   **AstroWind Documentation:** Since Vado is based on the AstroWind template, you can review the AstroWind README and docs for additional guidance. The template’s documentation includes more details on project structure, configuring SEO, and deploying to various platforms.
    
*   **Astro Discord & Forums:** The Astro community is very welcoming. If you encounter an issue you can’t resolve, consider asking on the official Astro Discord or GitHub Discussions. Often, someone may have faced a similar issue.
    

Credits & Contact
-----------------

**Credits:** This website was built using the AstroWind template, a wonderful open-source Astro + Tailwind starter created by _onWidget_ and contributors. We thank the Astro open-source community and the maintainers of AstroWind for the solid foundation and best practices that helped jumpstart Vado.

**Maintainer:** The Vado project is maintained by **WorkNuggets**, with contributions from our development team. We are continuously working to improve the platform and welcome feedback or suggestions.

**Contact Us:** For any questions, feedback, or support regarding Vado, please reach out through one of the following channels:

*   **Email:** _hello@vado.com_ (for general inquiries or support)
    
*   **LinkedIn:** Vado on LinkedIn (follow us for updates and professional inquiries)
    
*   **Twitter:** @VadoAI (tweet us your feedback or share your experience!)
    

We hope you enjoy using Vado and that it makes your home tour experience smarter and more convenient. If you like this project, feel free to star the repository, and if you encounter any issues or have ideas for improvements, open an issue or pull request. Thank you for checking out Vado!