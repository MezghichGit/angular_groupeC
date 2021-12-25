import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddDrPipe } from './add-dr.pipe';
import { FirstLetterUpperPipe } from './first-letter-upper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddDrPipe,
    FirstLetterUpperPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
