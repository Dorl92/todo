import React, { Component } from 'react';
import classes from './ToDo.module.css';
import Vicon from '../../../images/icon-check.svg';

class ToDo extends Component {
    checkToDoHandle = () => {
        this.props.checkChangeHandler(this.props.id)
    }

    onCrossClickHandler = () => {
        this.props.removeToDoHandler(this.props.id);
    } 

    render() {
        let boxTheme = `${classes.Boxdark}`;
        if (this.props.theme === 'light'){
             boxTheme = `${classes.Boxlight}`;
        }
        let checkCircle = `${classes.Check}`;
        let toDo = `${classes.ToDo}`;
        if (this.props.isChecked) {
            checkCircle = `${classes.isChecked}`;
            toDo = `${classes.ToDo} ${classes.ToDoLine}`;
        }
        return (
            <div className={boxTheme}>
                <div className={checkCircle} onClick={this.checkToDoHandle}>
                    {this.props.isChecked ? <img src={Vicon} className={classes.Vicon} alt="Vicon" /> : null}
                </div>
                <div className={toDo}>
                    {this.props.toDoData}
                </div>
                <div className={classes.Cross} onClick={this.onCrossClickHandler}>
                    &#10005;
                </div>
            </div>
        );
    }
}

export default ToDo;