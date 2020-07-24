import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { LanguageDomain } from "./language.domain";

describe("LanguageDomain", () => {

  let domain: LanguageDomain;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });

    domain = TestBed.inject(LanguageDomain);
  });

  it("should be created", () => {
    expect(domain).toBeTruthy();
  });

});
