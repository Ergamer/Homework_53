import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTaskForm from './AddTaskForm/AddTaskForm'
import Task from './Task/Task'

class App extends Component {
    state = {
        currentTask: ' ',
        tasks: [
            {task: 'vnsnvjsd', id:'1'},
            {task: 'svnsv', id:'2'},
        ]
    };
    changeTask = (event) => {
        const currentTask = event.target.value;
        this.setState({currentTask});
    };
    addTask = (event) => {
        const addTask = {...this.};
        this.setState({addTask});

    };
  render() {
    return (<div className="Container">
        <AddTaskForm changeTask={this.changeTask}/>
        {this.state.tasks.map((task, face) => {
            return <Task text={task.task} key={task.id} />
        })
        }
    </div>);
  }
}

export default App;
