import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PartMarkdownComponent } from "./part-markdown.component";

describe("PartMarkdownComponent", () => {

  let component: PartMarkdownComponent;
  let fixture: ComponentFixture<PartMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PartMarkdownComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
