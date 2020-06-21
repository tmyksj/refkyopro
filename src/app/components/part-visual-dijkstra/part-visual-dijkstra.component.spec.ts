import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PartVisualDijkstraComponent } from "./part-visual-dijkstra.component";

describe("PartVisualDijkstraComponent", () => {

  let component: PartVisualDijkstraComponent;
  let fixture: ComponentFixture<PartVisualDijkstraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PartVisualDijkstraComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartVisualDijkstraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
