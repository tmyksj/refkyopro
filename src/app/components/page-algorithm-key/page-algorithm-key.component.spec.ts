import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAlgorithmKeyComponent } from './page-algorithm-key.component';

describe('PageAlgorithmKeyComponent', () => {
  let component: PageAlgorithmKeyComponent;
  let fixture: ComponentFixture<PageAlgorithmKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAlgorithmKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAlgorithmKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
