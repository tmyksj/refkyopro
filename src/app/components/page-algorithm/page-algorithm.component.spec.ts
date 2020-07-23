import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageAlgorithmComponent } from "./page-algorithm.component";

describe("PageAlgorithmComponent", () => {

  let component: PageAlgorithmComponent;
  let fixture: ComponentFixture<PageAlgorithmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageAlgorithmComponent,
      ],
      imports: [
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
