import React from 'react';
import { connect } from 'react-redux'

import Playlist from '../components/Playlist';
import { fetchPlaylist, addSong } from '../action-creators/playlists';
import { start } from  '../action-creators/player';
import { fetchSongs } from '../action-creators/songs';

class PlaylistContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
    this.props.fetchSongs();
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchPlaylist(this.props.match.params.id);
    }
  }

  render() {
    return (
      <Playlist
        playlist={this.props.playlist}
        start={this.props.start}
        currentSong={this.props.currentSong}
        addSong={this.props.addSong}
        songs={this.props.songs}
      />
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
    playlist: state.playlists.selected,
    currentSong: state.player.currentSong,
    songs: state.songs,
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    start: (song, list) => dispatch(start(song, list)),
    addSong: (song) => dispatch(addSong(song)),
    fetchSongs: () => dispatch(fetchSongs()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistContainer);