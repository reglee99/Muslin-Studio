# Muslin Studio

Design dresses on a 3D dress form, generate fabric prints, and download printable sewing patterns drafted from your measurements. This is the standalone web version: it runs entirely in the browser, with no account, server or AI service.

## What's in this folder

| File | What it is |
| --- | --- |
| `index.html` | The whole app |
| `vendor/three.min.js` | 3D library (three.js r128, MIT license) |
| `vendor/jspdf.umd.min.js` | PDF library (jsPDF 2.5.1, MIT license) |
| `manifest.webmanifest`, `icons/` | Name and icon for Add to Home Screen |
| `sw.js` | Lets the app open without an internet connection |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Put it online with GitHub Pages (free)

1. Sign in to github.com (or create a free account).
2. Click **+** → **New repository**. Name it `muslin-studio`, choose **Public**, and click **Create repository**.
   On a free GitHub account, Pages only works with public repositories. Your designs are never in the repository; they stay on your phone.
3. On the new repository's page, click **uploading an existing file**. Drag in everything from this folder, including the `vendor` and `icons` folders, then click **Commit changes**.
4. Go to **Settings** → **Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose the **main** branch and the **/ (root)** folder, and click **Save**.
5. After a minute or two, the site is live at `https://YOUR-USERNAME.github.io/muslin-studio/`. The Pages settings page shows the address once it's ready.

## Use it on your iPhone

1. Open the address in Safari.
2. Tap the **Share** button, then **Add to Home Screen**.
3. Open Muslin Studio from its Home Screen icon. It runs full screen, works offline, and Safari keeps its saved designs. Safari can clear storage for websites you haven't opened in a while; Home Screen apps don't have that limit.

Downloads (PDF, SVG, PNG and design files) open the iPhone share sheet, so you can choose **Save to Files**, AirDrop, or email.

## Your designs

- **Save** keeps a design in the library on the device and browser you're using. Designs don't sync between devices.
- **Library → Export design file** saves a `.muslin.json` file. Use it as a backup, or to move a design to another device with **Import design file**.
- Design files from the version hosted in Claude open here too, and the other way around.

## Optional: use your own domain

1. In the repository, go to **Settings** → **Pages**. Under **Custom domain**, enter your domain (for example `www.example.com`) and click **Save**. Do this before changing DNS.
2. At your domain registrar, add DNS records:
   - For `www.example.com`: a **CNAME** record named `www` pointing to `YOUR-USERNAME.github.io` (without the repository name).
   - For `example.com` itself: four **A** records named `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`.
   - Set up both if you want both addresses to work; GitHub redirects one to the other.
3. DNS changes can take up to 24 hours. Once GitHub offers it, tick **Enforce HTTPS** on the same Pages settings page. The app needs HTTPS for offline use and Add to Home Screen.

GitHub's guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Updating the app later

Upload the changed files to the repository the same way (they replace the old ones). Then open `sw.js`, change `muslin-studio-v1` to `muslin-studio-v2` (and so on each time), and upload it too. That tells phones to fetch the new version instead of the saved copy.

## Try it on your computer first (optional)

The app needs to be served from a web address rather than opened as a file. In this folder, run `python3 -m http.server 8000` and open http://localhost:8000.
