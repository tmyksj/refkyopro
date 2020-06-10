import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./components/app/app.component";
import { LayoutMainComponent } from './components/layout-main/layout-main.component';
import { PageAlgorithmComponent } from './components/page-algorithm/page-algorithm.component';
import { PageErrorComponent } from './components/page-error/page-error.component';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    LayoutMainComponent,
    PageAlgorithmComponent,
    PageErrorComponent,
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
