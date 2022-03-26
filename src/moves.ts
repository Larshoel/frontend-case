
interface power {
    power : power
}

interface accuracies {
    accuracies : Number;
}

interface flavor_text {
    flavor_text : any;
    
}

export interface Moves{
  name : string
  power: power
  accuracy : accuracies
  flavor_text_entries : flavor_text[]
}