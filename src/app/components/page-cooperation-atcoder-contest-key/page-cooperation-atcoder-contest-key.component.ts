import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, of } from "rxjs";
import { flatMap } from "rxjs/operators";

import { CooperationAtcoderContestDto } from "../../domains/cooperation-atcoder/dtos/cooperation-atcoder-contest/cooperation-atcoder-contest.dto";
import { CooperationAtcoderDomain } from "../../domains/cooperation-atcoder/cooperation-atcoder.domain";

@Component({
  selector: "app-page-cooperation-atcoder-contest-key",
  styleUrls: ["./page-cooperation-atcoder-contest-key.component.scss"],
  templateUrl: "./page-cooperation-atcoder-contest-key.component.html",
})
export class PageCooperationAtcoderContestKeyComponent implements OnInit {

  public contest: CooperationAtcoderContestDto | null;

  public state: "initiated" | "loaded" | "notFound";

  private activatedRoute: ActivatedRoute;

  private cooperationAtcoderDomain: CooperationAtcoderDomain;

  public constructor(activatedRoute: ActivatedRoute, cooperationAtcoderDomain: CooperationAtcoderDomain) {
    this.contest = null;
    this.state = "initiated";

    this.activatedRoute = activatedRoute;
    this.cooperationAtcoderDomain = cooperationAtcoderDomain;
  }

  public ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      flatMap<ParamMap, Observable<CooperationAtcoderContestDto | null>>((paramMap: ParamMap): Observable<CooperationAtcoderContestDto | null> => {
        const contestKey: string | null = paramMap.get("contestKey");
        return contestKey !== null ? this.cooperationAtcoderDomain.fetchContest(contestKey) : of<CooperationAtcoderContestDto | null>(null);
      }),
    ).subscribe((value: CooperationAtcoderContestDto | null): void => {
      this.contest = value;
      this.state = (this.contest !== null ? "loaded" : "notFound");
    });
  }

}
