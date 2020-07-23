import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCardContentBoxComponent } from './part-card-content-box.component';

describe('PartCardContentBoxComponent', () => {
  let component: PartCardContentBoxComponent;
  let fixture: ComponentFixture<PartCardContentBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartCardContentBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartCardContentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
