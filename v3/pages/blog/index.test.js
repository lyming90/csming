import React from "react";
import Blog from "./index";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(React.createElement(Blog)).toJSON();
  expect(tree).toMatchSnapshot();
});
