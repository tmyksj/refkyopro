import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PartProgressSpinnerComponent } from "./part-progress-spinner.component";

describe("PartProgressSpinnerComponent", () => {

  let component: PartProgressSpinnerComponent;
  let fixture: ComponentFixture<PartProgressSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PartProgressSpinnerComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
