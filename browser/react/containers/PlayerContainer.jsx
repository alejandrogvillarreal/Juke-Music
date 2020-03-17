import React from 'react';
import { connect } from 'react-redux'

import Player from '../components/Player';
import { play, pause, next, previous } from '../action-creators/player';

class PlayerContainer extends React.Component {

  render() {
    return (
      <Player
        currentSong={this.props.currentSong}
        isPlaying={this.props.isPlaying}
        play={this.props.play}
        pause={this.props.pause}
        next={this.props.next}
        previous={this.props.previous}
        progress={this.props.progress}
      />
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList,
    isPlaying: state.player.isPlaying,
    progress:state.player.progress,
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    next: () => dispatch(next()),
    previous: () => dispatch(previous())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);