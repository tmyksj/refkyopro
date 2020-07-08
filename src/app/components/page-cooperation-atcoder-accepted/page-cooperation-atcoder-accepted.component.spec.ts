import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageCooperationAtcoderAcceptedComponent } from "./page-cooperation-atcoder-accepted.component";

describe("PageCooperationAtcoderAcceptedComponent", () => {

  let component: PageCooperationAtcoderAcceptedComponent;
  let fixture: ComponentFixture<PageCooperationAtcoderAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageCooperationAtcoderAcceptedComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCooperationAtcoderAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
