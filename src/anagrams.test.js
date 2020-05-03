import { expect } from "chai";
import { isAnagram } from "./anagrams";

describe("isAnagram - basic functionality", () => {
  it("returns true when two know anagrams are passed in", () => {
    const expected = true;
    const actual = isAnagram("elbow", "below");
    expect(actual).to.equal(expected);
  });
  it("returns false if the either strings have higher value", () => {
    const expected = false;
    const actual = isAnagram("elbows", "below");
    expect(actual).to.equal(expected);

    const actual2 = isAnagram("below", "elbows");
    expect(actual2).to.equal(expected);
  });
  it("returns false when the strings have the same letters but different quantities", () => {
    const expected = false;
    const actual = isAnagram("silent", "listens");
    expect(actual).to.equal(expected);
  });
});

// listens silent (x)
// conversation - voices rant on (*) - spaces are ok
// STATE - taste (*) - caps lock are ok
