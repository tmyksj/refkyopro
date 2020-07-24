import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-part-container-main",
  styleUrls: ["./part-container-main.component.scss"],
  templateUrl: "./part-container-main.component.html",
})
export class PartContainerMainComponent implements OnInit {

  @Input()
  public margin: "none" | "auto";

  @Input()
  public width: "50%" | "75%" | "100%";

  public constructor() {
    this.margin = "auto";
    this.width = "75%";
  }

  public ngOnInit(): void {
  }

  public sMargin(): string {
    switch (this.margin) {
      case "none":
        return "0";
      case "auto":
        return "2rem";
    }
  }

  public sPaddingRight(): string {
    switch (this.width) {
      case "50%":
        return "50%";
      case "75%":
        return "25%";
      case "100%":
        return "0";
    }
  }

}
