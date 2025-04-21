import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import pugPlugin from 'vite-plugin-pug'
import autoprefixer from 'autoprefixer'
import { minify } from 'html-minifier-terser'

export default defineConfig({
  root: './dev',
  base: './',
  server: {
    host: true,
    port: 2001,
  },
  build: {
    target: 'es2015',
    outDir: '../build',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, './dev/index.html'),
        home: resolve(__dirname, './dev/home.html'),
        services: resolve(__dirname, './dev/services.html'),
        'services-detail': resolve(__dirname, './dev/services-detail.html'),
        career: resolve(__dirname, './dev/career.html'),
        'career-detail': resolve(__dirname, './dev/career-detail.html'),
        'ui-kit': resolve(__dirname, './dev/ui-kit.html'),
        components: resolve(__dirname, './dev/components.html'),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: `${resolve(__dirname, './dev')}`,
      },
    ],
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  plugins: [
    pugPlugin(
      {
        localImports: true,
      },
      {
        baseUrl: resolve(__dirname, './dev'),
      },
    ),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
    {
      name: 'html-minifier',
      transformIndexHtml: async (html) => {
        return await minify(html, {
          removeClosingSlash: true,
        })
      },
    },
  ],
})
