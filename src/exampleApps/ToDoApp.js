import React, { Component } from "react";

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

  taskHndler = (e) => {
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
    const tasksDisplay = this.state.tasks.map((task, id) => {
      return (
        <div key={id}>
          <p>{task.todo}</p>
          {/* <button onClick={this.deleteHandler(id)}> delete </button> */}
          {/* 문제: 실행한 값을 리턴해서 오 동작한다. 그래서 함수의 형태로 전달한다.*/}
          <button onClick={() => this.deleteHandler(id)}> delete </button>
        </div>
      );
    });
    //console.log(tasksDisplay);
    return (
      <div className="container">
        <div>
          {/* // task to do input part */}
          {/* <input value="Task To Do"></input> */}

          {/* inline handler로 구현 가능 */}
          {/* <input value={this.state.task} onChange={(e) => this.setState({task:e.target.value})}></input> */}

          {/* 문제: 같은 폼으로 묶여 있지 않어서 ... enter에도 click event X */}
          <form>
            <input
              value={this.state.task}
              onChange={this.changeHandler}
            ></input>
            <button onClick={this.taskHndler}> save </button>
          </form>
        </div>

        {/* task to do display */}
        <div>
          {/* <p>{this.state.tasks[0]['todo']}</p>
                        <button>delete</button>
                        <p>{this.state.tasks[1]['todo']}</p>
                        <button>delete</button>
                        <p>{this.state.tasks[2]['todo']}</p>
                        <button>delete</button>
                        <p>{this.state.tasks[3]['todo']}</p>
                        <button>delete</button>    */}
          {tasksDisplay}
        </div>
      </div>
    );
  }
}

export default ToDoApp;
