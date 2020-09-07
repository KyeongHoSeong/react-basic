import React, { Component } from "react";
import TaskAdd from '../components/TaskAdd';
import TasksDisplay from '../components/TaskDisplay';

export class ToDoApp extends Component {
  state = {
    tasks: [
      { todo: "Task To Do 1" },
      { todo: "Task To Do 2" },
      { todo: "Task To Do 3" },
      { todo: "Task To Do 4" },
    ],
    task: "",
  };

  clickHandler = (e) => {
      //html reflesh문제
    e.preventDefault();
    console.log(e.target);
    // 문제:
    // target이 button으로 설정되어 있다.
    // input이 받아들여지지 않는다.==>state에 task 저장 공간 마련: task
    // onChange 이벤트로 값을 반영하여 설정

    //ToDo: 저장 버턴 클릭하면 task를 Tasklist에 붙이기
    const task = { todo: this.state.task };
    //const nextStatate = [...this.state.tasks, task]
    const tasks = [...this.state.tasks, task]
    this.setState({
      //tasks:[task],
      //tasks: nextStatate,
      tasks,
      task: '',
    });
  };

  changeHandler = (e) => {
    console.log(e.target);
    // 문제: <input value>
    console.log(e.target.value);
    // 문제: key값을 input에 반영
    // 2 way binding 
    this.setState({
      task: e.target.value,
    });
  };

  deleteHandler = (idx) => {
      const tasks = this.state.tasks.filter((task, i)=> i!==idx)
      this.setState({
          //tasks: tasks
          tasks
        })
  }

  render() {
    // const tasksDisplay = 
    //console.log(tasksDisplay);
    return (
      <div className="container">
        <TaskAdd 
            value={this.state.task} 
            changeHandler={this.changeHandler}
            clickHandler={this.clickHandler}
        />
        <div>
         {/* task to do display */}
          {/* <p>{this.state.tasks[0]['todo']}</p>
                        <button>delete</button>
                        <p>{this.state.tasks[1]['todo']}</p>
                        <button>delete</button>
                        <p>{this.state.tasks[2]['todo']}</p>
                        <button>delete</button>
                        <p>{this.state.tasks[3]['todo']}</p>
                        <button>delete</button>    */}
          {/* {tasksDisplay} */}
          <TasksDisplay 
            tasks={this.state.tasks}
            deleteHandler={this.deleteHandler}
          />
        </div>
      </div>
    );
  }
}

export default ToDoApp;
