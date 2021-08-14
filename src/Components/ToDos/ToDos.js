import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ToDo from './ToDo/ToDo';
import classes from './ToDos.module.css';
import NewToDo from './NewToDo/NewToDo';
import Summary from '../Summary/Summary';
import sunIcon from '../../images/icon-sun.svg';
import moonIcon from '../../images/icon-moon.svg';


class ToDos extends Component {
    state = {
        allToDo: [],
        mode: 'all'
    }
    onEnterPress = (newToDo) => {
        if (newToDo === '') {
            return null;
        } else {
            let toDoList = [...this.state.allToDo];
            toDoList.push({ id: uuidv4(), text: newToDo, isChecked: false });
            this.setState({ allToDo: toDoList })
        }

    }
    removeToDoHandler = (id) => {
        let updatedTodos = this.state.allToDo.filter(todo => todo.id !== id);
        this.setState({ allToDo: updatedTodos })
    }
    removeAllCompletedHandler = () => {
        let toDoList = [...this.state.allToDo];
        let activeToDo = toDoList.filter((toDo) => !toDo.isChecked);
        this.setState({ allToDo: activeToDo })
    }
    isCompletedHandler = (id) => {
        let updatedTodos = this.state.allToDo.map(todo => 
            todo.id === id ? {...todo, isChecked: !todo.isChecked} : todo
            )
        this.setState({allToDo: updatedTodos})
    }

    showAllHandler = () => {
        let allMode = this.state.mode;
        allMode = 'all';
        this.setState({ mode: allMode });
    }
    showActiveHandler = () => {
        let activeMode = this.state.mode;
        activeMode = 'active';
        this.setState({ mode: activeMode });
    }
    showCompletedHandler = () => {
        let completedMode = this.state.mode;
        completedMode = 'completed';
        this.setState({ mode: completedMode });
    }
    changeThemeHandler = () => {
        this.props.changeThemeHandler();
    }
    render() {
        let themeIcon = sunIcon;
        let theme = 'dark';
        if (!this.props.darkTheme) {
            themeIcon = moonIcon;
            theme = 'light';
        }
        let toDosList
        switch (this.state.mode) {
            case 'active':
                toDosList = this.state.allToDo.filter(toDo => !toDo.isChecked);
                break;
            case 'completed':
                toDosList = this.state.allToDo.filter(toDo => toDo.isChecked);
                break;
            default:
                toDosList = this.state.allToDo;
                break;
        }

        return (
            <div>
                <div className={classes.Header}>
                    <h1 className={classes.Title}>
                        TODO
                    </h1>
                    <img className={classes.Icon} src={themeIcon} alt="themeIcon" onClick={this.changeThemeHandler} />
                </div>
                <NewToDo handleEnterPressed={this.onEnterPress} theme={theme} />
                <div className={classes.ToDos}>
                    <TransitionGroup>
                        {toDosList.slice(0).reverse().map(todo => (
                            <CSSTransition key={todo.id} timeout={300} classNames="fade">
                                <ToDo
                                    isChecked={todo.isChecked}
                                    toDoData={todo.text}
                                    id={todo.id}
                                    removeToDoHandler={this.removeToDoHandler}
                                    checkChangeHandler={this.isCompletedHandler}
                                    theme={theme}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
                <Summary
                    toDoCounter={this.state.allToDo.length}
                    mode={this.state.mode}
                    removeAllCompletedHandler={this.removeAllCompletedHandler}
                    showActiveHandler={this.showActiveHandler}
                    showAllHandler={this.showAllHandler}
                    showCompletedHandler={this.showCompletedHandler}
                    theme={theme}
                />
            </div>
        );
    }
}

export default ToDos;