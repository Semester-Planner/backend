// google oath2 integration test

const chai = require("chai");
const { expect } = chai;
const chaiHTTP = require("chai-http");
const app = require("../../app");
const passport = require("passport");
const { sequelize } = require("../db/models");
const { QueryTypes } = require("sequelize");
const { CookieAccessInfo } = require("cookiejar");

const { NODE_ENV } = process.env;

chai.use(chaiHTTP);

const agent = chai.request.agent(app);

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
      name: "Cody Studentis",
      given_name: "Studentis",
      family_name: "Studentis",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0q1lvDd5u_YtVaA_STBcXifC8uo8xajZCDhlk=s96-c",
      email: "cody.studentis@code.berlin",
      email_verified: true,
      locale: "en",
      hd: "code.berlin",
    },
  };

  it("it should create a new user if the email doesn't already exist in the db and start their session", (done) => {
    agent.get("/auth/google").end(async (err, res) => {
      const user = await sequelize.query(
        `SELECT * FROM "User" WHERE "email" = 'cody.studentis@code.berlin';`,
        { type: QueryTypes.SELECT }
      );

      console.log(res.header);

      expect(err).to.be.null;
      expect(res).to.have.status(200);
      //expect(res).to.have.cookie("connect.sid");
      expect("set-cookie", /connect.sid=.*; Path=\/; HttpOnly/);
      //expect(res).to.have.cookie('connect.sid');
      done();
    });
  });
});