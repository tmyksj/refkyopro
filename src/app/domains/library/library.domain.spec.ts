import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { LibraryDomain } from "./library.domain";

describe("LibraryDomain", () => {

  let domain: LibraryDomain;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });

    domain = TestBed.inject(LibraryDomain);
  });

  it("should be created", () => {
    expect(domain).toBeTruthy();
  });

});
