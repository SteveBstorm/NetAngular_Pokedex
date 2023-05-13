import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-inputdetails',
  templateUrl: './inputdetails.component.html',
  styleUrls: ['./inputdetails.component.css']
})
export class InputdetailsComponent {
  @Input() set url(value: string) {
    this._service.getPokemon(value).subscribe({
      next : (data : Pokemon) => this.currentPokemon = data
    })
  }

  currentPokemon! : Pokemon

  constructor(
    private _service : PokeService
  ) {}

}
