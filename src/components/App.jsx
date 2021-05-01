import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello React'
    }
  }

  render() {
    return(
      <div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}
