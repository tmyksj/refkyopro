import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, of } from "rxjs";
import { flatMap } from "rxjs/operators";

import { AlgorithmDomain } from "../../domains/algorithm/algorithm.domain";

@Component({
  selector: "app-page-algorithm-key",
  styleUrls: ["./page-algorithm-key.component.scss"],
  templateUrl: "./page-algorithm-key.component.html",
})
export class PageAlgorithmKeyComponent implements OnInit {

  public itemContent: string | null;

  private activatedRoute: ActivatedRoute;

  private algorithmDomain: AlgorithmDomain;

  public constructor(activatedRoute: ActivatedRoute, algorithmDomain: AlgorithmDomain) {
    this.itemContent = null;

    this.activatedRoute = activatedRoute;
    this.algorithmDomain = algorithmDomain;
  }

  public ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      flatMap<ParamMap, Observable<string | null>>((paramMap: ParamMap): Observable<string | null> => {
        const key: string | null = paramMap.get("key");
        return key !== null ? this.algorithmDomain.fetchItemContent(key) : of<string | null>(null);
      }),
    ).subscribe((value: string | null): void => {
      this.itemContent = value;
    });
  }

}
