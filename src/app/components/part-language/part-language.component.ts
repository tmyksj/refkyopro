import { Component, Input, OnInit } from "@angular/core";

import { LanguageDomain } from "../../domains/language/language.domain";
import { LanguageItemDto } from "../../domains/language/dtos/language-item/language-item.dto";

@Component({
  selector: "app-part-language",
  styleUrls: ["./part-language.component.scss"],
  templateUrl: "./part-language.component.html",
})
export class PartLanguageComponent implements OnInit {

  @Input()
  public lang: string;

  private itemList: LanguageItemDto[];

  private languageDomain: LanguageDomain;

  public constructor(languageDomain: LanguageDomain) {
    this.lang = "";

    this.itemList = [];

    this.languageDomain = languageDomain;
  }

  public ngOnInit(): void {
    this.languageDomain.fetchItemList().subscribe((value: LanguageItemDto[]): void => {
      this.itemList = value;
    });
  }

  public text(): string {
    const item: LanguageItemDto | undefined = this.itemList.find((value: LanguageItemDto): boolean => {
      return value.key === this.lang;
    });
    return item !== undefined ? item.text : "---";
  }

}
