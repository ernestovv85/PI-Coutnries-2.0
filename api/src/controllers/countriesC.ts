import axios from "axios";
import Country, { ICountry } from "../Models/Country";

export async function apiInfo() {
  const res = await axios.get("https://restcountries.com/v3/all");
  const apiInfo = await res.data.map(
    (country: {
      cca3: String;
      name: { common: String };
      flags: String[];
      continents: String[];
      capital: String[] | null;
      subregion: String | null;
      area: Number;
      population: Number;
    }) => {
      return {
        acronym: country.cca3,
        name: country.name.common,
        flag: country.flags[0],
        continents: country.continents[0],
        capital:
          country.capital != null ? country.capital[0] : "No tiene capital",
        subregion:
          country.subregion != null ? country.subregion : "No tiene subregión",
        area: country.area,
        population: country.population,
      };
    }
  );
  await Country.insertMany(apiInfo);
  return apiInfo;
}

export async function getAllCountries() {
  const allCountries = await Country.find();
  if (allCountries.length === 0) {
    const api = apiInfo();
    return api;
  }
  return allCountries;
}

export async function findByName(name: String) {
  const country = await Country.find({ name: { $regex: name } });
  return country;
}

export async function findById(id: String) {
  const countryId = await Country.findById(id).populate("activities");
  return countryId;
}

export async function updateCountry(id: String, body: ICountry) {
  const {
    acronym,
    name,
    flag,
    capital,
    subregion,
    area,
    population,
    activities,
  } = body;
  let country = await Country.findByIdAndUpdate(id, {
    acronym,
    name,
    flag,
    capital,
    subregion,
    area,
    population,
    activities,
  });
  return country;
}

export async function deleteCountry(id: String) {
  const deleteCountry = await Country.findByIdAndDelete(id)
  return deleteCountry;
}