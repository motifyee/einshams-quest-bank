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
            },
            manifest: {
                name: 'Einshams',
                short_name: 'Einshams',
                description: 'بنوك أسئلة كلية زراعة عين شمس',
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
        outDir: 'docs',
    },
    base: './',
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
