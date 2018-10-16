# ngx-malihu-scrollbar
[![CircleCI](https://circleci.com/gh/jfcere/ngx-malihu-scrollbar/tree/master.svg?style=shield&)](https://circleci.com/gh/jfcere/ngx-malihu-scrollbar/tree/master) [![Coverage Status](https://coveralls.io/repos/github/jfcere/ngx-malihu-scrollbar/badge.svg?branch=master)](https://coveralls.io/github/jfcere/ngx-malihu-scrollbar?branch=master) [![version](https://img.shields.io/npm/v/ngx-malihu-scrollbar.svg?style=flat)](https://www.npmjs.com/package/ngx-malihu-scrollbar) [![npm](https://img.shields.io/npm/l/ngx-malihu-scrollbar.svg)](https://opensource.org/licenses/MIT) [![dependencies Status](https://david-dm.org/jfcere/ngx-malihu-scrollbar/status.svg)](https://david-dm.org/jfcere/ngx-malihu-scrollbar) [![peerDependencies Status](https://david-dm.org/jfcere/ngx-malihu-scrollbar/peer-status.svg)](https://david-dm.org/jfcere/ngx-malihu-scrollbar?type=peer) [![monthly Downloads](https://img.shields.io/npm/dm/ngx-malihu-scrollbar.svg)](https://www.npmjs.com/package/ngx-malihu-scrollbar)

Angular Malihu jQuery Custom Scrollbar directive and service.

> Malihu jQuery Custom Scrollbar is a highly customizable scrollbar plugin that include vertical and/or horizontal scrollbar(s), adjustable scrolling momentum, mouse-wheel (via jQuery mousewheel plugin), keyboard and touch support, ready-to-use themes and customization via CSS, RTL direction support, option parameters for full control of scrollbar functionality, methods for triggering actions like scroll-to, update, destroy etc., user-defined callbacks and more.

- Demo available @ [jfcere.github.io/ngx-malihu-scrollbar](https://jfcere.github.io/ngx-malihu-scrollbar)
- Plunker available @ https://plnkr.co/edit/JcSTXc?p=preview

### Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [FAQ](#faq)
- [Demo application](#demo-application)
- [Contribution](#contribution)

## Installation

Use the following command to add ngx-malihu-scrollbar library to your `package.json` file. Note that jQuery will automatically be downloaded as a dependency.

```bash
npm install ngx-malihu-scrollbar --save
```

You will need to add Malihu Custom Scrollbar javascript and css files with jQuery to your application.

If you are using [Angular CLI](https://cli.angular.io/) you can follow the example below...

#### angular.json

```diff
"styles": [
  "src/styles.scss",
+ "node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css"
],
"scripts": [
+ "node_modules/jquery/dist/jquery.min.js",
+ "node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js"
],
```

#### tsconfig.app.json

```diff
{
  "compilerOptions": {
    ...
    "types": [
+     "jquery",
+     "mcustomscrollbar"
    ]
  },
  ...
}

```

## Usage

You must import `MalihuScrollbarModule` inside your module to be able to use `malihu-scrollbar` directive or `MalihuScrollbarService`.

```diff
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
+ import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
+   MalihuScrollbarModule.forRoot(),
  ],
  declarations: [HomeComponent],
})
```

ngx-malihu-scrollbar provides both a directive and a service to apply the custom scrollbar on your HTML element.

> For a complete list of available customization options please refer to the original [Malihu Custom Scrollbar documentation](http://manos.malihu.gr/jquery-custom-content-scroller/).

### Directive

You can use `malihu-scrollbar` directive directly on an HTML element and provide plugin options using `scrollbarOptions` input property.

#### example.component.ts
```typescript
public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };
```

#### example.component.html
```html
<div malihu-scrollbar [scrollbarOptions]="scrollbarOptions">
   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
</div>
```

### Service

Alternatively, you can initialize scrollbar customizations using `MalihuScrollbarService` by providing either a string selector, a jQuery object or an HTML element along with the scrolling options.

The service also provide access to other Malihu Custom Scrollbar methods such as `scrollTo`, `stop`, `update`, `disable` and `destroy`.

```typescript
constructor(
  private mScrollbarService: MalihuScrollbarService,
) { }

ngAfterViewInit() {
  this.mScrollbarService.initScrollbar('#myElementId', { axis: 'y', theme: 'dark-thick', scrollButtons: { enable: true } });
}

ngOnDestroy() {
  this.mScrollbarService.destroy('#myElementId');
}
```

## FAQ

### Can we customize the scrollbars?
Of course, the scrollbars are fully customizable. You can easily clone an existing theme and modify the CSS to apply your own styling. Follow the instructions provided on the original [Malihu Custom Scrollbar Plugin documentation](http://manos.malihu.gr/jquery-custom-content-scroller/#styling-section) for more details.

> The "custom-theme" example on the bottom of the [demo](https://jfcere.github.io/ngx-malihu-scrollbar) is a good example of customization where I created a my own "metro" theme.

### How can we apply scrollbar customization on the body?
Using `MalihuScrollbarService` you can target `document.body` to apply customization to the body scrollbar.

> Note that this will automaticaly add some specific CSS to the `<body>` element that is needed to allow scrollbar customization.

```typescript
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

constructor(
  private mScrollbarService: MalihuScrollbarService,
) { }

ngOnInit() {
  this.mScrollbarService.initScrollbar(document.body, { axis: 'y', theme: 'dark-3' });
}
```

## Demo application

You can find the [demo](https://jfcere.github.io/ngx-malihu-scrollbar) source code inside the `demo` directory.

The following commands will clone the repository, install npm dependencies and serve the application @ [http://localhost:4200](http://localhost:4200)

```bash
git clone https://github.com/jfcere/ngx-malihu-scrollbar.git

npm install

ng serve
```

## Contribution

Contributions are always welcome, just make sure that ...

- Your code style matches with the rest of the project
- Unit tests pass
- Linter passes

## License

Licensed under [MIT](https://opensource.org/licenses/MIT).
