import React from 'react';
const TasksDisplay = ({tasks, deleteHandler}) => {
    const tasksDisplay = tasks.map((task, id) => {
        return (
          <div key={id}>
            <p>{task.todo}</p>
            {/* <button onClick={this.deleteHandler(id)}> delete </button> */}
            {/* 문제: 실행한 값을 리턴해서 오 동작한다. 그래서 함수의 형태로 전달한다.*/}
            <button onClick={() => deleteHandler(id)}> delete </button>
          </div>
        );
      })
    return(tasksDisplay)
}

export default TasksDisplay