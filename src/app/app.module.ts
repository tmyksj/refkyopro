import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CardModule } from "primeng/card";
import { TableModule } from "primeng/table";
import { TabMenuModule } from "primeng/tabmenu";

import { AppComponent } from "./components/app/app.component";
import { LayoutMainComponent } from "./components/layout-main/layout-main.component";
import { PageAlgorithmComponent } from "./components/page-algorithm/page-algorithm.component";
import { PageCooperationComponent } from "./components/page-cooperation/page-cooperation.component";
import { PageCooperationAtcoderComponent } from "./components/page-cooperation-atcoder/page-cooperation-atcoder.component";
import { PageCooperationAtcoderAcceptedComponent } from "./components/page-cooperation-atcoder-accepted/page-cooperation-atcoder-accepted.component";
import { PageErrorComponent } from "./components/page-error/page-error.component";
import { PageHomeComponent } from "./components/page-home/page-home.component";
import { PageLibraryComponent } from "./components/page-library/page-library.component";
import { PageSuggestionComponent } from "./components/page-suggestion/page-suggestion.component";
import { PageSuggestionAlgorithmComponent } from "./components/page-suggestion-algorithm/page-suggestion-algorithm.component";
import { PageSuggestionComplexityComponent } from "./components/page-suggestion-complexity/page-suggestion-complexity.component";
import { PartCardContentComponent } from "./components/part-card-content/part-card-content.component";
import { PartMarkdownComponent } from "./components/part-markdown/part-markdown.component";
import { PartVisualDijkstraComponent } from "./components/part-visual-dijkstra/part-visual-dijkstra.component";

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    LayoutMainComponent,
    PageAlgorithmComponent,
    PageCooperationComponent,
    PageCooperationAtcoderComponent,
    PageCooperationAtcoderAcceptedComponent,
    PageErrorComponent,
    PageHomeComponent,
    PageLibraryComponent,
    PageSuggestionComponent,
    PageSuggestionAlgorithmComponent,
    PageSuggestionComplexityComponent,
    PartCardContentComponent,
    PartMarkdownComponent,
    PartVisualDijkstraComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: PageHomeComponent },
      { path: "algorithm", component: PageAlgorithmComponent },
      { path: "algorithm/:key", component: PageAlgorithmComponent },
      { path: "cooperation", component: PageCooperationComponent },
      { path: "cooperation/atcoder", component: PageCooperationAtcoderComponent },
      { path: "cooperation/atcoder/accepted", component: PageCooperationAtcoderAcceptedComponent },
      { path: "cooperation/atcoder/accepted/:contestKey", component: PageCooperationAtcoderAcceptedComponent },
      { path: "cooperation/atcoder/accepted/:contestKey/:taskKey", component: PageCooperationAtcoderAcceptedComponent },
      { path: "cooperation/atcoder/accepted/:contestKey/:taskKey/:lang", component: PageCooperationAtcoderAcceptedComponent },
      { path: "library", component: PageLibraryComponent },
      { path: "library/:key", component: PageLibraryComponent },
      { path: "library/:key/:lang", component: PageLibraryComponent },
      { path: "suggestion", component: PageSuggestionComponent },
      { path: "suggestion/algorithm", component: PageSuggestionAlgorithmComponent },
      { path: "suggestion/complexity", component: PageSuggestionComplexityComponent },
      { path: "**", component: PageErrorComponent },
    ]),
    CardModule,
    TableModule,
    TabMenuModule,
  ],
  providers: [
  ],
})
export class AppModule {
}
