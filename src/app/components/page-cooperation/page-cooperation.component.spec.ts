import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageCooperationComponent } from "./page-cooperation.component";

describe("PageCooperationComponent", () => {

  let component: PageCooperationComponent;
  let fixture: ComponentFixture<PageCooperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageCooperationComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCooperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
