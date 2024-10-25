import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "node:crypto";

const client = new DynamoDBClient();
const docClient = DynamoDBDocumentClient.from(client);
const PRODUCTS_TABLE = process.env.PRODUCTS_TABLE;

export class ProductModel {
  static async create(
    name: string,
    value: number,
    context?: {
      docClient: DynamoDBDocumentClient;
    }
  ) {
    const db = context?.docClient || docClient;

    const id = randomUUID();

    const params = {
      TableName: PRODUCTS_TABLE,
      Item: {
        id,
        name,
        value,
      },
    };

    try {
      const command = new PutCommand(params);
      const response = await db.send(command);
      if (response) {
        return {
          id,
          name,
          value,
        };
      }
    } catch (error) {
      throw error;
    }
  }

  static async getByID(
    id: string,
    context?: {
      docClient: DynamoDBDocumentClient;
    }
  ) {
    const db = context?.docClient || docClient;

    const params = {
      TableName: PRODUCTS_TABLE,
      Key: {
        id,
      },
    };

    try {
      const command = new GetCommand(params);
      const { Item } = await db.send(command);

      if (Item) {
        const { id, name, value } = Item;

        return {
          id,
          name,
          value,
        };
      } else {
        throw new Error("Product not found");
      }
    } catch (error) {
      throw error;
    }
  }
}
