import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { forkJoin, Observable, of } from "rxjs";
import { flatMap } from "rxjs/operators";

import { CooperationAtcoderContestDto } from "../../domains/cooperation-atcoder/dtos/cooperation-atcoder-contest/cooperation-atcoder-contest.dto";
import { CooperationAtcoderTaskDto } from "../../domains/cooperation-atcoder/dtos/cooperation-atcoder-task/cooperation-atcoder-task.dto";
import { CooperationAtcoderDomain } from "../../domains/cooperation-atcoder/cooperation-atcoder.domain";

@Component({
  selector: "app-page-cooperation-atcoder-contest-key-task-key",
  styleUrls: ["./page-cooperation-atcoder-contest-key-task-key.component.scss"],
  templateUrl: "./page-cooperation-atcoder-contest-key-task-key.component.html",
})
export class PageCooperationAtcoderContestKeyTaskKeyComponent implements OnInit {

  public contest: CooperationAtcoderContestDto | null;

  public state: "initiated" | "loaded" | "notFound";

  public task: CooperationAtcoderTaskDto | null;

  private activatedRoute: ActivatedRoute;

  private cooperationAtcoderDomain: CooperationAtcoderDomain;

  public constructor(activatedRoute: ActivatedRoute, cooperationAtcoderDomain: CooperationAtcoderDomain) {
    this.contest = null;
    this.state = "initiated";
    this.task = null;

    this.activatedRoute = activatedRoute;
    this.cooperationAtcoderDomain = cooperationAtcoderDomain;
  }

  public ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      flatMap<ParamMap, Observable<[CooperationAtcoderContestDto | null, CooperationAtcoderTaskDto | null]>>((paramMap: ParamMap): Observable<[CooperationAtcoderContestDto | null, CooperationAtcoderTaskDto | null]> => {
        const contestKey: string | null = paramMap.get("contestKey");
        const taskKey: string | null = paramMap.get("taskKey");
        return contestKey !== null && taskKey !== null
          ? forkJoin([this.cooperationAtcoderDomain.fetchContest(contestKey), this.cooperationAtcoderDomain.fetchTask(contestKey, taskKey)])
          : of<[CooperationAtcoderContestDto | null, CooperationAtcoderTaskDto | null]>([null, null]);
      }),
    ).subscribe((value: [CooperationAtcoderContestDto | null, CooperationAtcoderTaskDto | null]): void => {
      this.contest = value[0];
      this.task = value[1];

      this.state = (this.contest !== null && this.task !== null ? "loaded" : "notFound");
    });
  }

}
