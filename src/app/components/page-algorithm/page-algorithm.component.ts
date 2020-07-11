import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { AlgorithmItemDto } from "../../domains/algorithm/dtos/algorithm-item/algorithm-item.dto";
import { AlgorithmDomain } from "../../domains/algorithm/algorithm.domain";

@Component({
  selector: "app-page-algorithm",
  styleUrls: ["./page-algorithm.component.scss"],
  templateUrl: "./page-algorithm.component.html",
})
export class PageAlgorithmComponent implements OnInit {

  public itemContent: string | null;

  public itemList: AlgorithmItemDto[] | null;

  private activatedRoute: ActivatedRoute;

  private algorithmDomain: AlgorithmDomain;

  public constructor(activatedRoute: ActivatedRoute, algorithmDomain: AlgorithmDomain) {
    this.activatedRoute = activatedRoute;
    this.algorithmDomain = algorithmDomain;
  }

  public ngOnInit(): void {
    this.itemContent = null;
    this.itemList = null;

    this.activatedRoute.paramMap.subscribe((paramsMap: ParamMap) => {
      const key: string | null = paramsMap.get("key");

      if (key === null) {
        this.fetchItemList();
      } else {
        this.fetchItemContent(key);
      }
    });
  }

  private fetchItemContent(key: string): void {
    this.algorithmDomain.fetchItemContent(key).subscribe((value: string | null): void => {
      this.itemContent = value;
    });
  }

  private fetchItemList(): void {
    this.algorithmDomain.fetchItemList().subscribe((value: AlgorithmItemDto[]) => {
      this.itemList = value;
    });
  }

}
