import { Request, Response } from "express";
import { PlanetAdapter } from "../adapters/planets-adapter";
import { PlanetModel } from "../models/swapi/planets";

export class PlanetsController {
  static async getPlanets(_: Request, res: Response) {
    try {
      const apiPlanets = await PlanetModel.getPlanets();

      const planets = apiPlanets.map((planet) =>
        PlanetAdapter.translate(planet)
      );

      res.status(200).json(planets);
    } catch {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
