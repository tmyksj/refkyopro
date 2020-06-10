import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./components/app/app.component";
import { LayoutMainComponent } from './components/layout-main/layout-main.component';
import { PageAlgorithmComponent } from './components/page-algorithm/page-algorithm.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { PageIdeaComponent } from './components/page-idea/page-idea.component';
import { PageIdeaAlgorithmComponent } from './components/page-idea-algorithm/page-idea-algorithm.component';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    LayoutMainComponent,
    PageAlgorithmComponent,
    PageErrorComponent,
    PageIdeaComponent,
    PageIdeaAlgorithmComponent,
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
