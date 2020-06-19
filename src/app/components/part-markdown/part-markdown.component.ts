import { Component, Input, OnInit } from "@angular/core";
import * as marked from "marked";

@Component({
  selector: "app-part-markdown",
  styleUrls: ["./part-markdown.component.scss"],
  templateUrl: "./part-markdown.component.html",
})
export class PartMarkdownComponent implements OnInit {

  @Input()
  public content: string;

  public constructor() {
    this.content = "";
  }

  public ngOnInit(): void {
  }

  public parsedContent(): string {
    return marked(this.content);
  }

}
