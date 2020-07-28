import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, of } from "rxjs";
import { flatMap } from "rxjs/operators";

import { LibraryItemDto } from "../../domains/library/dtos/library-item/library-item.dto";
import { LibraryDomain } from "../../domains/library/library.domain";

@Component({
  selector: "app-page-library-key",
  styleUrls: ["./page-library-key.component.scss"],
  templateUrl: "./page-library-key.component.html",
})
export class PageLibraryKeyComponent implements OnInit {

  public item: LibraryItemDto | null;

  public state: "initiated" | "loaded" | "notFound";

  private activatedRoute: ActivatedRoute;

  private libraryDomain: LibraryDomain;

  public constructor(activatedRoute: ActivatedRoute, libraryDomain: LibraryDomain) {
    this.item = null;
    this.state = "initiated";

    this.activatedRoute = activatedRoute;
    this.libraryDomain = libraryDomain;
  }

  public ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      flatMap<ParamMap, Observable<LibraryItemDto | null>>((paramMap: ParamMap): Observable<LibraryItemDto | null> => {
        const key: string | null = paramMap.get("key");
        return key !== null ? this.libraryDomain.fetchItem(key) : of<LibraryItemDto | null>(null);
      }),
    ).subscribe((value: LibraryItemDto | null): void => {
      this.item = value;
      this.state = (this.item !== null ? "loaded" : "notFound");
    });
  }

}
