import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefas';


@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }
  tarefas: Tarefa[] = []

  listar():Tarefa[]{
    return this.tarefas;
  }

  remover(id:number){
    const tarefas = this.tarefas.find(c => c.id === id);

    if(tarefas){
       const index = this.tarefas.indexOf(tarefas);
       this.tarefas.splice(index,1);
    }
  }

  adicionar(tarefas:Tarefa){
    this.tarefas.push(tarefas);
  }
}
