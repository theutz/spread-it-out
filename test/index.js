import spreadItOut from "../lib/index";
import { expect } from "chai";

describe("it works again", () => {
  it("works again", () => {
    expect(spreadItOut(`#71b82c`)).to.eql([
      "#71b82c",
      "#eef6e5",
      "#d8e4cb",
      "#c2d1b2",
      "#acbf98",
      "#96ad7f",
      "#7f9a65",
      "#69884b",
      "#537532",
      "#3d6318"
    ]);
  });
});
