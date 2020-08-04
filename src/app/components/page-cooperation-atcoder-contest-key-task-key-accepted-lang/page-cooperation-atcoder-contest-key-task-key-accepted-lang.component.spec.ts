import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { PageCooperationAtcoderContestKeyTaskKeyAcceptedLangComponent } from "./page-cooperation-atcoder-contest-key-task-key-accepted-lang.component";

describe("PageCooperationAtcoderContestKeyTaskKeyAcceptedLangComponent", () => {

  let component: PageCooperationAtcoderContestKeyTaskKeyAcceptedLangComponent;
  let fixture: ComponentFixture<PageCooperationAtcoderContestKeyTaskKeyAcceptedLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageCooperationAtcoderContestKeyTaskKeyAcceptedLangComponent,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
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
