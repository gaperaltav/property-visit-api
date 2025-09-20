import { Server } from "http";
import { describe } from "node:test";
import request from "supertest";

let server: Server;

describe("/api/properties", () => {
    beforeEach(async () =>{
        server = require('../../config');
    })
    afterEach(()=> {
        if (server) {
             server.close()
        }
    })
    describe("GET /", () => {
        request(server).get('/api/properties');
    })
})