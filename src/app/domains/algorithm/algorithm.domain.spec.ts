import { TestBed } from "@angular/core/testing";

import { AlgorithmDomain } from "./algorithm.domain";

describe("AlgorithmDomain", () => {

  let domain: AlgorithmDomain;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    domain = TestBed.inject(AlgorithmDomain);
  });

  it("should be created", () => {
    expect(domain).toBeTruthy();
  });

});
