import React, { Component } from 'react';
import classes from './Header.module.css';

class Header extends Component {
    render() {
        let headerImg = `${classes.HeaderDark}`
        if (!this.props.darkTheme) {
            headerImg = `${classes.HeaderLight}`  
        }
        return (
            <div className={headerImg}>
            </div>
        );
    }
}

export default Header;