import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
  { path:"listEquipe", component: ListEquipeComponent},
  { path:"addEquipe", component: AddEquipeComponent},
  { path:"updateEquipe/:id", component: AddEquipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
