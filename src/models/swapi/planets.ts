import axios from "axios";

export class PlanetModel {
  static async getPlanets() {
    try {
      const response = await axios.get("https://swapi.dev/api/planets/");

      return response.data.results;
    } catch (error) {
      throw error;
    }
  }
}
