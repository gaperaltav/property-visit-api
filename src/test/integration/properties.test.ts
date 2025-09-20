import { describe } from "node:test";
import request from "supertest";
import app from "../../index";

describe("/api/properties", () => {
    beforeEach(async () => {
    })
    afterEach(() => {

    })
    describe("GET /", () => {
        it('It should return all properties', async () => {
            request(app)
                .get('/api/properties')
            // .expect('Content-Type', /json/)
        })
    })
})