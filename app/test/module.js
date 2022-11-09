const chai = require("chai");
const { expect } = chai;
const chaiHTTP = require("chai-http");
const app = require("../../app");

chai.use(chaiHTTP);

describe("ModuleTests", () => {
  describe("GET /module/getAllModules", () => {
    it("should return all modules in array", (done) => {
      chai
        .request(app)
        .get("/module/getAllModules")
        .end((err, res) => {
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
});
