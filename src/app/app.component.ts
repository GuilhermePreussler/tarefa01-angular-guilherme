import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Contrato } from './models/contrato';
import { ListaContratosComponent } from './components/lista-contratos/lista-contratos.component';
import { ListaNipesComponent } from "./components/lista-nipes/lista-nipes.component";
import { Nipe } from './models/nipe';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        ListaContratosComponent,
        ListaNipesComponent,
    ]
})
export class AppComponent {

  public contrato?: Contrato;

  public contratos: Contrato[] = [
    new Contrato('A','preto',),
    new Contrato('2','preto',),
    new Contrato('3','preto',),
    new Contrato('4','preto',),
    new Contrato('5','preto',),
    new Contrato('6','preto',),
    new Contrato('7','preto',),
    new Contrato('8','preto',),
    new Contrato('9','preto',),
    new Contrato('10','preto',),
    new Contrato('J','preto',),
    new Contrato('Q','preto',),
    new Contrato('K','preto',),
  ];

  public nipe?: Nipe;

  public nipes: Nipe[] = [
    new Nipe('♥️','vermelho',),
    new Nipe('♠️','preto',),
    new Nipe('♦️','vermelho',),
    new Nipe('♣️','preto',),
  ];

}
