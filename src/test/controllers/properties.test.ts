import { describe, it } from "node:test";
import controller from "../../controllers/properties";
import { PropertyModel } from "../../models";
import { Request, Response } from "express";

const testProperties = [
  {
    _id: "1",
    title: "Test Property",
  },
  {
    _id: "2",
    title: "Test Property2",
  },
];

describe("properties controller", () => {
  beforeEach(() => {
    PropertyModel.find = jest.fn().mockResolvedValue(testProperties);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should return all properties", async () => {
    const req = {
      user: {
        _id: "12345",
        role: "admin",
      },
    } as Request;

    const res = {
      status: (statusCode: number) => ({
        json: (data: any) => {
          return data;
        },
      }),
    } as Response;

    await controller.getAllProperties(req, res);
    
    expect(PropertyModel.find).toHaveBeenCalled();
    expect(res.status(200).json(testProperties)).toBe(testProperties);
  });
});
