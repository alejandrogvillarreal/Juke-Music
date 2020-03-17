import React from 'react';
import { connect } from 'react-redux'

import { fetchArtist } from '../action-creators/artists';
import { start } from '../action-creators/player';

import Artist from '../components/Artist';

class ArtistContainer extends React.Component {

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.id);
  }

  start(song, list) {
    store.dispatch(start(song, list))
  }

  render () {
    return (
      <Artist
        url={this.props.match.url}
        path={this.props.match.path}
        artist={this.props.artist}
        start={this.props.start}
        currentSong={this.props.currentSong}
      />
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
    artist: state.artists.selected,
    currentSong: state.player.currentSong
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    start: (song, list) => dispatch(start(song, list)),
    fetchArtist: (ArtistId) => dispatch(fetchArtist(ArtistId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistContainer);