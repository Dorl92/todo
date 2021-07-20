import { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ToDos from './Components/ToDos/ToDos';

class App extends Component {
  state = {
    darkTheme: true
  }
  changeThemeHandler = () => {
    this.setState({ darkTheme: !this.state.darkTheme })
  }
  render() {
    let themeColor = "App-dark";
    if (!this.state.darkTheme){
      themeColor = "App-light"
    }
    return (
      <div className={themeColor}>
        <Header darkTheme={this.state.darkTheme} />
        <ToDos darkTheme={this.state.darkTheme} changeThemeHandler={this.changeThemeHandler} />
      </div>
    );
  }

}

export default App;
