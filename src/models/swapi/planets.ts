import axios from "axios";
import { PlanetAdapter } from "../../adapters/planets-adapter";
import { SwapiPlanet } from "../../adapters/swapi-planets-adapter";
import { Planet } from "../../types/planet";

export class PlanetModel {
  static async getPlanets(): Promise<Planet[]> {
    const response = await axios.get("https://swapi.dev/api/planets/");

    const planets: SwapiPlanet[] = response.data.results.map((planet) =>
      SwapiPlanet.fromJson(planet)
    );

    return planets.map((planet) => PlanetAdapter.translate(planet));
  }
}
