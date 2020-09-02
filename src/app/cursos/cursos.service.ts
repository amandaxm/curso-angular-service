//classes que dependem de outras
//injeção de dependencia para isso 

import { Injectable } from '@angular/core';
//avisa ao angular que é uma classe injetavel
@Injectable()
export class CursosService{
    private cursos: string[]=['Angular2','Java','Node'];
    constructor(){
        console.log('CursoService');
    }
    getCursos(){
       return this.cursos; 
    }
    addCurso(curso: string){
        this.cursos.push(curso);
    }
}