import { TestBed } from "@angular/core/testing";

import { CooperationAtcoderDomain } from "./cooperation-atcoder.domain";

describe("CooperationAtcoderDomain", () => {

  let domain: CooperationAtcoderDomain;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    domain = TestBed.inject(CooperationAtcoderDomain);
  });

  it("should be created", () => {
    expect(domain).toBeTruthy();
  });

});
