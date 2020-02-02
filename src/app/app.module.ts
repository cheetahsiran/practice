import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithoutAuthComponent } from './without-auth/without-auth.component';
import { WithAuthComponent } from './with-auth/with-auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
    WithoutAuthComponent,
    WithAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
