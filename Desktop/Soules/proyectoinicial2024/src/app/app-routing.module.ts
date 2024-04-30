import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/components/inicio/inicio.component';

const routes: Routes = [
  // ruta por defecto en la inicializacion
  {
    path:"",component:InicioComponent
  },
  // ruta que nos vincula al módulo de inicio
  {
    path:"",loadChildren:()=>import("./modules/inicio/inicio.module").then(m=>m.InicioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }