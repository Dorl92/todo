import React, { Component } from 'react';
import classes from './Summary.module.css';

class Summary extends Component {

    onClickHandler = () => {
        this.props.removeAllCompletedHandler();
    }
    allClickHandle = () => {
        this.props.showAllHandler();
    }
    activeClickHandle = () => {
        this.props.showActiveHandler();
    }
    completedClickHandle = () => {
        this.props.showCompletedHandler();
    }
    generateClassName = () => {

    };

    render() {

        let boxTheme = `${classes.Boxdark}`;
        let buttonTheme = `${classes.Buttondark}`;
        if (this.props.theme === 'light') {
            boxTheme = `${classes.Boxlight}`;
            buttonTheme = `${classes.Buttonlight}`;
        }
        return (
            <div className={boxTheme}>
                <div className={classes.ToDoLeft}>
                    {this.props.toDoCounter} items left
                </div>
                <div className={classes.Buttons}>
                    <button className={buttonTheme} style={{color: this.props.mode === 'all' && "hsl(233, 13%, 61%)"}} onClick={this.allClickHandle}>All</button>
                    <button className={buttonTheme} style={{color: this.props.mode === 'active' && "hsl(233, 13%, 61%)"}} onClick={this.activeClickHandle}>Active</button>
                    <button className={buttonTheme} style={{color: this.props.mode === 'completed' && "hsl(233, 13%, 61%)"}} onClick={this.completedClickHandle}>Completed</button>
                </div>
                <div className={classes.ButtonClear}>
                    <button className={buttonTheme} onClick={this.onClickHandler}>Clear Completed</button>
                </div>
            </div>
        );
    }
}

export default Summary;