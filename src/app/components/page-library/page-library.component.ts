import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { LibraryItemDto } from "../../domains/library/dtos/library-item/library-item.dto";
import { LibraryDomain } from "../../domains/library/library.domain";

@Component({
  selector: "app-page-library",
  styleUrls: ["./page-library.component.scss"],
  templateUrl: "./page-library.component.html",
})
export class PageLibraryComponent implements OnInit {

  public item: LibraryItemDto | null;

  public itemContent: string | null;

  public itemList: LibraryItemDto[] | null;

  private activatedRoute: ActivatedRoute;

  private libraryDomain: LibraryDomain;

  public constructor(activatedRoute: ActivatedRoute, libraryDomain: LibraryDomain) {
    this.activatedRoute = activatedRoute;
    this.libraryDomain = libraryDomain;
  }

  public ngOnInit(): void {
    this.item = null;
    this.itemContent = null;
    this.itemList = null;

    this.activatedRoute.paramMap.subscribe((paramsMap: ParamMap) => {
      const key: string | null = paramsMap.get("key");
      const lang: string | null = paramsMap.get("lang");

      if (key === null && lang === null) {
        this.fetchItemList();
      } else if (lang === null) {
        this.fetchItem(key);
      } else {
        this.fetchItemContent(key, lang);
      }
    });
  }

  private fetchItem(key: string): void {
    this.libraryDomain.fetchItem(key).subscribe((value: LibraryItemDto | null): void => {
      this.item = value;
    });
  }

  private fetchItemContent(key: string, lang: string): void {
    this.libraryDomain.fetchItemContent(key, lang).subscribe((value: string | null): void => {
      this.itemContent = value;
    });
  }

  private fetchItemList(): void {
    this.libraryDomain.fetchItemList().subscribe((value: LibraryItemDto[]): void => {
      this.itemList = value;
    });
  }

}
