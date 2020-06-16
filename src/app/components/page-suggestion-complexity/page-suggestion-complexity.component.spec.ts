import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageSuggestionComplexityComponent } from "./page-suggestion-complexity.component";

describe("PageSuggestionComplexityComponent", () => {

  let component: PageSuggestionComplexityComponent;
  let fixture: ComponentFixture<PageSuggestionComplexityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageSuggestionComplexityComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSuggestionComplexityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
