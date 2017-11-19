import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const style = {
    width: '80%',
    margin: 12,
}

class CapacityProgress extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 10,
    };
  }

  render() {
    return (
        <div>
            <div style={style}>140 KB of 1.44 MB used</div>
            <LinearProgress mode="determinate" style={style} value={this.state.completed} />
        </div>
    );
  }
}

export default CapacityProgress;