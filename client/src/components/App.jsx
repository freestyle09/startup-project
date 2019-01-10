import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/style.scss';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='container'>
        <i className='fa fa-heart' /> App Component! :)
      </div>
    );
  }
}

export default App;
