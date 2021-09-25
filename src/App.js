import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meaningOfLife: 47 + this.props.increment,
    }
    // this.props = props;
  }

  // If there are no props to be used
  // state = {
  //   meaningOfLife: 47
  // }

  handleClick = () => {
    // this.setState({ meaningOfLife: this.state.meaningOfLife + 1 },
    //   () => console.log(this.state.meaningOfLife))
    
    // this.setState((prevState, prevProps) => {
    //   return {meaningOfLife: this.state.meaningOfLife + 1}
    // },
    //   () => console.log(this.state.meaningOfLife)
    // )

    // this.setState((prevState, prevProps) => {
    //   return {meaningOfLife: prevState.meaningOfLife + this.props.increment}
    // },
    //   () => console.log(this.state.meaningOfLife)
    // )

    this.setState((prevState, prevProps) => {
      return {meaningOfLife: prevState.meaningOfLife + prevProps.increment}
    },
      () => console.log(this.state.meaningOfLife)
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.meaningOfLife}
          </p>
          <button
            onClick={this.handleClick}
          >
            Update State
          </button>
        </header>
      </div>
    );
  }
}

export default App;
