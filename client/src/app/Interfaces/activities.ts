export enum Season {
  Primavera = "Primavera",
  Verano = "Verano",
  Otoño = "Otoño",
  Invierno = "Invierno"
}

export interface IActivity extends Document {
  _id: String;
  name: String;
  difficulty: Number;
  duration: Number;
  season: Array<Season>;
}