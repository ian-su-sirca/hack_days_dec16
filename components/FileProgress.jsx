import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { ListItem, LinearProgress } from 'material-ui';

class FileProgress extends Component {
    render() {
        return (<div>
            {this.props.filename}
            <LinearProgress value={this.props.progress} mode="determinate"/>
        </div>);
    }
}

FileProgress.propTypes = {
    filename: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired
};

export default FileProgress;
