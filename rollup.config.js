export default {
  entry: 'dist/lib/malihu-scrollbar.module.js',
  dest: 'dist/bundles/ngx-malihu-scrollbar.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.malihuscrollbar',
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
