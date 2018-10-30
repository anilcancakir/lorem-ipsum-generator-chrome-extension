const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('src/popup/popup.js', 'dist/popup/popup.js')
    .sass('src/popup/popup.scss', 'dist/popup/popup.css')
    .copy('src/popup/popup.html', 'dist/popup/popup.html')
    .copy('assets', 'dist/assets')
    .copy('manifest.json', 'dist/manifest.json')
    .sourceMaps();
