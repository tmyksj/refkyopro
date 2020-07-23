import { Component, OnInit } from "@angular/core";

import { AlgorithmItemDto } from "../../domains/algorithm/dtos/algorithm-item/algorithm-item.dto";
import { AlgorithmDomain } from "../../domains/algorithm/algorithm.domain";

@Component({
  selector: "app-page-algorithm",
  styleUrls: ["./page-algorithm.component.scss"],
  templateUrl: "./page-algorithm.component.html",
})
export class PageAlgorithmComponent implements OnInit {

  public itemList: AlgorithmItemDto[];

  private algorithmDomain: AlgorithmDomain;

  public constructor(algorithmDomain: AlgorithmDomain) {
    this.itemList = [];

    this.algorithmDomain = algorithmDomain;
  }

  public ngOnInit(): void {
    this.algorithmDomain.fetchItemList().subscribe((value: AlgorithmItemDto[]) => {
      this.itemList = value;
    });
  }

}
