export interface Pokedex {
  count : number
  previous? : string
  next? : string
  results : Result[]
}

export interface Result {
  url: string
  name : string
}
