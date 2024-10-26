import { expect } from "chai";
import { PlanetModel } from "../src/models/swapi/planets";
import { Planet } from "../src/types/planet";

describe("PlanetModel", () => {
  it("response should be an array of planets", async () => {
    const result = await PlanetModel.getPlanets();

    expect(result).to.be.an("array");

    // Check if the response is an array of objects
    result.forEach((planet: Planet) => {
      expect(planet).to.be.an("object");
    });

    // Check if the response has the expected properties
    result.forEach((planet: Planet) => {
      expect(planet).to.have.property("nombre");
      expect(planet).to.have.property("diametro");
      expect(planet).to.have.property("periodo_rotacion");
      expect(planet).to.have.property("periodo_orbital");
      expect(planet).to.have.property("gravedad");
      expect(planet).to.have.property("poblacion");
      expect(planet).to.have.property("clima");
      expect(planet).to.have.property("terreno");
      expect(planet).to.have.property("superficie_agua");
      expect(planet).to.have.property("residentes");
      expect(planet).to.have.property("peliculas");
      expect(planet).to.have.property("creado");
      expect(planet).to.have.property("editado");
    });
  });
});
