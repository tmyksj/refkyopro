import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { PageLibraryKeyComponent } from "./page-library-key.component";

describe("PageLibraryKeyComponent", () => {

  let component: PageLibraryKeyComponent;
  let fixture: ComponentFixture<PageLibraryKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageLibraryKeyComponent,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
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
