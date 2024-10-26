import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { Request, Response } from "express";
import { ProductModel } from "../models/dynamo/product";

const client = new DynamoDBClient();
const docClient = DynamoDBDocumentClient.from(client);

export class ProductsController {
  static async createProduct(req: Request, res: Response) {
    try {
      const { name, value } = req.body;
      const product = await ProductModel.create(
        {
          name,
          value
        },
        {
          docClient
        }
      );
      res.status(201).json(product);
    } catch {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async getProductById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await ProductModel.getByID(id, {
        docClient
      });
      res.status(200).json(product);
    } catch {
      res.status(404).json({ message: "Product not found" });
    }
  }
}
