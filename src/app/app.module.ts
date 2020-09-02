import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';

import { CursosService} from './cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursoComponent
  ],
  imports: [
  BrowserModule
  ],
  //servicos nos declaramos dentro de providers
  //significa que a instancia do curso service vai estar disponivel para toda aplicação
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
