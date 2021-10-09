import path from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      "~": `${path.resolve(__dirname, "src")}`,
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'DASUIShared',
      fileName: format => `das-ui-shared.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    }
  }
})
