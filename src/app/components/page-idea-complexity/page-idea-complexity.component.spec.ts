import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageIdeaComplexityComponent } from "./page-idea-complexity.component";

describe("PageIdeaComplexityComponent", () => {

  let component: PageIdeaComplexityComponent;
  let fixture: ComponentFixture<PageIdeaComplexityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageIdeaComplexityComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIdeaComplexityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
