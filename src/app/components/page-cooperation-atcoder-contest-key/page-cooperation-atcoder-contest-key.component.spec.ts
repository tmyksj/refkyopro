import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageCooperationAtcoderContestKeyComponent } from "./page-cooperation-atcoder-contest-key.component";

describe("PageCooperationAtcoderContestKeyComponent", () => {

  let component: PageCooperationAtcoderContestKeyComponent;
  let fixture: ComponentFixture<PageCooperationAtcoderContestKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageCooperationAtcoderContestKeyComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCooperationAtcoderContestKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
