# ngx-malihu-scrollbar

Angular 2 Malihu jQuery Custom Scrollbar directive and service.

Demo available @ [jfcere.github.io/ngx-malihu-scrollbar](https://jfcere.github.io/ngx-malihu-scrollbar)

## Installation

Use the following command to add ngx-malihu-scrollbar library to your `package.json` file. Note that jQuery will automatically be downloaded as a dependency.

```bash
npm install ngx-malihu-scrollbar --save
```

## Configuration

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

You will need to add both Malihu Custom Scrollbar javascript file and jQuery to your application.

If you are using [Angular CLI](https://cli.angular.io/) you can add the files by modifying the `angular-cli.json` file as below ...

```diff
"styles": [
  "styles.scss",
+ "../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css"
],
"scripts": [
+ "../node_modules/jquery/dist/jquery.js",
+ "../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js"
],
```

## Usage

ngx-malihu-scrollbar provides both a directive and a service to apply the custom scrollbar on your HTML element.

> For a complete list of available customization options please refer to the original [Malihu Custom Scrollbar documentation](http://manos.malihu.gr/jquery-custom-content-scroller/).

### Directive

You can use `malihu-scrollbar` directive directly on the HTML element and provide plugin options using `scrollbarOptions` input property.

##### example.component.ts
```typescript
public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };
```

##### example.component.html
```html
<div malihu-scrollbar [scrollbarOptions]="scrollbarOptions">
   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
</div>
```

### Service

Alternatively, you can initialize scrollbar customizations using `MalihuScrollbarService` by providing either a selector, jQuery object or a HTML element along with the scrolling options.

The service also provide access to other Malihu Custom Scrollbar methods such as `scrollTo`, `update`, `disable` and `destroy`.

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

## Demo application

You can find the [demo](https://jfcere.github.io/ngx-malihu-scrollbar) source code inside the `src/app/malihu-scrollbar-demo` directory.

The following commands will clone the repository, install npm dependencies and serve the application @ [http://localhost:4200](http://localhost:4200)

```bash
git clone https://github.com/jfcere/ngx-malihu-scrollbar.git

npm install

ng serve
```

## Road map

Here is the list of tasks that will be done on this library in a near future ...

- Publish demo on github pages
- Implement tests
- Add CircleCI integration
- Transpile library to Javascript

## Contribution

Contributions are always welcome, just make sure that ...

- Your code style matches with the rest of the project
- Unit tests pass
- Linter passes

## License

Licensed under [MIT](https://opensource.org/licenses/MIT).