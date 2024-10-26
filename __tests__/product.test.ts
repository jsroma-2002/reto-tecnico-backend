import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { expect } from "chai";
import sinon from "sinon";
import { ProductModel } from "../src/models/dynamo/product";

describe("ProductModel", () => {
  let docClientStub: sinon.SinonStubbedInstance<DynamoDBDocumentClient>;

  beforeEach(() => {
    docClientStub = sinon.createStubInstance(DynamoDBDocumentClient, {
      send: sinon.stub()
    });
  });

  afterEach(() => {
    // Restore the stubbed method after each test
    sinon.restore();
  });

  it("should create a product successfully and return the created product", async () => {
    const product = {
      name: "Product Red",
      value: 100
    };

    const mockData = { Item: product };

    // Set the stub to return the mock data
    docClientStub.send.resolves(mockData);

    const result = await ProductModel.create(
      {
        name: product.name,
        value: product.value
      },
      {
        docClient: docClientStub
      }
    );

    expect(result).to.deep.include({
      name: product.name,
      value: product.value
    });

    expect(result?.id).to.be.a("string");

    expect(result?.created).to.be.a("Date");
    expect(result?.updated).to.be.a("Date");
  });

  it("should fetch a product succesfully based on id", async () => {
    const product = {
      id: "1e88ea38-ffbd-49bc-b25d-a0eca4f7e1b8",
      name: "Product Red",
      value: 100,
      created: new Date(),
      updated: new Date()
    };

    const mockData = {
      Items: [
        {
          id: product.id,
          name: product.name,
          value: product.value,
          created: product.created,
          updated: product.updated
        }
      ]
    };

    // Set the stub to return the mock data
    docClientStub.send.resolves({
      Item: mockData.Items.find((item) => item.id === product.id)
    });

    const result = await ProductModel.getByID(product.id, {
      docClient: docClientStub
    });

    expect(result).to.deep.equal(product);
  });

  it("should throw Product not found error if product is not found", async () => {
    const productId = "1e88ea38-ffbd-49bc-b25d-a0eca4f7e1b8";

    // Set the stub to return undefined
    docClientStub.send.resolves({ Item: undefined });

    try {
      await ProductModel.getByID(productId, {
        docClient: docClientStub
      });
      throw new Error("Expected error was not thrown");
    } catch (error) {
      expect(error.message).to.equal("Product not found");
    }
  });
});
