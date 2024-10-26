import axios from "axios";

export class PlanetModel {
  static async getPlanets() {
    const response = await axios.get("https://swapi.dev/api/planets/");

    return response.data.results;
  }
}
