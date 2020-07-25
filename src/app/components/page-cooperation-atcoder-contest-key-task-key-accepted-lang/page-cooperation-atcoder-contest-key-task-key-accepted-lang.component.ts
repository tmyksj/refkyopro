import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { flatMap } from "rxjs/operators";
import { forkJoin, Observable, of } from "rxjs";

import { CooperationAtcoderContestDto } from "../../domains/cooperation-atcoder/dtos/cooperation-atcoder-contest/cooperation-atcoder-contest.dto";
import { CooperationAtcoderTaskDto } from "../../domains/cooperation-atcoder/dtos/cooperation-atcoder-task/cooperation-atcoder-task.dto";
import { CooperationAtcoderDomain } from "../../domains/cooperation-atcoder/cooperation-atcoder.domain";

@Component({
  selector: "app-page-cooperation-atcoder-contest-key-task-key-accepted-lang",
  styleUrls: ["./page-cooperation-atcoder-contest-key-task-key-accepted-lang.component.scss"],
  templateUrl: "./page-cooperation-atcoder-contest-key-task-key-accepted-lang.component.html",
})
export class PageCooperationAtcoderContestKeyTaskKeyAcceptedLangComponent implements OnInit {

  public acceptedSource: string | null;

  public contest: CooperationAtcoderContestDto | null;

  public lang: string | null;

  public task: CooperationAtcoderTaskDto | null;

  private activatedRoute: ActivatedRoute;

  private cooperationAtcoderDomain: CooperationAtcoderDomain;

  public constructor(activatedRoute: ActivatedRoute, cooperationAtcoderDomain: CooperationAtcoderDomain) {
    this.acceptedSource = null;
    this.contest = null;
    this.task = null;

    this.activatedRoute = activatedRoute;
    this.cooperationAtcoderDomain = cooperationAtcoderDomain;
  }

  public ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      flatMap<ParamMap, Observable<[string | null, CooperationAtcoderContestDto | null, string | null, CooperationAtcoderTaskDto | null]>>((paramMap: ParamMap): Observable<[string | null, CooperationAtcoderContestDto | null, string | null, CooperationAtcoderTaskDto | null]> => {
        const contestKey: string | null = paramMap.get("contestKey");
        const taskKey: string | null = paramMap.get("taskKey");
        const lang: string | null = paramMap.get("lang");
        return contestKey !== null && taskKey !== null && lang !== null
          ? forkJoin([this.cooperationAtcoderDomain.fetchAcceptedSource(contestKey, taskKey, lang), this.cooperationAtcoderDomain.fetchContest(contestKey), of<string | null>(lang), this.cooperationAtcoderDomain.fetchTask(contestKey, taskKey)])
          : of<[string | null, CooperationAtcoderContestDto | null, string | null, CooperationAtcoderTaskDto | null]>([null, null, null, null]);
      }),
    ).subscribe((value: [string | null, CooperationAtcoderContestDto | null, string | null, CooperationAtcoderTaskDto | null]): void => {
      this.acceptedSource = value[0];
      this.contest = value[1];
      this.lang = value[2];
      this.task = value[3];
    });
  }

  public quote(code: string): string {
    return `\`\`\`${this.lang}\n${code}\`\`\``;
  }

}
