import React, { Component } from 'react';
import classes from './NewToDo.module.css';

class NewToDo extends Component {

    onEnterPress = (event) => {
        if (event.key === 'Enter') {
            let newToDo = event.target.value;
            this.props.handleEnterPressed(newToDo);
            event.target.value = '';
        }
    }
    render() {
        let boxTheme = `${classes.Boxdark}`;
        let checkTheme = `${classes.Checkdark}`;
        let inputTheme = `${classes.Inputdark}`;
        if (this.props.theme === 'light'){
             boxTheme = `${classes.Boxlight}`;
             checkTheme = `${classes.Checklight}`;
             inputTheme = `${classes.Inputlight}`;
        }
        return (
            <div className={boxTheme}>
                <div className={checkTheme}>
                </div>
                <div className={classes.ToDo}>
                    <input
                        className={inputTheme}
                        type="text"
                        placeholder="Create a new todo..."
                        size="50"
                        onKeyPress={this.onEnterPress} />
                </div>
            </div>
        );
    }
}

export default NewToDo;