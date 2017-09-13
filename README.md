# gatsby-plugin-copy

Gatsby plugin that copies files and directories. Useful for copying 
files to the `public` directory that cannot be imported.

## Install

`npm install --save gatsby-plugin-copy`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-copy',
    options: {
        verbose: true // outputs a message for each file copied
      'robots/robots.production': 'robots.txt', // Add one entry per file to copy
    },
  },
]
```
