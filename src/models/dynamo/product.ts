import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand
} from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "node:crypto";
import { Product, ProductCreate } from "../../types/product";

const PRODUCTS_TABLE = process.env.PRODUCTS_TABLE;

export class ProductModel {
  static async create(
    product: ProductCreate,
    context: {
      docClient: DynamoDBDocumentClient;
    }
  ): Promise<Product> {
    const db = context.docClient;

    const id = randomUUID();

    const created = new Date();

    const params = {
      TableName: PRODUCTS_TABLE,
      Item: {
        id,
        name: product.name,
        value: product.value,
        created: created.toISOString(),
        updated: created.toISOString()
      }
    };

    const command = new PutCommand(params);
    const response = await db.send(command);
    if (response) {
      return {
        id,
        name: product.name,
        value: product.value,
        created,
        updated: created
      };
    }

    throw new Error("Product not created");
  }

  static async getByID(
    id: string,
    context: {
      docClient: DynamoDBDocumentClient;
    }
  ): Promise<Product> {
    const db = context.docClient;

    const params = {
      TableName: PRODUCTS_TABLE,
      Key: {
        id
      }
    };

    const command = new GetCommand(params);
    const { Item } = await db.send(command);

    if (Item) {
      const { id, name, value, created, updated } = Item;

      return {
        id,
        name,
        value,
        created,
        updated
      };
    } else {
      throw new Error("Product not found");
    }
  }
}
