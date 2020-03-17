import React from 'react';
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar';
import { fetchPlaylists } from '../action-creators/playlists';

class SidebarContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    return (
      <Sidebar playlists={this.props.playlists} />
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
    playlists: state.playlists.list,
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
