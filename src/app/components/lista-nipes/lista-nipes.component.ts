import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Nipe } from '../../models/nipe';

@Component({
  selector: 'app-lista-nipes',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './lista-nipes.component.html',
  styleUrl: './lista-nipes.component.css',
})
export class ListaNipesComponent {

  @Input({
    required: true,
  })
  public nipes!: Nipe[];

  @Input()
  public nipe?: Nipe;

  @Output()
  public nipeSelecionado: EventEmitter<Nipe> = new EventEmitter();

  public selecionarNipe(nipe: Nipe) {
    // notificar o evento para o pai = disparar um evento customizado:
    this.nipeSelecionado.emit(nipe);
  }

}
