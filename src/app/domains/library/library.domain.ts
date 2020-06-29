import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { LibraryIndexDto } from "./dtos/library-index/library-index.dto";
import { LibraryItemDto } from "./dtos/library-item/library-item.dto";

@Injectable({
  providedIn: "root",
})
export class LibraryDomain {

  private httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public fetchItem(key: string): Observable<LibraryItemDto | null> {
    return this.httpClient.get<LibraryIndexDto>("assets/library/index.json").pipe(
      map<LibraryIndexDto, LibraryItemDto | null>((value: LibraryIndexDto): LibraryItemDto | null => {
        const filtered: LibraryItemDto[] = value.itemList.filter((v: LibraryItemDto): boolean => {
          return v.key === key;
        });
        return filtered.length > 0 ? filtered[0] : null;
      }),
    );
  }

  public fetchItemContent(key: string, lang: string): Observable<string | null> {
    return this.httpClient.get(`assets/library/${key}/${lang}.md`, {
      responseType: "text",
    }).pipe(
      catchError<string, Observable<string | null>>(() => {
        return of<string | null>(null);
      }),
    );
  }

  public fetchItemList(): Observable<LibraryItemDto[]> {
    return this.httpClient.get<LibraryIndexDto>("assets/library/index.json").pipe(
      map<LibraryIndexDto, LibraryItemDto[]>((value: LibraryIndexDto): LibraryItemDto[] => {
        return value.itemList;
      }),
    );
  }

}
