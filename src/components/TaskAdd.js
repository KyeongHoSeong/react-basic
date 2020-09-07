import React from 'react';

const TaskAdd = ({value, changeHandler, clickHandler}) => {
    return (
        <div>
          {/* // task to do input part */}
          {/* <input value="Task To Do"></input> */}

          {/* inline handler로 구현 가능 */}
          {/* <input value={this.state.task} onChange={(e) => this.setState({task:e.target.value})}></input> */}

          {/* 문제: 같은 폼으로 묶여 있지 않어서 ... enter에도 click event X */}
          <form>
            <input value={value} onChange={changeHandler} />
            <button onClick={clickHandler}> save </button>
          </form>
        </div>
    )
}

export default TaskAdd