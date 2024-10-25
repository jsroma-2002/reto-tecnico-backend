export class PlanetAdapter {
  static translate(planet) {
    return {
      nombre: planet.name,
      diametro: planet.diameter,
      periodo_rotacion: planet.rotation_period,
      periodo_orbital: planet.orbital_period,
      gravedad: planet.gravity,
      poblacion: planet.population,
      clima: planet.climate,
      terreno: planet.terrain,
      superficie_agua: planet.surface_water,
      residentes: planet.residents,
      peliculas: planet.films,
      creado: planet.created,
      editado: planet.edited,
    };
  }
}
