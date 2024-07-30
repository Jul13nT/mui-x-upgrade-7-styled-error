import react from '@vitejs/plugin-react-swc';
import { dirname, resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import BaseConfig from '../../vite.base';

export default () => {
    const baseConfig = BaseConfig();

    return defineConfig({
        ...baseConfig,
        base: '/openapi',
        server: {
            port: 8080,
            watch: {
                usePolling: true,
            },
        },
        resolve: {
            alias: [
                ...[
                    'api',
                    'assets',
                    'components',
                    'context',
                    'generated',
                    'hooks',
                    'pages',
                    'styles',
                    'utils',
                    'i18n',
                ].map((folder) => ({
                    find: folder,
                    replacement: resolve(dirname(fileURLToPath(import.meta.url)), `src/${folder}`),
                })),
            ],
        },
        build: {
            ...baseConfig.build,
            rollupOptions: {
                ...baseConfig.build.rollupOptions,
                plugins: [visualizer()],
            },
        },
        plugins: [react()],
    });
};
