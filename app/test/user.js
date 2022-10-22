// var SequelizeMock = require('sequelize-mock');
// var dbMock = new SequelizeMock();

// const UserMock = dbMock.define("User", {
//     email: "cody.studentis@code.berlin",
//     name: "Cody",
//     surname: "Studentis",
//     picture: "https://media.gq.com/photos/60cb7a8c502abac5b2047d34/master/pass/cody-rhodes-rld.jpg",
// }, {
//     instanceMethods: {
//         getFullName: function () {
//             return this.get('name') + ' ' + this.get('surname');
//         },
//     },
// });

const chai = require("chai");
const { expect } = chai;
const chaiHTTP = require("chai-http");
const app = require("../../app");
const passport = require("passport");

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
      name: "Alsje Lourens",
      given_name: "Alsje",
      family_name: "Lourens",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0q1lvDd5u_YtVaA_STBcXifC8uo8xajZCDhlk=s96-c",
      email: "alsje.lourens@code.berlin",
      email_verified: true,
      locale: "en",
      hd: "code.berlin",
    },
  };

  it("should login", (done) => {
    agent.get("/auth/google").end((err, res) => {
      console.log(res);
      return done();
    });
  });
});
