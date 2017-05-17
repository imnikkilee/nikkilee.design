import React, {Component} from 'react';

// Styles
import './styles/App.scss';

class App extends Component {
  render() {

    return (
      <div id='app'>
        {this.props.children}
      </div>
    )
  }
}

export default App;
