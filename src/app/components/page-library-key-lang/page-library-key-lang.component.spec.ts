import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { PageLibraryKeyLangComponent } from "./page-library-key-lang.component";

describe("PageLibraryKeyLangComponent", () => {

  let component: PageLibraryKeyLangComponent;
  let fixture: ComponentFixture<PageLibraryKeyLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageLibraryKeyLangComponent,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLibraryKeyLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
