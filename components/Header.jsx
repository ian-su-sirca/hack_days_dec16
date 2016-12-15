import React, { PropTypes, Component } from 'react';
import { AppBar, FlatButton, Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator } from 'material-ui'
import IconButton from 'material-ui/IconButton';
import { refresh } from '../actions/progress';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import StartIcon from 'material-ui/svg-icons/av/play-arrow';
import StopIcon from 'material-ui/svg-icons/av/stop';

const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.stopPoll = this.stopPoll.bind(this);
    this.startPoll = this.startPoll.bind(this);
    this.timer = null;
    this.state = {
      polling: false
    };
  }
  componentWillReceiveProps(nextProps) {
      console.log('nextProps', nextProps);
      if (!nextProps.isFetching && this.state.polling) {
          // poll again after a bit
          console.log('polling again after a bit');
          this.timer = setTimeout(() => {
              this.props.onRefresh();
          }, 3000);
      }
  }
  startPoll() {
      this.setState({
          polling: true
      });
      this.props.onRefresh();
  }
  stopPoll() {
      this.setState({
          polling: false
      });
      console.log('stop', this.props);
      clearTimeout(this.timer); // need to toggle some flag
  }
  render() {
    let button = null;
    if (this.state.polling) {
      button = <FlatButton onClick={this.stopPoll} icon={<CircularProgress size={24} thickness={3}/>} label="stop"/>;
    } else {
      button = <FlatButton onClick={this.startPoll} icon={<StartIcon/>} label="start"/>;
    }
    return (
      <header className="header">
          <AppBar title="Long Lived Lambda: Demo"/>
          <Toolbar>
            <ToolbarGroup>
                <ToolbarTitle text="ITCH Files OHLC progress"/> 
                <ToolbarSeparator/>
                {button}
            </ToolbarGroup>
          </Toolbar>
      </header>
    );
  }
}

Header.propTypes = {
  onRefresh: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default Header;
