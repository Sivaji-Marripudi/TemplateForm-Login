import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '..//app/shared/material/material.module'
import { HightlightPipe } from './hightlight.pipe';
import { WelcomepageModule } from './modules/welcomepage/welcomepage.module';



@NgModule({
  declarations: [
    AppComponent,
    HightlightPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,MaterialModule,WelcomepageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
