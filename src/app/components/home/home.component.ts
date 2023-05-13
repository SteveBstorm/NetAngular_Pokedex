import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokedex } from 'src/app/models/pokedex.model';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private firstCallUrl: string = "https://pokeapi.co/api/v2/pokemon"

  currentTwenty!: Pokedex

  constructor(
    private _service: PokeService,
    private _router: Router
    ){}

  ngOnInit(){
    this.loadData(this.firstCallUrl)
  }

  loadData(url: string) {
    this._service.getPokedex(url).subscribe({
      next : (data: Pokedex) => this.currentTwenty = data,
      error : (error) => alert("Une erreur s'est produite \n" + error.message)
    })
  }

  selectedUrl! : string
  showInputDetail(url : string) {
    this.selectedUrl = url
  }

  showExternalDetail(url: string) {
    this._router.navigate(["detail",url])
  }

}
