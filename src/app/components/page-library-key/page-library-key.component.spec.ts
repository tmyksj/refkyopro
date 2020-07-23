import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageLibraryKeyComponent } from "./page-library-key.component";

describe("PageLibraryKeyComponent", () => {

  let component: PageLibraryKeyComponent;
  let fixture: ComponentFixture<PageLibraryKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageLibraryKeyComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLibraryKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
