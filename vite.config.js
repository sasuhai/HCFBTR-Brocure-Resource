import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    // Set base path for Firebase Hosting deployment
    // Firebase serves from root, so base should be '/'
    // For GitHub Pages, change back to '/HCFBTR-Brocure-Resource/'
    base: '/',

    plugins: [
        react({
            // Use automatic JSX runtime (no need to import React in every file)
            jsxRuntime: 'automatic'
        })
    ],
})
