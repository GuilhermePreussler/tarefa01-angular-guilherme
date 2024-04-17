import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Contrato } from '../../models/contrato';
import { Nipe } from '../../models/nipe';

@Component({
  selector: 'app-lista-contratos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './lista-contratos.component.html',
  styleUrl: './lista-contratos.component.css',
})
export class ListaContratosComponent {

  @Input({
    required: true,
  })
  public contratos!: Contrato[];

  @Input()
  public contrato?: Contrato;

  @Input()
  public nipe?: Nipe;

  @Output()
  public contratoSelecionado: EventEmitter<Contrato> = new EventEmitter();

  public selecionarContrato(contrato: Contrato) {
    // notificar o evento para o pai = disparar um evento customizado:
    this.contratoSelecionado.emit(contrato);
  }

}
