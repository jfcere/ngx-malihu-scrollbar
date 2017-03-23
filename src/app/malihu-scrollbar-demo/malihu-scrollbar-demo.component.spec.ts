import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalihuScrollbarModule } from '../malihu-scrollbar';
import { MalihuScrollbarDemoComponent } from './malihu-scrollbar-demo.component';

describe('MalihuScrollbarDemoComponent:unit', () => {
  let component: MalihuScrollbarDemoComponent;
  let fixture: ComponentFixture<MalihuScrollbarDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MalihuScrollbarModule],
      declarations: [MalihuScrollbarDemoComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalihuScrollbarDemoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
