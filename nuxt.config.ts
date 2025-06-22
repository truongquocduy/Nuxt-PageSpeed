// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },

  // Tối ưu hóa CSS và JavaScript
  css: [],

  // Cấu hình Nitro cho performance
  nitro: {
    compressPublicAssets: true, // Bật compression cho static assets
    minify: true, // Minify output
    prerender: {
      crawlLinks: true // Pre-render các trang được link
    }
  },

  // Tối ưu hóa build
  build: {
    transpile: []
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Tách vendor chunks để tối ưu caching
            vendor: ['vue', '@vue/runtime-core'],
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ''
        }
      }
    }
  },

  // Tối ưu hóa rendering
  ssr: true, // Server-side rendering

  // Cấu hình experimental features cho performance
  experimental: {
    payloadExtraction: false, // Giảm kích thước payload
    viewTransition: true // Smooth transitions
  },

  // Tối ưu hóa router
  router: {
    options: {
      strict: true
    }
  },

  // Cấu hình TypeScript
  typescript: {
    strict: true,
    typeCheck: false // Tắt type checking trong build để tăng tốc
  }
})
