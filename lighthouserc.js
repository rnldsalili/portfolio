module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000',
      ],
      startServerCommand: 'pnpm run preview',
      startServerReadyPattern: 'Local:   http://localhost:3000',
      startServerReadyTimeout: 30000,
      numberOfRuns: 3,
      settings: {
        // Handle client-side routing
        chromeFlags: '--no-sandbox --disable-setuid-sandbox',
        
        // Wait for React to hydrate
        skipAudits: ['uses-http2'],
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.75 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'categories:seo': ['warn', { minScore: 0.8 }],
        'categories:pwa': 'off', // Turn on if you want PWA scoring

        // React-specific optimizations
        'unused-javascript': ['warn', { maxLength: 0 }],
        'unused-css-rules': ['warn', { maxLength: 0 }],
        'modern-image-formats': 'warn',
        'uses-webp-images': 'warn',
        'efficient-animated-content': 'warn',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};