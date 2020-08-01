import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-part-message-center",
  styleUrls: ["./part-message-center.component.scss"],
  templateUrl: "./part-message-center.component.html",
})
export class PartMessageCenterComponent implements OnInit {

  @Input()
  public icon: string | null;

  public constructor() {
    this.icon = null;
  }

  public ngOnInit(): void {
  }

}
