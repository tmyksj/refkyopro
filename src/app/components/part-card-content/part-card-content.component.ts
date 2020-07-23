import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-part-card-content",
  styleUrls: ["./part-card-content.component.scss"],
  templateUrl: "./part-card-content.component.html",
})
export class PartCardContentComponent implements OnInit {

  @Input()
  public icon: string;

  @Input()
  public link: string;

  @Input()
  public title: string;

  public constructor() {
    this.icon = "";
    this.link = "";
    this.title = "";
  }

  public ngOnInit(): void {
  }

}
