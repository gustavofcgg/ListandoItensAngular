import { Tarefa } from './../../interfaces/Tarefas';
import { Component } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})


export class TarefaComponent {
  tarefas:Tarefa[] =[];
  tarefaForm : FormGroup = new FormGroup({})

  constructor(private TarefaService:TarefaService, private formBuilder : FormBuilder) {
    this.tarefaForm = this.formBuilder.group({
      nome : ['', Validators.required],
      description : ['', Validators.required],
      data : ['', Validators.required],
      id : ['', Validators.required]
    })
  }
  inserir(){
    if(this.tarefaForm.valid){
      const TarefaNova: Tarefa = {
        nome: this.tarefaForm.value.nome,
        description : this.tarefaForm.value.description,
        data: this.tarefaForm.value.data,
        id : this.tarefaForm.value.id
      }
      this.tarefaForm.reset()
      this.TarefaService.adicionar(TarefaNova)
      alert("Cadastro com sucesso!")
    }

  }

  listar():void{
    this.tarefas = this.TarefaService.listar();
}

remover(id: number):void {
  this.TarefaService.remover(id);
  alert('Removido com sucesso!')
}

ngOnInit():void{
  this.listar();
}

}
