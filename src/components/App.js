import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList'
import './App.css';
import './AddTask.css'

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "wypić piwo",
        date: "2019-06-15",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "kupić sok",
        date: "2019-06-20",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "kupić ziemniaki",
        date: "2019-06-26",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "kupić arbuza",
        date: "2019-06-30",
        important: false,
        active: true,
        finishDate: null
      }
    ]
  }

  deleteTask = (id) => {
    console.log("usuwam " + id);
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({ tasks })
    console.log(tasks)
  }


  changeTaskStatus = (id) => {
    console.log("zrobione " + id);
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({ tasks })

  }

  render() {
    return (
      <>
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </>
    );
  }
}

export default App;
