import { Schema, model, Document } from "mongoose";

export interface ICountry extends Document{
  acronym: String;
  name: String;
  flag: String;
  continent: String;
  capital: String;
  subregion: String;
  area: String;
  population: String;
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Activity'
    },
  ];
}

const CountrySchema = new Schema({
  acronym: String,
  name: String,
  flag: String,
  continent: String,
  capital: String,
  subregion: String,
  area: Number,
  population: Number,
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Activity'
    },
  ],
});

export default model<ICountry>("Country", CountrySchema);