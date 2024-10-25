import { expect } from "chai";
import { PlanetModel } from "../src/models/swapi/planets";

describe("PlanetModel", () => {
  it("response should be an array of planets", async () => {
    const result = await PlanetModel.getPlanets();

    expect(result).to.be.an("array");

    // Check if the response is an array of objects
    result.forEach((planet: any) => {
      expect(planet).to.be.an("object");
    });
  });
});
