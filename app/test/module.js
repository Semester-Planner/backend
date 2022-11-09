const chai = require("chai");
const { expect } = chai;
const chaiHTTP = require("chai-http");
const app = require("../../app");
const passport = require("passport");
const { sequelize } = require("../db/models");
const { QueryTypes } = require("sequelize");

chai.use(chaiHTTP);

const agent = chai.request.agent(app);

describe("ModuleTests", () => {
  describe("GET /module/getAllModules", () => {
    it("should return all modules in array", (done) => {
      agent.get("/module/getAllModules").end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a("array");
        expect(res.body).to.have.length(14);
        expect(res.body[0]).to.have.all.keys(
          "id",
          "name",
          "mod_code",
          "department",
          "coordinator"
        );
        done();
      });
    });
  });

  describe("GET /auth/google", () => {
    const strategy = passport._strategies["google"];

    strategy._token_response = {
      access_token: "at-1234",
      refresh_token: "dsfsf0",
      expires_in: 3600,
    };

    strategy._profile = {
      _json: {
        sub: "115903246074145320432",
        name: "Donna Magi",
        given_name: "Donna",
        family_name: "Magi",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRQkyJnY45wlcKinGmQoY8Qt7lLGye0-rcWO1CXo&s",
        email: "donna.magi@code.berlin",
        email_verified: true,
        locale: "en",
        hd: "code.berlin",
      },
    };

    it("it should authenticate the exising user and start their session", (done) => {
      agent.get("/auth/google").end(async (err, res) => {
        const user = await sequelize.query(
          `SELECT * FROM "User" WHERE "email" = 'donna.magi@code.berlin';`,
          { type: QueryTypes.SELECT }
        );

        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(user).to.not.be.null;
        expect(res).to.have.cookie("connect.sid");
        done();
      });
    });

    describe("GET /module/getAllUserModules", () => {
      it("should return all user modules in array", (done) => {
        agent.get("/module/getAllUserModules").end(async (err, res) => {
          const user = await sequelize.query(
            `SELECT * FROM "User" WHERE "email" = 'donna.magi@code.berlin';`,
            { type: QueryTypes.SELECT }
          );

          expect(err).to.be.null;
          expect(user).to.not.be.null;
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a("array");
          expect(res.body).to.have.length(14);
          expect(res.body[0]).to.have.all.keys(
            "id",
            "name",
            "mod_code",
            "department",
            "coordinator",
            "UserModule"
          );
          done();
        });
      });
    });
  });
});
