import React from 'react';
import { connect } from 'react-redux'

import { start } from '../action-creators/player'
import { fetchAlbum, fetchAlbums } from '../action-creators/albums';
import { fetchSongs } from '../action-creators/songs';
import SingleAlbum from '../components/SingleAlbum';

class AlbumContainer extends React.Component {

  componentDidMount() {
    this.props.fetchSongs()
    this.props.fetchAlbums()
    this.props.fetchAlbum(this.props.AlbumId);
  }

  render () {
    return (
      <SingleAlbum 
        currentSong={this.props.currentSong}
        start={this.props.start}
        album={this.props.album} 
      />
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
    album: state.albums.selected,
    currentSong: state.player.currentSong,
    AlbumId : ownProps.match.params.id,
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    start: (song, list) => dispatch(start(song, list)),
    fetchAlbum: (AlbumId) => dispatch(fetchAlbum(AlbumId)),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchAlbums: () => dispatch(fetchAlbums())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumContainer);