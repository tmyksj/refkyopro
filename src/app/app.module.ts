import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./components/app/app.component";
import { LayoutMainComponent } from "./components/layout-main/layout-main.component";
import { PageAlgorithmComponent } from "./components/page-algorithm/page-algorithm.component";
import { PageErrorComponent } from "./components/page-error/page-error.component";
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageIdeaComponent } from "./components/page-idea/page-idea.component";
import { PageIdeaAlgorithmComponent } from "./components/page-idea-algorithm/page-idea-algorithm.component";
import { PageIdeaComplexityComponent } from "./components/page-idea-complexity/page-idea-complexity.component";
import { PageLibraryComponent } from "./components/page-library/page-library.component";

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    LayoutMainComponent,
    PageAlgorithmComponent,
    PageErrorComponent,
    PageHomeComponent,
    PageIdeaComponent,
    PageIdeaAlgorithmComponent,
    PageIdeaComplexityComponent,
    PageLibraryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: PageHomeComponent },
      { path: "algorithm/:key", component: PageAlgorithmComponent },
      { path: "idea", component: PageIdeaComponent },
      { path: "idea/algorithm", component: PageIdeaAlgorithmComponent },
      { path: "idea/complexity", component: PageIdeaComplexityComponent },
      { path: "library/:key/:lang", component: PageLibraryComponent },
      { path: "**", component: PageErrorComponent },
    ]),
  ],
  providers: [
  ],
})
export class AppModule {
}
