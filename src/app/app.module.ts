import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddDrPipe } from './add-dr.pipe';
import { FirstLetterUpperPipe } from './first-letter-upper.pipe';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddDrPipe,
    FirstLetterUpperPipe,
    ListEquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
