/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    build: {
      emptyOutDir: true,
      lib: {
        entry: path.resolve(__dirname, './src/lib/index.ts'),
        fileName: (format) => `index.${format}.js`,
        name: 'PaginationTable',
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
      sourcemap: true,
    },
    plugins: [react(), dts(), cssInjectedByJsPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      open: false,
      port: 3099,
      strictPort: true,
    },
    test: {
      css: true,
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/setupTests.ts',
    },
  });
};
