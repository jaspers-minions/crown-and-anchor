import React from 'react';
export class BetInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
  }
  render() {
    return (
      <input type="number" min="0" max="5" value={this.state.value}/>
    )
  }
}
