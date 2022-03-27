interface types{
  name : string;
  url : string;
}

interface nameUrlPar{
  name : string;
  url : string;
}

interface flavor_text {
    language : nameUrlPar;
    flavor_text : any;
    
}

export interface Moves{
  name : string
  power: number;
  accuracy : number;
  flavor_text_entries : flavor_text[];
  type : types;
}