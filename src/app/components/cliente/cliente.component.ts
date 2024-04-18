import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/Cliente';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
    clientes:Cliente[] = [];
  clientForm : FormGroup = new FormGroup({})

   constructor(private clienteService:ClienteService, private formBuilder : FormBuilder) {
    this.clientForm = this.formBuilder

  }

  listar():void{
      this.clientes = this.clienteService.listar();
  }

  ngOnInit():void{
    this.listar();
  }

}
