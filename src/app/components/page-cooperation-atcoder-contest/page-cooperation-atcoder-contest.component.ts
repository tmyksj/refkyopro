import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { CooperationAtcoderContestDto } from "../../domains/cooperation-atcoder/dtos/cooperation-atcoder-contest/cooperation-atcoder-contest.dto";
import { CooperationAtcoderTaskDto } from "../../domains/cooperation-atcoder/dtos/cooperation-atcoder-task/cooperation-atcoder-task.dto";
import { CooperationAtcoderDomain } from "../../domains/cooperation-atcoder/cooperation-atcoder.domain";

@Component({
  selector: "app-page-cooperation-atcoder-contest",
  styleUrls: ["./page-cooperation-atcoder-contest.component.scss"],
  templateUrl: "./page-cooperation-atcoder-contest.component.html",
})
export class PageCooperationAtcoderContestComponent implements OnInit {

  public contest: CooperationAtcoderContestDto | null;

  public contestKey: string | null;

  public contestList: CooperationAtcoderContestDto[] | null;

  public task: CooperationAtcoderTaskDto | null;

  private activatedRoute: ActivatedRoute;

  private cooperationAtcoderDomain: CooperationAtcoderDomain;

  public constructor(activatedRoute: ActivatedRoute, cooperationAtcoderDomain: CooperationAtcoderDomain) {
    this.activatedRoute = activatedRoute;
    this.cooperationAtcoderDomain = cooperationAtcoderDomain;
  }

  public ngOnInit(): void {
    this.contest = null;
    this.contestKey = null;
    this.contestList = null;
    this.task = null;

    this.activatedRoute.paramMap.subscribe((paramsMap: ParamMap) => {
      this.contestKey = paramsMap.get("contestKey");
      const taskKey: string | null = paramsMap.get("taskKey");

      if (this.contestKey === null && taskKey === null) {
        this.fetchContestList();
      } else if (taskKey === null) {
        this.fetchContest(this.contestKey);
      } else {
        this.fetchTask(this.contestKey, taskKey);
      }
    });
  }

  private fetchContest(contestKey: string): void {
    this.cooperationAtcoderDomain.fetchContest(contestKey).subscribe((value: CooperationAtcoderContestDto | null): void => {
      this.contest = value;
    });
  }

  private fetchContestList(): void {
    this.cooperationAtcoderDomain.fetchContestList().subscribe((value: CooperationAtcoderContestDto[]): void => {
      this.contestList = value;
    });
  }

  private fetchTask(contestKey: string, taskKey: string): void {
    this.cooperationAtcoderDomain.fetchTask(contestKey, taskKey).subscribe((value: CooperationAtcoderTaskDto): void => {
      this.task = value;
    });
  }

}
