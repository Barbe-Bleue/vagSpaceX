import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {MatInputModule, MatFormFieldModule} from "@angular/material";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./modules/app-routing/app-routing.module";
import {SharedModule} from "./modules/shared/shared.module";
import {CompanyInfoComponent} from "./components/company-info/company-info.component";
import {RocketListComponent} from "./components/rocket-list/rocket-list.component";
import { HugeNumberPipe } from "./pipes/hugeNumber.pipeaaaaaaaaa";


@NgModule({
    declarations: [
        AppComponent,
        CompanyInfoComponent,
        RocketListComponent,
        HugeNumberPipe
    ],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule, SharedModule, MatFormFieldModule, MatInputModule, FormsModule, MatCheckboxModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
