import React from "react";

// Task: Fill the `return` of `TodoList` class. It should return
//       a list of `ListItem`. You need to display the task name.
//       We already prepared the variable `tasksComponents` inside `render` method containing a list of these items for you.

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [ { name: "Learn more JavaScript" },
               { name: "Learn more testing too!" }
             ]
    };
  }

  render() {
    // Properties are a way to pass parameters to your React components. 
    // Properties are to React components what attributes are to HTML elements.
    //
    // Below you can see how to pass properties to child components.
    // We have defined a `task` property for each `ListItem`.
    let tasksComponents = this.state.tasks.map( task => (
        <ListItem
            task={task}
        />)
    )

    // Hint: Don't forget about putting items into `ul`
    return (
      <div>
        // Put your code here
      </div>
    );
  }
}

// Render tasks name from component's properties.
// Don't you know how?  Search the word: interpolate props react
export const ListItem = props =>(
    <li>
        // Put your code here
    </li>
);

export default TodoList;
