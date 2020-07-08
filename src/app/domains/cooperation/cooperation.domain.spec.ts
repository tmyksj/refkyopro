import { TestBed } from "@angular/core/testing";

import { CooperationDomain } from "./cooperation.domain";

describe("CooperationDomain", () => {

  let domain: CooperationDomain;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    domain = TestBed.inject(CooperationDomain);
  });

  it("should be created", () => {
    expect(domain).toBeTruthy();
  });

});
