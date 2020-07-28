import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PartMessageCenterComponent } from "./part-message-center.component";

describe("PartMessageCenterComponent", () => {

  let component: PartMessageCenterComponent;
  let fixture: ComponentFixture<PartMessageCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PartMessageCenterComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartMessageCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
