const supertest = require("supertest");
const employeeAbsence = require("../listo_exercice");
const absence = require("../listo_exercice");

describe("testing exercice", () => {
  // testing with the toStrictEqual option
  test("should return same result : true ", () => {
    var result = ["2022-06-28T23:00:00.000Z", "2022-06-25T23:00:00.000Z"];

    expect(employeeAbsence).toStrictEqual(result);
  });

  // testing same as previous but with different option : toMatchObject
  test("should return true ", () => {
    var result = ["2022-06-28T23:00:00.000Z", "2022-06-25T23:00:00.000Z"];
    expect(absence).toMatchObject(result);
  });

  // same test as before but should return false //
  // failed test //
  test("should fail ", () => {
    var result = ["2022-06-24T23:00:00.000Z", "2022-05-25T23:00:00.000Z"];
    expect(absence).toMatchObject(result);
  });
});
