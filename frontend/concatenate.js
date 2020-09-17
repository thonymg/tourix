const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/frontend/runtime.js',
'./dist/frontend/polyfills.js',
'./dist/frontend/main.js',
]
await fs.ensureDir('../assets/vendor')
await concat(files, '../assets/vendor/elements.js');
await fs.copyFile('./dist/frontend/styles.css', '../assets/css/antd-styles.css')
})()