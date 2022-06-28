const supertest = require("supertest");
const tst = require("../listo_exercice.js");

describe("testing exercice", () => {
  test("should return true", () => {
    var result = "2022-05-31T23:00:00.000Z";
    expect(tst.firstDay.toBe(result));
  });
});
