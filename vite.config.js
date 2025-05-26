import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/entry-form-app/', // GitHub Pages のパス
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'マルチステップフォーム',
        short_name: 'フォーム',
        start_url: '/entry-form-app/', // ← ここが重要！
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/entry-form-app/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/entry-form-app/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
