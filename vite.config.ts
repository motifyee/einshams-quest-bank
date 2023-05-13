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
            registerType: 'prompt',
            // includeAssets: ['burger.svg'],
            // globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
            manifest: {
                name: 'Einshams',
                short_name: 'Einshams',
                description: 'بنوك أسئلة كلية زراعة عين شمس',
                theme_color: '#ffffff',
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
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
