import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, of } from "rxjs";
import { flatMap } from "rxjs/operators";

import { LibraryDomain } from "../../domains/library/library.domain";

@Component({
  selector: "app-page-library-key-lang",
  styleUrls: ["./page-library-key-lang.component.scss"],
  templateUrl: "./page-library-key-lang.component.html",
})
export class PageLibraryKeyLangComponent implements OnInit {

  public itemContent: string | null;

  private activatedRoute: ActivatedRoute;

  private libraryDomain: LibraryDomain;

  public constructor(activatedRoute: ActivatedRoute, libraryDomain: LibraryDomain) {
    this.itemContent = null;

    this.activatedRoute = activatedRoute;
    this.libraryDomain = libraryDomain;
  }

  public ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      flatMap<ParamMap, Observable<string | null>>((paramMap: ParamMap): Observable<string | null> => {
        const key: string | null = paramMap.get("key");
        const lang: string | null = paramMap.get("lang");
        return key !== null && lang !== null ? this.libraryDomain.fetchItemContent(key, lang) : of<string | null>(null);
      }),
    ).subscribe((value: string | null): void => {
      this.itemContent = value;
    });
  }

}
