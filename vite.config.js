import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: true,
  },
  plugins: [
    mkcert(),
    VitePWA({
      includeAssets: ["favicon.ico", "icons/*.{png,svg}"],
      manifest: {
        name: "Basic mindar PWA",
        icons: [
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          // {
          //   urlPattern: ({ request, url }) => {
          //     return (
          //       request.destination === "script" ||
          //       url.pathname.endsWith(".webmanifest")
          //     );
          //   },
          //   handler: "StaleWhileRevalidate",
          //   options: {
          //     cacheName: "scripts",
          //   },
          // },
          // {
          //   urlPattern: ({ request }) => {
          //     return request.destination === "image";
          //   },
          //   handler: "CacheFirst",
          //   options: {
          //     cacheName: "images",
          //     expiration: {
          //       maxEntries: 60,
          //       maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
          //     },
          //     cacheableResponse: {
          //       statuses: [0, 200],
          //     },
          //   },
          // },
          // {
          //   urlPattern: ({ url }) => {
          //     return url.pathname.endsWith(".mind");
          //   },
          //   handler: "CacheFirst",
          //   options: {
          //     cacheName: "target-markers",
          //     expiration: {
          //       maxEntries: 60,
          //       maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
          //     },
          //     cacheableResponse: {
          //       statuses: [0, 200],
          //     },
          //   },
          // },
        ],
      },
    }),
  ],
});
