import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienciaComponent } from './experienciaYCursos/experiencia.component';
import { PortadaComponent } from './portada/portada.component';
import { PortafolioWebComponent } from './portafolio-web/portafolio-web.component';


const routes: Routes = [
  {path: '',component:PortadaComponent },
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'portafolio', component: PortafolioWebComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}


