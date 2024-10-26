export class SwapiPlanet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;

  constructor(
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    residents: string[],
    films: string[],
    created: string,
    edited: string,
    url: string
  ) {
    this.name = name;
    this.rotation_period = rotation_period;
    this.orbital_period = orbital_period;
    this.diameter = diameter;
    this.climate = climate;
    this.gravity = gravity;
    this.terrain = terrain;
    this.surface_water = surface_water;
    this.population = population;
    this.residents = residents;
    this.films = films;
    this.created = created;
    this.edited = edited;
    this.url = url;
  }

  static validate(planet: SwapiPlanet): boolean {
    if (
      planet.name &&
      planet.rotation_period &&
      planet.orbital_period &&
      planet.diameter &&
      planet.climate &&
      planet.gravity &&
      planet.terrain &&
      planet.surface_water &&
      planet.population &&
      planet.residents &&
      planet.films &&
      planet.created &&
      planet.edited &&
      planet.url
    ) {
      return true;
    }

    return false;
  }

  public static fromJson(json: unknown): SwapiPlanet {
    const parsedJson = json as SwapiPlanet;

    if (!SwapiPlanet.validate(parsedJson)) {
      throw new Error("Error parsing swapi planet from JSON");
    }

    return parsedJson;
  }
}
