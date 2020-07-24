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
import { PageAlgorithmKeyComponent } from "./components/page-algorithm-key/page-algorithm-key.component";
import { PageCooperationComponent } from "./components/page-cooperation/page-cooperation.component";
import { PageCooperationAtcoderComponent } from "./components/page-cooperation-atcoder/page-cooperation-atcoder.component";
import { PageCooperationAtcoderAcceptedComponent } from "./components/page-cooperation-atcoder-accepted/page-cooperation-atcoder-accepted.component";
import { PageCooperationAtcoderContestComponent } from "./components/page-cooperation-atcoder-contest/page-cooperation-atcoder-contest.component";
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
import { PartVisualDijkstraComponent } from "./components/part-visual-dijkstra/part-visual-dijkstra.component";
import { PageCooperationAtcoderContestKeyComponent } from './components/page-cooperation-atcoder-contest-key/page-cooperation-atcoder-contest-key.component';
import { PageCooperationAtcoderContestKeyTaskKeyComponent } from './components/page-cooperation-atcoder-contest-key-task-key/page-cooperation-atcoder-contest-key-task-key.component';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    LayoutMainComponent,
    PageAlgorithmComponent,
    PageAlgorithmKeyComponent,
    PageCooperationComponent,
    PageCooperationAtcoderComponent,
    PageCooperationAtcoderAcceptedComponent,
    PageCooperationAtcoderContestComponent,
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
    PartVisualDijkstraComponent,
    PageCooperationAtcoderContestKeyComponent,
    PageCooperationAtcoderContestKeyTaskKeyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: PageHomeComponent },
      { path: "algorithm", component: PageAlgorithmComponent },
      { path: "algorithm/:key", component: PageAlgorithmKeyComponent },
      { path: "cooperation", component: PageCooperationComponent },
      { path: "cooperation/atcoder", component: PageCooperationAtcoderComponent },
      { path: "cooperation/atcoder/contest", component: PageCooperationAtcoderContestComponent },
      { path: "cooperation/atcoder/contest/:contestKey", component: PageCooperationAtcoderContestComponent },
      { path: "cooperation/atcoder/contest/:contestKey/:taskKey", component: PageCooperationAtcoderContestComponent },
      { path: "cooperation/atcoder/contest/:contestKey/:taskKey/accepted", component: PageCooperationAtcoderAcceptedComponent },
      { path: "cooperation/atcoder/contest/:contestKey/:taskKey/accepted/:lang", component: PageCooperationAtcoderAcceptedComponent },
      { path: "library", component: PageLibraryComponent },
      { path: "library/:key", component: PageLibraryKeyComponent },
      { path: "library/:key/:lang", component: PageLibraryKeyLangComponent },
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
