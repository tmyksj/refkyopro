import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LibraryDomain {

  private httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public get(key: string, lang: string): Observable<string> {
    return this.httpClient.get(`assets/library/${key}/${lang}.md`, { responseType: "text" });
  }

}
