import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageCooperationAtcoderContestKeyTaskKeyAcceptedLangComponent } from "./page-cooperation-atcoder-contest-key-task-key-accepted-lang.component";

describe("PageCooperationAtcoderContestKeyTaskKeyAcceptedLangComponent", () => {

  let component: PageCooperationAtcoderContestKeyTaskKeyAcceptedLangComponent;
  let fixture: ComponentFixture<PageCooperationAtcoderContestKeyTaskKeyAcceptedLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageCooperationAtcoderContestKeyTaskKeyAcceptedLangComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCooperationAtcoderContestKeyTaskKeyAcceptedLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
