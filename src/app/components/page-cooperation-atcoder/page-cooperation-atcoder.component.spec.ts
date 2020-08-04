import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageCooperationAtcoderComponent } from "./page-cooperation-atcoder.component";

describe("PageCooperationAtcoderComponent", () => {

  let component: PageCooperationAtcoderComponent;
  let fixture: ComponentFixture<PageCooperationAtcoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageCooperationAtcoderComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCooperationAtcoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
