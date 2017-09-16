export default {
  input: 'dist/lib/index.js',
  output: {
    file: 'dist/bundles/ngx-malihu-scrollbar.umd.js',
    format: 'umd',
  },
  sourceMap: false,
  name: 'ng.malihuscrollbar',
  globals: {
    '@angular/core': 'ng.core',
    'jquery': 'jquery',
    'malihu-custom-scrollbar-plugin': 'malihu-custom-scrollbar-plugin',
  },
  external: [
    '@angular/core',
    'jquery',
    'malihu-custom-scrollbar-plugin',
  ],
}
