import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CooperationAtcoderDomain } from "../../domains/cooperation-atcoder/cooperation-atcoder.domain";

@Component({
  selector: "app-page-cooperation-atcoder-contest-key-task-key-accepted-lang",
  styleUrls: ["./page-cooperation-atcoder-contest-key-task-key-accepted-lang.component.scss"],
  templateUrl: "./page-cooperation-atcoder-contest-key-task-key-accepted-lang.component.html",
})
export class PageCooperationAtcoderContestKeyTaskKeyAcceptedLangComponent implements OnInit {

  private activatedRoute: ActivatedRoute;

  private cooperationAtcoderDomain: CooperationAtcoderDomain;

  public constructor(activatedRoute: ActivatedRoute, cooperationAtcoderDomain: CooperationAtcoderDomain) {
    this.activatedRoute = activatedRoute;
    this.cooperationAtcoderDomain = cooperationAtcoderDomain;
  }

  public ngOnInit(): void {
  }

}
