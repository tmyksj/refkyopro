import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { CooperationAtcoderDomain } from "../../domains/cooperation-atcoder/cooperation-atcoder.domain";

@Component({
  selector: "app-page-cooperation-atcoder-accepted",
  styleUrls: ["./page-cooperation-atcoder-accepted.component.scss"],
  templateUrl: "./page-cooperation-atcoder-accepted.component.html",
})
export class PageCooperationAtcoderAcceptedComponent implements OnInit {

  private activatedRoute: ActivatedRoute;

  private cooperationAtcoderDomain: CooperationAtcoderDomain;

  public constructor(activatedRoute: ActivatedRoute, cooperationAtcoderDomain: CooperationAtcoderDomain) {
    this.activatedRoute = activatedRoute;
    this.cooperationAtcoderDomain = cooperationAtcoderDomain;
  }

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramsMap: ParamMap) => {
      const contestKey: string | null = paramsMap.get("contestKey");
      const taskKey: string | null = paramsMap.get("taskKey");
      const lang: string | null = paramsMap.get("lang");
    });
  }

}
