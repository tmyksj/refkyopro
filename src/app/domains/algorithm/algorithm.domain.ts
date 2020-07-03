import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { AlgorithmIndexDto } from "./dtos/algorithm-index/algorithm-index.dto";
import { AlgorithmItemDto } from "./dtos/algorithm-item/algorithm-item.dto";

@Injectable({
  providedIn: "root",
})
export class AlgorithmDomain {

  private httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public fetchItem(key: string): Observable<AlgorithmItemDto | null> {
    return this.httpClient.get<AlgorithmIndexDto>("assets/algorithm/index.json").pipe(
      map<AlgorithmIndexDto, AlgorithmItemDto | null>((value: AlgorithmIndexDto): AlgorithmItemDto | null => {
        const filtered: AlgorithmItemDto[] = value.itemList.filter((v: AlgorithmItemDto): boolean => {
          return v.key === key;
        });
        return filtered.length > 0 ? filtered[0] : null;
      }),
    );
  }

  public fetchItemContent(key: string): Observable<string | null> {
    return this.httpClient.get(`assets/algorithm/${key}/index.md`, {
      responseType: "text",
    }).pipe(
      catchError<string, Observable<string | null>>((): Observable<string | null> => {
        return of<string | null>(null);
      }),
    );
  }

  public fetchItemList(): Observable<AlgorithmItemDto[]> {
    return this.httpClient.get<AlgorithmIndexDto>("assets/algorithm/index.json").pipe(
      map<AlgorithmIndexDto, AlgorithmItemDto[]>((value: AlgorithmIndexDto): AlgorithmItemDto[] => {
        return value.itemList;
      }),
    );
  }

}
