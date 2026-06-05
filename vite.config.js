import { defineConfig } from 'vite';

// Serve /en (and any future language prefix) as the same SPA entry during dev.
// Production handles this via the rewrite in vercel.json.
const spaFallback = () => ({
    name: 'lang-spa-fallback',
    configureServer(server) {
        server.middlewares.use((req, _res, next) => {
            if (req.url === '/en' || req.url.startsWith('/en?') || req.url.startsWith('/en#')) {
                req.url = '/';
            }
            next();
        });
    },
});

export default defineConfig({
    plugins: [spaFallback()],
});
