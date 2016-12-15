import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui';
import FileProgress from './FileProgress';

const defaultStyle = {
  width: 800,
  marginLeft: 20
};

class MainVis extends Component {
  render() {
    const progressBars = [];
    if (!!this.props.progress.data.files) {
        for (let i = 0; i < this.props.progress.data.files.length; i++) {
            const item = this.props.progress.data.files[i];
            const percent = item.seekPosition * 100 / item.size;
            progressBars.push(<FileProgress key={item.name} filename={item.name} progress={percent}/>);
        }
    }

    return (
      <section className="main" style={defaultStyle}>
      <List>
      {progressBars}
      </List>
      </section>
    );
  }
}

MainVis.propTypes = {
  progress: PropTypes.object.isRequired
};

export default MainVis;
