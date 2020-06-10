import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageIdeaAlgorithmComponent } from "./page-idea-algorithm.component";

describe("PageIdeaAlgorithmComponent", () => {

  let component: PageIdeaAlgorithmComponent;
  let fixture: ComponentFixture<PageIdeaAlgorithmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageIdeaAlgorithmComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIdeaAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
