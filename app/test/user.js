var SequelizeMock = require("sequelize-mock");
var dbMock = new SequelizeMock();
const chai = require("chai");
const { expect } = chai;
const chaiHTTP = require("chai-http");
var proxyquire = require("proxyquire");
const { sequelize } = require("../db/models");
// const { QueryTypes } = require("sequelize");

const UserMock = dbMock.define(
  "User",
  {
    id: "12345",
    email: "cody.studentis@code.berlin",
    name: "Cody",
    surname: "Studentis",
    picture:
      "https://media.gq.com/photos/60cb7a8c502abac5b2047d34/master/pass/cody-rhodes-rld.jpg",
  },
  {
    id: "67890",
    email: "codina.studentia@code.berlin",
    name: "Codina",
    surname: "Studentia",
    picture:
      "https://stickerly.pstatic.net/sticker_pack/T0KmRL9feta9jQUGIa8P6A/AAGQO6/29/1a692556-9029-454a-bfc2-e44c473a6636.png",
  }
);

// const userController = proxyquire("../controllers/user", {
//   "../db/models/user": UserMock,
// });

// describe("#getAllUsers", function () {
//   it("should return array of all users", async function (done) {
//     agent.get("/user/getAllUsers");
//     const users = await userController.getAllUsersFactory(UserMock)(_req, res, next);
//     expect(users).to.be.array();
//     // expect(users).to.have.length(2);
//     //expect(err).to.be.null();
//     done();
//   });
// });
