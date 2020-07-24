import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartLanguageComponent } from './part-language.component';

describe('PartLanguageComponent', () => {
  let component: PartLanguageComponent;
  let fixture: ComponentFixture<PartLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
