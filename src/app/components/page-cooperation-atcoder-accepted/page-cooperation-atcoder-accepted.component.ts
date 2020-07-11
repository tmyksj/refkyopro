import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { CooperationAtcoderContestDto } from "../../domains/cooperation-atcoder/dtos/cooperation-atcoder-contest/cooperation-atcoder-contest.dto";
import { CooperationAtcoderDomain } from "../../domains/cooperation-atcoder/cooperation-atcoder.domain";

@Component({
  selector: "app-page-cooperation-atcoder-accepted",
  styleUrls: ["./page-cooperation-atcoder-accepted.component.scss"],
  templateUrl: "./page-cooperation-atcoder-accepted.component.html",
})
export class PageCooperationAtcoderAcceptedComponent implements OnInit {

  public contest: CooperationAtcoderContestDto;

  public contestList: CooperationAtcoderContestDto[];

  private activatedRoute: ActivatedRoute;

  private cooperationAtcoderDomain: CooperationAtcoderDomain;

  public constructor(activatedRoute: ActivatedRoute, cooperationAtcoderDomain: CooperationAtcoderDomain) {
    this.activatedRoute = activatedRoute;
    this.cooperationAtcoderDomain = cooperationAtcoderDomain;
  }

  public ngOnInit(): void {
    this.contest = null;
    this.contestList = null;

    this.activatedRoute.paramMap.subscribe((paramsMap: ParamMap) => {
      const contestKey: string | null = paramsMap.get("contestKey");
      const taskKey: string | null = paramsMap.get("taskKey");
      const lang: string | null = paramsMap.get("lang");

      if (contestKey === null && taskKey === null && lang === null) {
        this.fetchContestList();
      } else if (taskKey === null && lang === null) {
        this.fetchContest(contestKey);
      } else if (lang === null) {
      } else {
      }
    });
  }

  private fetchContest(contestKey: string) {
    this.cooperationAtcoderDomain.fetchContest(contestKey).subscribe((value: CooperationAtcoderContestDto | null): void => {
      this.contest = value;
    });
  }

  private fetchContestList(): void {
    this.cooperationAtcoderDomain.fetchContestList().subscribe((value: CooperationAtcoderContestDto[]): void => {
      this.contestList = value;
    });
  }

}
