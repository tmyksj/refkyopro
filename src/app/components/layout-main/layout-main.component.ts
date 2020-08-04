import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-layout-main",
  styleUrls: ["./layout-main.component.scss"],
  templateUrl: "./layout-main.component.html",
})
export class LayoutMainComponent implements OnInit {

  public menuItemList: MenuItem[];

  public constructor() {
    this.menuItemList = [];
  }

  public ngOnInit(): void {
    this.menuItemList = [
      {
        icon: "pi pi-fw pi-home",
        label: "Refkyopro",
        routerLink: ["/"],
        routerLinkActiveOptions: {
          exact: true,
        },
      },
      {
        icon: "pi pi-fw pi-sort-amount-up",
        label: "Algorithm",
        routerLink: ["/algorithm"],
      },
      {
        icon: "pi pi-fw pi-tags",
        label: "Library",
        routerLink: ["/library"],
      },
      {
        icon: "pi pi-fw pi-compass",
        label: "Suggestion",
        routerLink: ["/suggestion"],
      },
      {
        icon: "pi pi-fw pi-external-link",
        label: "Cooperation",
        routerLink: ["/cooperation"],
      },
    ];
  }

}
