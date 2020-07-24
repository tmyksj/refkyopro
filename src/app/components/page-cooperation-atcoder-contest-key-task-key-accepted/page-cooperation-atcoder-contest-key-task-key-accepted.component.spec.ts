import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageCooperationAtcoderContestKeyTaskKeyAcceptedComponent } from "./page-cooperation-atcoder-contest-key-task-key-accepted.component";

describe("PageCooperationAtcoderContestKeyTaskKeyAcceptedComponent", () => {

  let component: PageCooperationAtcoderContestKeyTaskKeyAcceptedComponent;
  let fixture: ComponentFixture<PageCooperationAtcoderContestKeyTaskKeyAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageCooperationAtcoderContestKeyTaskKeyAcceptedComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCooperationAtcoderContestKeyTaskKeyAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
