import { NgModule } from '@angular/core';
import { TablaCursosComponent } from './tabla-cursos.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosRoutingModule } from '../cursos-routing.module.module';
import { FormAbmCursosComponent } from './form-abm-cursos/form-abm-cursos.component';
import { CursosComponent } from '../cursos/cursos.component';


@NgModule({
  declarations: [
    TablaCursosComponent,
    DetalleCursoComponent,
    FormAbmCursosComponent,
    CursosComponent
  ],
  imports: [
    SharedModule,
    CursosRoutingModule

  ],
  exports: [
    TablaCursosComponent
  ]
})
export class TablaCursosModule { }
