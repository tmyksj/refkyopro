import { Component, OnInit } from "@angular/core";

import { CooperationAtcoderContestDto } from "../../domains/cooperation-atcoder/dtos/cooperation-atcoder-contest/cooperation-atcoder-contest.dto";
import { CooperationAtcoderDomain } from "../../domains/cooperation-atcoder/cooperation-atcoder.domain";

@Component({
  selector: "app-page-cooperation-atcoder-contest",
  styleUrls: ["./page-cooperation-atcoder-contest.component.scss"],
  templateUrl: "./page-cooperation-atcoder-contest.component.html",
})
export class PageCooperationAtcoderContestComponent implements OnInit {

  public contestList: CooperationAtcoderContestDto[];

  private cooperationAtcoderDomain: CooperationAtcoderDomain;

  public constructor(cooperationAtcoderDomain: CooperationAtcoderDomain) {
    this.contestList = [];

    this.cooperationAtcoderDomain = cooperationAtcoderDomain;
  }

  public ngOnInit(): void {
    this.cooperationAtcoderDomain.fetchContestList().subscribe((value: CooperationAtcoderContestDto[]): void => {
      this.contestList = value;
    });
  }

}
