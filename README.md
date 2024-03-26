# Frontend_practice

## Done:
### Images and media optimisation
1. Clone, run Lighthouse add README.md, to capture fixes done for steps 1-3
- Lighthouse: 86/100
3. Allocate problematic resources (FONTS/CSS/IMGS/VIDEO)
- added lazy loading for images
- applied css and js minification
3. Added bundler
4. Added bundle analyse (https://www.npmjs.com/package/vite-bundle-visualizer )
5. Added Lighthouse to build step (https://github.com/GoogleChrome/lighthouse#using-the-node-cli )
7. Apply changes, see the result improvements
- Lighthouse: 90+/100 (max score: 98)
8. Deployed to Github


## PWA Development

1. Created a new branch named "pwa" to continue PWA development.

```bash
git checkout -b pwa 
```

2. Added PWA features to the project:
- Set up local HTTPS and Vite using mkcert and Vite plugin basic SSL
- Added a manifest.json file with app details like name, icons, background color, etc.
- Made the app installable for users.
- Integrated Geolocation detection for Banner #1.
- Integrated Service Worker (SW) for caching resources for offline use using custom or Workbox.
- Added online/offline detection for Banner #2.
- Implemented push notification after 15 seconds for Banner #3.


## Server Development

1. Created a new branch named "server" to continue development with an ExpressJS server.

```bash
git checkout -b server
```
1. Added ExpressJS server features:
2. Created a /server folder to contain the server code. 
3. Set up a basic ExpressJS app to serve static files: ExpressJS Static Files. 
4. Configured the server to serve the built version of the frontend app. 
5. Implemented Gzip or Brotli compression for better performance. 
6. Added Etags headers for caching: ExpressJS Etags. 
7. Set up PM2 for running the server in production. 
