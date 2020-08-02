import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { flatMap } from "rxjs/operators";
import { Observable, of } from "rxjs";

import { CooperationAtcoderDomain } from "../../domains/cooperation-atcoder/cooperation-atcoder.domain";

@Component({
  selector: "app-page-cooperation-atcoder-contest-key-task-key-accepted-lang",
  styleUrls: ["./page-cooperation-atcoder-contest-key-task-key-accepted-lang.component.scss"],
  templateUrl: "./page-cooperation-atcoder-contest-key-task-key-accepted-lang.component.html",
})
export class PageCooperationAtcoderContestKeyTaskKeyAcceptedLangComponent implements OnInit {

  public acceptedSource: string | null;

  public state: "initiated" | "loaded" | "notFound";

  private activatedRoute: ActivatedRoute;

  private cooperationAtcoderDomain: CooperationAtcoderDomain;

  public constructor(activatedRoute: ActivatedRoute, cooperationAtcoderDomain: CooperationAtcoderDomain) {
    this.acceptedSource = null;
    this.state = "initiated";

    this.activatedRoute = activatedRoute;
    this.cooperationAtcoderDomain = cooperationAtcoderDomain;
  }

  public ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      flatMap<ParamMap, Observable<string | null>>((paramMap: ParamMap): Observable<string | null> => {
        const contestKey: string | null = paramMap.get("contestKey");
        const taskKey: string | null = paramMap.get("taskKey");
        const lang: string | null = paramMap.get("lang");
        return contestKey !== null && taskKey !== null && lang !== null
          ? this.cooperationAtcoderDomain.fetchAcceptedSource(contestKey, taskKey, lang)
          : of<string | null>(null);
      }),
    ).subscribe((value: string | null): void => {
      this.acceptedSource = value;
      this.state = (this.acceptedSource !== null ? "loaded" : "notFound");
    });
  }

}
