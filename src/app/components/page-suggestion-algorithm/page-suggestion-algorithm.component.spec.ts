import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageSuggestionAlgorithmComponent } from "./page-suggestion-algorithm.component";

describe("PageSuggestionAlgorithmComponent", () => {

  let component: PageSuggestionAlgorithmComponent;
  let fixture: ComponentFixture<PageSuggestionAlgorithmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageSuggestionAlgorithmComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSuggestionAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
