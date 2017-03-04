import { TestBed } from '@angular/core/testing';
import { MalihuScrollbarService } from './malihu-scrollbar.service';

xdescribe('MalihuScrollbarService:unit', () => {
  let mScrollbarService: MalihuScrollbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MalihuScrollbarService,
      ],
    });
  });

  beforeEach(() => {
    mScrollbarService = TestBed.get(MalihuScrollbarService);
  });

  it('should create an instance', () => {
    expect(mScrollbarService).toBeTruthy();
  });
});
