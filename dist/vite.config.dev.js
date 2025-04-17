"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vitePluginImageOptimizer = require("vite-plugin-image-optimizer");

var _vite = require("vite");

var _path = require("path");

var _vitePluginPug = _interopRequireDefault(require("vite-plugin-pug"));

var _autoprefixer = _interopRequireDefault(require("autoprefixer"));

var _htmlMinifierTerser = require("html-minifier-terser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _vite.defineConfig)({
  root: './dev',
  base: './',
  server: {
    host: true,
    port: 2001
  },
  build: {
    target: 'es2015',
    outDir: '../build',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: (0, _path.resolve)(__dirname, './dev/index.html'),
        home: (0, _path.resolve)(__dirname, './dev/home.html'),
        'ui-kit': (0, _path.resolve)(__dirname, './dev/ui-kit.html'),
        components: (0, _path.resolve)(__dirname, './dev/components.html')
      },
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]"
      }
    },
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false
      }
    }
  },
  resolve: {
    alias: [{
      find: '@',
      replacement: "".concat((0, _path.resolve)(__dirname, './dev'))
    }]
  },
  css: {
    postcss: {
      plugins: [(0, _autoprefixer["default"])({})]
    }
  },
  plugins: [(0, _vitePluginPug["default"])({
    localImports: true
  }, {
    baseUrl: (0, _path.resolve)(__dirname, './dev')
  }), (0, _vitePluginImageOptimizer.ViteImageOptimizer)({
    png: {
      quality: 80
    },
    jpeg: {
      quality: 80
    },
    jpg: {
      quality: 80
    }
  }), {
    name: 'html-minifier',
    transformIndexHtml: function transformIndexHtml(html) {
      return regeneratorRuntime.async(function transformIndexHtml$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap((0, _htmlMinifierTerser.minify)(html, {
                removeClosingSlash: true
              }));

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]
});

exports["default"] = _default;