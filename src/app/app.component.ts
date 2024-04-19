import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TarefaComponent } from "./components/tarefa/tarefa.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ClienteComponent, TarefaComponent]
})
export class AppComponent {
  title = 'new-app';
}
