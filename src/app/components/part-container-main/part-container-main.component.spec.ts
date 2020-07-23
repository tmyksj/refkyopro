import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartContainerMainComponent } from './part-container-main.component';

describe('PartContainerMainComponent', () => {
  let component: PartContainerMainComponent;
  let fixture: ComponentFixture<PartContainerMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartContainerMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartContainerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
