import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageCooperationAtcoderContestKeyTaskKeyComponent } from "./page-cooperation-atcoder-contest-key-task-key.component";

describe("PageCooperationAtcoderContestKeyTaskKeyComponent", () => {

  let component: PageCooperationAtcoderContestKeyTaskKeyComponent;
  let fixture: ComponentFixture<PageCooperationAtcoderContestKeyTaskKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageCooperationAtcoderContestKeyTaskKeyComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCooperationAtcoderContestKeyTaskKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
