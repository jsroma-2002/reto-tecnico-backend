import { Request, Response } from "express";
import { PlanetModel } from "../models/swapi/planets";

export class PlanetsController {
  static async getPlanets(_: Request, res: Response) {
    try {
      const planets = await PlanetModel.getPlanets();

      res.status(200).json(planets);
    } catch {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
