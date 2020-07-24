import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { PageCooperationAtcoderContestKeyTaskKeyComponent } from "./page-cooperation-atcoder-contest-key-task-key.component";

describe("PageCooperationAtcoderContestKeyTaskKeyComponent", () => {

  let component: PageCooperationAtcoderContestKeyTaskKeyComponent;
  let fixture: ComponentFixture<PageCooperationAtcoderContestKeyTaskKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageCooperationAtcoderContestKeyTaskKeyComponent,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
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
