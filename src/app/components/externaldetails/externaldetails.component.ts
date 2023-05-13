import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-externaldetails',
  templateUrl: './externaldetails.component.html',
  styleUrls: ['./externaldetails.component.css']
})
export class ExternaldetailsComponent {

  currentPokemon!: Pokemon

  constructor(
    private _service: PokeService,
    private _ar : ActivatedRoute
    ) {}

  ngOnInit() {
    let url : string = this._ar.snapshot.params["url"]
    this._service.getPokemon(url).subscribe({
      next : (data : Pokemon) => this.currentPokemon = data
    })
  }
}
