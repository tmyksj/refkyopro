import { Component, Input, OnInit } from "@angular/core";
import * as marked from "marked";

declare var Prism: any;

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
    const markedRenderer: marked.Renderer = new marked.Renderer();
    markedRenderer.code = function(code: string, infostring: string | undefined, escaped: boolean): string {
      return `<pre class="${this.options.langPrefix}"${new marked.Renderer().code.bind(this)(code, infostring || "none", escaped).substring(4)}`;
    };

    return marked(this.content, {
      highlight: (code: string, lang: string): string => {
        return lang in Prism.languages ? Prism.highlight(code, Prism.languages[lang], lang) : code;
      },
      renderer: markedRenderer,
    });
  }

}
