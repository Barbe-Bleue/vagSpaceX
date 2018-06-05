import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, SharedModule, MatFormFieldModule , MatInputModule, FormsModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
