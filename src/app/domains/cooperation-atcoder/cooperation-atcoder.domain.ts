import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { CooperationAtcoderContestDto } from "./dtos/cooperation-atcoder-contest/cooperation-atcoder-contest.dto";
import { CooperationAtcoderIndexDto } from "./dtos/cooperation-atcoder-index/cooperation-atcoder-index.dto";
import { CooperationAtcoderTaskDto } from "./dtos/cooperation-atcoder-task/cooperation-atcoder-task.dto";

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

  public fetchTask(contestKey: string, taskKey: string): Observable<CooperationAtcoderTaskDto | null> {
    return this.httpClient.get<CooperationAtcoderIndexDto>("assets/cooperation-atcoder/index.json").pipe(
      map<CooperationAtcoderIndexDto, CooperationAtcoderTaskDto | null>((value: CooperationAtcoderIndexDto): CooperationAtcoderTaskDto | null => {
        const filteredContest: CooperationAtcoderContestDto[] = value.contestList.filter((v: CooperationAtcoderContestDto): boolean => {
          return v.key === contestKey;
        });
        const filteredTask: CooperationAtcoderTaskDto[] = (filteredContest.length > 0 ? filteredContest[0].taskList : []).filter((v: CooperationAtcoderTaskDto): boolean => {
          return v.key === taskKey;
        });
        return filteredTask.length > 0 ? filteredTask[0] : null;
      }),
    );
  }

  public fetchTaskList(contestKey: string): Observable<CooperationAtcoderTaskDto[] | null> {
    return this.httpClient.get<CooperationAtcoderIndexDto>("assets/cooperation-atcoder/index.json").pipe(
      map<CooperationAtcoderIndexDto, CooperationAtcoderTaskDto[] | null>((value: CooperationAtcoderIndexDto): CooperationAtcoderTaskDto[] | null => {
        const filtered: CooperationAtcoderContestDto[] = value.contestList.filter((v: CooperationAtcoderContestDto): boolean => {
          return v.key === contestKey;
        });
        return filtered.length > 0 ? filtered[0].taskList : null;
      }),
    );
  }

}
