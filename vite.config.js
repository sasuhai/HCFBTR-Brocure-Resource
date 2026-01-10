import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    // Set base path for GitHub Pages deployment
    // This allows the app to work at https://username.github.io/repo-name/
    base: '/HCFBTR-Brocure-Resource/',

    plugins: [
        react({
            // Use automatic JSX runtime (no need to import React in every file)
            jsxRuntime: 'automatic'
        })
    ],
})
