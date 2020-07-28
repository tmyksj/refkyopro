import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CardModule } from "primeng/card";
import { TabMenuModule } from "primeng/tabmenu";

import { AppComponent } from "./components/app/app.component";
import { LayoutMainComponent } from "./components/layout-main/layout-main.component";
import { PageAlgorithmComponent } from "./components/page-algorithm/page-algorithm.component";
import { PageAlgorithmKeyComponent } from "./components/page-algorithm-key/page-algorithm-key.component";
import { PageErrorComponent } from "./components/page-error/page-error.component";
import { PageHomeComponent } from "./components/page-home/page-home.component";
import { PageLibraryComponent } from "./components/page-library/page-library.component";
import { PageLibraryKeyComponent } from "./components/page-library-key/page-library-key.component";
import { PageLibraryKeyLangComponent } from "./components/page-library-key-lang/page-library-key-lang.component";
import { PageSuggestionComponent } from "./components/page-suggestion/page-suggestion.component";
import { PageSuggestionAlgorithmComponent } from "./components/page-suggestion-algorithm/page-suggestion-algorithm.component";
import { PageSuggestionComplexityComponent } from "./components/page-suggestion-complexity/page-suggestion-complexity.component";
import { PartCardContentComponent } from "./components/part-card-content/part-card-content.component";
import { PartCardContentBoxComponent } from "./components/part-card-content-box/part-card-content-box.component";
import { PartContainerMainComponent } from "./components/part-container-main/part-container-main.component";
import { PartLanguageComponent } from "./components/part-language/part-language.component";
import { PartMarkdownComponent } from "./components/part-markdown/part-markdown.component";
import { PartProgressSpinnerComponent } from "./components/part-progress-spinner/part-progress-spinner.component";
import { PartVisualDijkstraComponent } from "./components/part-visual-dijkstra/part-visual-dijkstra.component";

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    LayoutMainComponent,
    PageAlgorithmComponent,
    PageAlgorithmKeyComponent,
    PageErrorComponent,
    PageHomeComponent,
    PageLibraryComponent,
    PageLibraryKeyComponent,
    PageLibraryKeyLangComponent,
    PageSuggestionComponent,
    PageSuggestionAlgorithmComponent,
    PageSuggestionComplexityComponent,
    PartCardContentComponent,
    PartCardContentBoxComponent,
    PartContainerMainComponent,
    PartLanguageComponent,
    PartMarkdownComponent,
    PartProgressSpinnerComponent,
    PartVisualDijkstraComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: PageHomeComponent },
      { path: "algorithm", component: PageAlgorithmComponent },
      { path: "algorithm/:key", component: PageAlgorithmKeyComponent },
      { path: "library", component: PageLibraryComponent },
      { path: "library/:key", component: PageLibraryKeyComponent },
      { path: "library/:key/:lang", component: PageLibraryKeyLangComponent },
      { path: "suggestion", component: PageSuggestionComponent },
      { path: "suggestion/algorithm", component: PageSuggestionAlgorithmComponent },
      { path: "suggestion/complexity", component: PageSuggestionComplexityComponent },
      { path: "**", component: PageErrorComponent },
    ]),
    CardModule,
    TabMenuModule,
  ],
  providers: [
  ],
})
export class AppModule {
}
