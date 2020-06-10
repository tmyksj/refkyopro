import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./components/app/app.component";
import { LayoutMainComponent } from './components/layout-main/layout-main.component';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    LayoutMainComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    ]),
  ],
  providers: [
  ],
})
export class AppModule {
}
