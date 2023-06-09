import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            injectRegister: 'auto',
            registerType: 'autoUpdate',
            // includeAssets: ['burger.svg'],
            // globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
            workbox: {
                // workbox options for generateSW
                skipWaiting: true,
                globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
                runtimeCaching: [
                    {
                        urlPattern: new RegExp(
                            '^https://fonts.(?:googleapis|gstatic).com/(.*)'
                        ),
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts',
                            expiration: {
                                maxEntries: 30,
                                maxAgeSeconds: 60 * 60 * 24 * 365, // 365 days
                            },
                        },
                    },
                ],
            },
            manifest: {
                name: 'كلية الزراعة — جامعة عين شمس',
                short_name: 'زراعة عين شمس',
                description: 'بنوك أسئلة كلية الزراعة — عين شمس',
                theme_color: '#15803d',
                start_url: '/',
                icons: [
                    {
                        src: 'icon.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        }),
    ],
    build: {
        chunkSizeWarningLimit: 700,
        outDir: 'docs',
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id
                            .toString()
                            .split('node_modules/')[1]
                            .split('/')[0]
                            .toString();
                    }
                },
            },
        },
    },
    base: './',
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
