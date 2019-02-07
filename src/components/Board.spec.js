import React from "react";
import { shallow } from "enzyme";
import { UnStyledBoard } from "./Board";
import { Hand } from "./Hand";

describe("<Board />", () => {
  it("sets the position for hands as expected", () => {
    const wrapper = shallow(<UnStyledBoard />);
    const hands = wrapper.find(Hand);
    expect(hands).toHaveLength(4);
    expect(hands.at(0).prop("position")).toEqual("bottom");
    expect(hands.at(1).prop("position")).toEqual("right");
    expect(hands.at(2).prop("position")).toEqual("top");
    expect(hands.at(3).prop("position")).toEqual("left");
  });
});
