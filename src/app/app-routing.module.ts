import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/proyectos' },
  { path: 'proyectos', component: ListaProyectosComponent },
  { path: 'proyectos/new', component: FormularioProyectosComponent }
  { path: '**', redirectTo: '/proyectos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
