//classes que dependem de outras
//injeção de dependencia para isso 

import { Injectable } from '@angular/core';
//avisa ao angular que é uma classe injetavel
@Injectable()
export class CursosService{

    getCursos(){
       return ['Angular2','Java','Node']; 
    }
}