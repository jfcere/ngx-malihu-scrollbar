import { MalihuScrollbarService } from './../malihu-scrollbar/malihu-scrollbar.service';
import { OnInit, Component } from '@angular/core';

interface ITheme {
  name: string;
  class: string;
  options: MCustomScrollbar.CustomScrollbarOptions;
}

@Component({
  selector: 'malihu-scrollbar-demo',
  templateUrl: './malihu-scrollbar-demo.component.html',
  styleUrls: ['./malihu-scrollbar-demo.component.scss']
})
export class MalihuScrollbarDemoComponent implements OnInit {

  loremIpsum = require('raw-loader!./lorem-ipsum.txt');

  themes: ITheme[] = [
    { name: '"light" (default)', class: 'dark', options: { axis: 'y', theme: 'light', scrollButtons: { enable: true } } },
    { name: '"dark"', class: 'light', options: { axis: 'y', theme: 'dark', scrollButtons: { enable: true } } },
    { name: '"minimal"', class: 'dark', options: { axis: 'y', theme: 'minimal' } },
    { name: '"minimal-dark"', class: 'light', options: { axis: 'y', theme: 'minimal-dark' } },
    { name: '"light-2"', class: 'dark', options: { axis: 'y', theme: 'light-2', scrollButtons: { enable: true } } },
    { name: '"dark-2"', class: 'light', options: { axis: 'y', theme: 'dark-2', scrollButtons: { enable: true } } },
    { name: '"light-3"', class: 'dark', options: { axis: 'y', theme: 'light-3', scrollButtons: { enable: true } } },
    { name: '"dark-3"', class: 'light', options: { axis: 'y', theme: 'dark-3', scrollButtons: { enable: true } } },
    { name: '"light-thick"', class: 'dark', options: { axis: 'y', theme: 'light-thick', scrollButtons: { enable: true } } },
    { name: '"dark-thick"', class: 'light', options: { axis: 'y', theme: 'dark-thick', scrollButtons: { enable: true } } },
    { name: '"light-thin"', class: 'dark', options: { axis: 'y', theme: 'light-thin', scrollButtons: { enable: true } } },
    { name: '"dark-thin"', class: 'light', options: { axis: 'y', theme: 'dark-thin', scrollButtons: { enable: true } } },
    { name: '"inset"', class: 'dark', options: { axis: 'y', theme: 'inset', scrollButtons: { enable: true } } },
    { name: '"inset-dark"', class: 'light', options: { axis: 'y', theme: 'inset-dark', scrollButtons: { enable: true } } },
    { name: '"inset-2"', class: 'dark', options: { axis: 'y', theme: 'inset-2', scrollButtons: { enable: true } } },
    { name: '"inset-2-dark"', class: 'light', options: { axis: 'y', theme: 'inset-2-dark', scrollButtons: { enable: true } } },
    { name: '"inset-3"', class: 'dark', options: { axis: 'y', theme: 'inset-3', scrollButtons: { enable: true } } },
    { name: '"inset-3-dark"', class: 'light', options: { axis: 'y', theme: 'inset-3-dark', scrollButtons: { enable: true } } },
    { name: '"rounded"', class: 'dark', options: { axis: 'y', theme: 'rounded', scrollButtons: { enable: true } } },
    { name: '"rounded-dark"', class: 'light', options: { axis: 'y', theme: 'rounded-dark', scrollButtons: { enable: true } } },
    { name: '"rounded-dots"', class: 'dark', options: { axis: 'y', theme: 'rounded-dots', scrollButtons: { enable: true } } },
    { name: '"rounded-dots-dark"', class: 'light', options: { axis: 'y', theme: 'rounded-dots-dark', scrollButtons: { enable: true } } },
    { name: '"3d"', class: 'dark', options: { axis: 'y', theme: '3d', scrollButtons: { enable: true } } },
    { name: '"3d-dark"', class: 'light', options: { axis: 'y', theme: '3d-dark', scrollButtons: { enable: true } } },
    { name: '"3d-thick"', class: 'dark', options: { axis: 'y', theme: '3d-thick', scrollButtons: { enable: true } } },
    { name: '"3d-thick-dark"', class: 'light', options: { axis: 'y', theme: '3d-thick-dark', scrollButtons: { enable: true } } },
    { name: '"custom-theme"', class: 'dark', options: { axis: 'y', theme: 'metro', scrollbarPosition: 'outside' } },
  ];

  constructor(
    private mScrollbarService: MalihuScrollbarService,
  ) { }

  ngOnInit() {
    this.mScrollbarService.initScrollbar(document.body, { axis: 'yx', theme: 'metro' });
  }
}
