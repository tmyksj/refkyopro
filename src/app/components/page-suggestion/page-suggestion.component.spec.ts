import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageSuggestionComponent } from "./page-suggestion.component";

describe("PageSuggestionComponent", () => {

  let component: PageSuggestionComponent;
  let fixture: ComponentFixture<PageSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageSuggestionComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
