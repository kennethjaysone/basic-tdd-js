import { expect } from "chai";
import { getLetterCount } from "./letter-count";

describe("getLetterCount - basic functionality", () => {
  it("returns an empty object when given an empty string", () => {
    const expected = {};
    const actual = getLetterCount("");
    expect(actual).to.deep.equal(expected);
  });

  it("returns the right amount of alphabet count for a word with 1 alphabet", () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount("cat");
    expect(actual).to.deep.equal(expected);
  });

  it("return the correct letter count for a word with more than one of a certain alphabet", () => {
    const expected = { m: 1, i: 4, s: 4, p: 2 };
    const actual = getLetterCount("mississippi");
    expect(actual).to.deep.equal(expected);
    //Mississippi
  });
});
