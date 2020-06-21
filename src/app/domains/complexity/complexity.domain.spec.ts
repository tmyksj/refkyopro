import { TestBed } from "@angular/core/testing";

import { ComplexityDomain } from "./complexity.domain";

describe("ComplexityDomain", () => {

  let domain: ComplexityDomain;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    domain = TestBed.inject(ComplexityDomain);
  });

  it("should be created", () => {
    expect(domain).toBeTruthy();
  });

});
