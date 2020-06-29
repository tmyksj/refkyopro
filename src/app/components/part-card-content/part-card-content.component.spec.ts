import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCardContentComponent } from './part-card-content.component';

describe('PartCardContentComponent', () => {
  let component: PartCardContentComponent;
  let fixture: ComponentFixture<PartCardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartCardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
