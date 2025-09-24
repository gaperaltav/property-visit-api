import { describe } from "node:test";
import request from "supertest";
import app from "../../index";

import { PropertyModel } from "../../models";
import { testProperties as testData } from "./test-properties-data";
import assert from "node:assert";
import jwt from 'jsonwebtoken'

let token: string = jwt.sign({ _id: 1 }, "SecretKeyTest")

describe("Integration: /api/properties", () => {
    beforeAll(async () => {
        await PropertyModel.insertMany(testData);

    })

    afterAll(async () => {
        await PropertyModel.deleteMany();
    })

    describe("GET /", () => {
        it('It should return all properties', async () => {
           const response = await request(app)
                .get('/api/properties')
                .set('Authorization', token)
                .expect('Content-Type', /json/)
                .expect(200)

            expect(response.body.length).toEqual(2);
        })
    })
})