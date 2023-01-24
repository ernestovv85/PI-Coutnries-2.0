import { Schema, model, Document } from "mongoose";

export enum Season {
  Primavera = "Primavera",
  Verano = "Verano",
  Otoño = "Otoño",
  Invierno = "Invierno"
}

export interface IActivity extends Document {
  name:{ 
    type: String,
    unique: true
  };
  difficulty: Number;
  duration: Number;
  season: Array<Season>;
}

const ActivitySchema = new Schema({
  name:{ 
    type: String,
    unique: true
  },
  difficulty: Number,
  duration: Number,
  season: Array<Season>
});

export default model<IActivity>("Activity", ActivitySchema);