import { Component, OnInit } from "@angular/core";

import { LibraryItemDto } from "../../domains/library/dtos/library-item/library-item.dto";
import { LibraryDomain } from "../../domains/library/library.domain";

@Component({
  selector: "app-page-library",
  styleUrls: ["./page-library.component.scss"],
  templateUrl: "./page-library.component.html",
})
export class PageLibraryComponent implements OnInit {

  public itemList: LibraryItemDto[];

  private libraryDomain: LibraryDomain;

  public constructor(libraryDomain: LibraryDomain) {
    this.itemList = [];

    this.libraryDomain = libraryDomain;
  }

  public ngOnInit(): void {
    this.libraryDomain.fetchItemList().subscribe((value: LibraryItemDto[]): void => {
      this.itemList = value;
    });
  }

}
