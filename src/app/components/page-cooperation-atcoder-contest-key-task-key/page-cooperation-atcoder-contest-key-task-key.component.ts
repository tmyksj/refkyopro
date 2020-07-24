import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, of } from "rxjs";
import { flatMap } from "rxjs/operators";

import { CooperationAtcoderDomain } from "../../domains/cooperation-atcoder/cooperation-atcoder.domain";
import { CooperationAtcoderTaskDto } from "../../domains/cooperation-atcoder/dtos/cooperation-atcoder-task/cooperation-atcoder-task.dto";

@Component({
  selector: "app-page-cooperation-atcoder-contest-key-task-key",
  styleUrls: ["./page-cooperation-atcoder-contest-key-task-key.component.scss"],
  templateUrl: "./page-cooperation-atcoder-contest-key-task-key.component.html",
})
export class PageCooperationAtcoderContestKeyTaskKeyComponent implements OnInit {

  public contestKey: string | null;

  public task: CooperationAtcoderTaskDto | null;

  private activatedRoute: ActivatedRoute;

  private cooperationAtcoderDomain: CooperationAtcoderDomain;

  public constructor(activatedRoute: ActivatedRoute, cooperationAtcoderDomain: CooperationAtcoderDomain) {
    this.contestKey = null;
    this.task = null;

    this.activatedRoute = activatedRoute;
    this.cooperationAtcoderDomain = cooperationAtcoderDomain;
  }

  public ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      flatMap<ParamMap, Observable<CooperationAtcoderTaskDto | null>>((paramMap: ParamMap): Observable<CooperationAtcoderTaskDto | null> => {
        const contestKey: string | null = paramMap.get("contestKey");
        const taskKey: string | null = paramMap.get("taskKey");

        this.contestKey = contestKey;
        return contestKey !== null && taskKey !== null ? this.cooperationAtcoderDomain.fetchTask(contestKey, taskKey) : of<CooperationAtcoderTaskDto | null>(null);
      }),
    ).subscribe((value: CooperationAtcoderTaskDto | null): void => {
      this.task = value;
    });
  }

}
