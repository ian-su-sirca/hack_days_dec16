import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainVis from '../components/MainVis';
import { refresh } from '../actions/progress';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Header onRefresh={this.props.onRefresh} isFetching={this.props.progress.isFetching}/>
            <MainVis progress={this.props.progress}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
};

function mapStateToProps(state) {
  return {
    progress: state.progress
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onRefresh: () => {
      dispatch(refresh());
    }
  };
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
