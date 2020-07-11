import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { CooperationAtcoderDomain } from "./cooperation-atcoder.domain";

describe("CooperationAtcoderDomain", () => {

  let domain: CooperationAtcoderDomain;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });

    domain = TestBed.inject(CooperationAtcoderDomain);
  });

  it("should be created", () => {
    expect(domain).toBeTruthy();
  });

});
