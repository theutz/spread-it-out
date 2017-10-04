import spreadItOut from "../lib/index";
import { expect } from "chai";

describe("spreadItOut", () => {
  it("works with just a color input", () => {
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

  it("works with a new magnitude", () => {
    expect(spreadItOut(`#71b82c`, 0.05)).to.eql([
      "#71b82c",
      "#f7fbf2",
      "#dee4d6",
      "#c4ceba",
      "#abb79e",
      "#91a182",
      "#788a65",
      "#5e7349",
      "#455d2d",
      "#2b4611"
    ]);
  });

  it("works with new number of results", () => {
    expect(spreadItOut(`#71b82c`, undefined, 6)).to.eql([
      "#71b82c",
      "#eef6e5",
      "#c2d1b2",
      "#96ad7f",
      "#69884b",
      "#3d6318"
    ]);
  });

  it("works with new magnitude and number of results", () => {
    expect(spreadItOut(`#71b82c`, 0.05, 6)).to.eql([
      "#71b82c",
      "#f7fbf2",
      "#c4ceba",
      "#91a182",
      "#5e7349",
      "#2b4611"
    ]);
  });

  it("throws an error with an invalid color value", () => {
    expect(spreadItOut).to.throw(Error);
  });
});
