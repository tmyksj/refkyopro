import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageLibraryComponent } from "./page-library.component";

describe("PageLibraryComponent", () => {

  let component: PageLibraryComponent;
  let fixture: ComponentFixture<PageLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageLibraryComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
