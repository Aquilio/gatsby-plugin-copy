# gatsby-plugin-copy [![Build Status](https://travis-ci.org/Aquilio/gatsby-plugin-copy.svg?branch=master)](https://travis-ci.org/Aquilio/gatsby-plugin-copy.svg?branch=master)

Gatsby plugin that copies files and directories.

## Why not [use the `/static` folder](https://www.gatsbyjs.org/docs/adding-images-fonts-files/#using-the-static-folder)?

If the files you need to copy depend on some build time logic like environment variables, this plugin is for you. Otherwise, take advantage of Gatsby's built-in ability to copy everything in the `static` folder to the `public` folder.

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
