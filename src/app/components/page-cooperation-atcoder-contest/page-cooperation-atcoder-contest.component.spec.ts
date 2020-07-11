import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageCooperationAtcoderContestComponent } from "./page-cooperation-atcoder-contest.component";

describe("PageCooperationAtcoderContestComponent", () => {

  let component: PageCooperationAtcoderContestComponent;
  let fixture: ComponentFixture<PageCooperationAtcoderContestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageCooperationAtcoderContestComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCooperationAtcoderContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
