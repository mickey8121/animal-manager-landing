require('dotenv').config({
  path: `environments/.env.${process.env.APP_NAME || 'alpaca'}.${process.env.BUILD_ENV || 'dev'}`,
});

const path = require('path');

const writeEnvScss = require('./scripts/write-env-scss.js');

writeEnvScss('./src/styles/variables/_env.scss')

const clientConfig = require('./client-config');

const isProd = process.env.NODE_ENV === 'production';

exports.default = {
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-svg',
        'gatsby-transformer-sharp',
        {
          resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
          options: {
            devMode: true,
          },
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                components: path.join(__dirname, 'src/components'),
                helpers: path.join(__dirname, 'src/helpers'),
                images: path.join(__dirname, 'src/images'),
                src: path.join(__dirname, 'src'),
                styles: path.join(__dirname, 'src/styles'),
                hooks: path.join(__dirname, 'src/hooks'),
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/`,
            },
            __key: 'images',
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                ...clientConfig.sanity,
                token: process.env.SANITY_READ_TOKEN,
                watchMode: !isProd,
                overlayDrafts: !isProd,
            },
        },
    ],
};
