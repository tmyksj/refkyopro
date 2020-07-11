import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { CooperationAtcoderContestDto } from "./dtos/cooperation-atcoder-contest/cooperation-atcoder-contest.dto";
import { CooperationAtcoderIndexDto } from "./dtos/cooperation-atcoder-index/cooperation-atcoder-index.dto";

@Injectable({
  providedIn: "root",
})
export class CooperationAtcoderDomain {

  private httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public fetchContest(key: string): Observable<CooperationAtcoderContestDto | null> {
    return this.httpClient.get<CooperationAtcoderIndexDto>("assets/cooperation-atcoder/index.json").pipe(
      map<CooperationAtcoderIndexDto, CooperationAtcoderContestDto | null>((value: CooperationAtcoderIndexDto): CooperationAtcoderContestDto | null => {
        const filtered: CooperationAtcoderContestDto[] = value.contestList.filter((v: CooperationAtcoderContestDto): boolean => {
          return v.key === key;
        });
        return filtered.length > 0 ? filtered[0] : null;
      }),
    );
  }

  public fetchContestList(): Observable<CooperationAtcoderContestDto[]> {
    return this.httpClient.get<CooperationAtcoderIndexDto>("assets/cooperation-atcoder/index.json").pipe(
      map<CooperationAtcoderIndexDto, CooperationAtcoderContestDto[]>((value: CooperationAtcoderIndexDto): CooperationAtcoderContestDto[] => {
        return value.contestList;
      }),
    );
  }

}
