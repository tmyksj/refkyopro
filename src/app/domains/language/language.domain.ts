import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { LanguageIndexDto } from "./dtos/language-index/language-index.dto";
import { LanguageItemDto } from "./dtos/language-item/language-item.dto";

@Injectable({
  providedIn: "root",
})
export class LanguageDomain {

  private httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public fetchItemList(): Observable<LanguageItemDto[]> {
    return this.httpClient.get<LanguageIndexDto>("assets/language/index.json").pipe(
      map<LanguageIndexDto, LanguageItemDto[]>((value: LanguageIndexDto): LanguageItemDto[] => {
        return value.itemList;
      }),
    );
  }

}
