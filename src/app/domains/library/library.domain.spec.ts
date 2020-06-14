import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { LibraryDomain } from "./library.domain";

describe("LibraryDomain", () => {

  let service: LibraryDomain;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });

    service = TestBed.inject(LibraryDomain);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

});
