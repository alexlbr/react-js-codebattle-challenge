import TodoList from '../src/challenges/React-TodoList-part-1.js';
import {ListItem} from '../src/challenges/React-TodoList-part-1.js';
import React from "react";
import expect from "expect";
import expectJSX from "expect-jsx";
import TestUtils from "react-addons-test-utils";

expect.extend(expectJSX);

describe("React Challenge - Create a ToDo List", () => {
  let component;

  describe("Task #1 - display a list of tasks", () => {

    it('The component should start with a ul tag element', () => {
      const renderer = TestUtils.createRenderer();
      component = renderer.render(<TodoList/>);
      const actual = renderer.getRenderOutput().props.children.type;
      const expected = "ul";
      expect(actual).toBe(expected);
    });
    
    it('There should be 2 elements in the list', () => {
      const renderer = TestUtils.createRenderer();
      component = renderer.render(<TodoList/>);
      const actual = renderer.getRenderOutput().props.children.props.children.length;
      const expected = 2;
      expect(actual).toBe(expected);
    });
    
    it('The taks component should pass the task as a parameter to the child component', () => {
      const renderer = TestUtils.createRenderer();
      component = renderer.render(<TodoList/>);
      const actual = renderer.getRenderOutput();
      const expected = "Learn more JavaScript";
      expect(actual).toIncludeJSX(expected);
    });
    
    it('The list item should render the task name', () => {
      const expected = "Learn more JavaScript";
      const renderer = TestUtils.createRenderer();
      component = renderer.render(<ListItem task={{name:expected}}/>);
      const actual = renderer.getRenderOutput();
      expect(actual).toIncludeJSX(expected);
    });
  });
});
