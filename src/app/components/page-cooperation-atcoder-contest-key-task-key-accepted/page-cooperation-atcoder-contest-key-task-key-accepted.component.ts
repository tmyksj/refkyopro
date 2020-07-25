import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { forkJoin, Observable, of } from "rxjs";
import { flatMap } from "rxjs/operators";

import { CooperationAtcoderContestDto } from "../../domains/cooperation-atcoder/dtos/cooperation-atcoder-contest/cooperation-atcoder-contest.dto";
import { CooperationAtcoderTaskDto } from "../../domains/cooperation-atcoder/dtos/cooperation-atcoder-task/cooperation-atcoder-task.dto";
import { CooperationAtcoderDomain } from "../../domains/cooperation-atcoder/cooperation-atcoder.domain";
import { LanguageItemDto } from "../../domains/language/dtos/language-item/language-item.dto";
import { LanguageDomain } from "../../domains/language/language.domain";

@Component({
  selector: "app-page-cooperation-atcoder-contest-key-task-key-accepted",
  styleUrls: ["./page-cooperation-atcoder-contest-key-task-key-accepted.component.scss"],
  templateUrl: "./page-cooperation-atcoder-contest-key-task-key-accepted.component.html",
})
export class PageCooperationAtcoderContestKeyTaskKeyAcceptedComponent implements OnInit {

  public contest: CooperationAtcoderContestDto | null;

  public languageList: LanguageItemDto[];

  public task: CooperationAtcoderTaskDto | null;

  private activatedRoute: ActivatedRoute;

  private cooperationAtcoderDomain: CooperationAtcoderDomain;

  private languageDomain: LanguageDomain;

  public constructor(activatedRoute: ActivatedRoute, cooperationAtcoderDomain: CooperationAtcoderDomain, languageDomain: LanguageDomain) {
    this.contest = null;
    this.languageList = null;
    this.task = null;

    this.activatedRoute = activatedRoute;
    this.cooperationAtcoderDomain = cooperationAtcoderDomain;
    this.languageDomain = languageDomain;
  }

  public ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      flatMap<ParamMap, Observable<[CooperationAtcoderContestDto | null, LanguageItemDto[], CooperationAtcoderTaskDto | null]>>((paramMap: ParamMap): Observable<[CooperationAtcoderContestDto | null, LanguageItemDto[], CooperationAtcoderTaskDto | null]> => {
        const contestKey: string | null = paramMap.get("contestKey");
        const taskKey: string | null = paramMap.get("taskKey");
        return contestKey !== null && taskKey !== null
          ? forkJoin([this.cooperationAtcoderDomain.fetchContest(contestKey), this.languageDomain.fetchItemList(), this.cooperationAtcoderDomain.fetchTask(contestKey, taskKey)])
          : of<[CooperationAtcoderContestDto | null, [], CooperationAtcoderTaskDto | null]>([null, [], null]);
      }),
    ).subscribe((value: [CooperationAtcoderContestDto | null, LanguageItemDto[], CooperationAtcoderTaskDto | null]): void => {
      this.contest = value[0];
      this.languageList = value[1];
      this.task = value[2];
    });
  }

}
