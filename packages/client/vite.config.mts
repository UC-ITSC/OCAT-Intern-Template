import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-expect-error this plugin has TS issues
import eslint from 'vite-plugin-eslint';
import viteTsconfigPaths from 'vite-tsconfig-paths';

const build_dir = process.env.BUILD_PATH || `build`;

export default defineConfig(({ command }) => ({
  build: {
    outDir: build_dir,
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  plugins: [
    react(),
    viteTsconfigPaths(),
    eslint({
      failOnError: command === `build`,
      failOnWarning: command === `build`,
    }),
  ],
  server: {
    open: true,
    port: 3000,
    proxy: {
      '/api': {
        changeOrigin: true,
        target: `http://localhost:4000`,
      },
    },
  },
}));
