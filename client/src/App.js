import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.images.map(el => {
          return(
            <img src={el.url} />
          )
        })}
      </div>
    );
  }

  componentDidMount() {
    fetch('/api/images')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          images: data
        })
      })
  }
}

export default App;
