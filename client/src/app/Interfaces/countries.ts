import { IActivity } from "./activities";

export interface ICountry {
  _id: String;
  acronym: String;
  name: String;
  flag: String;
  continent: String;
  capital: String;
  subregion: String;
  area: String;
  population: String;
  activities: Array<IActivity>;
}