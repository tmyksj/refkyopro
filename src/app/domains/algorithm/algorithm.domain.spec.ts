import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { AlgorithmDomain } from "./algorithm.domain";

describe("AlgorithmDomain", () => {

  let domain: AlgorithmDomain;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });

    domain = TestBed.inject(AlgorithmDomain);
  });

  it("should be created", () => {
    expect(domain).toBeTruthy();
  });

});
