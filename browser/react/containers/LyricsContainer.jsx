import React  from 'react';
import { connect } from 'react-redux'

import Lyrics from '../components/Lyrics';
import { fetchLyrics } from '../action-creators/lyrics';

class LyricsContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      artistQuery: '',
      songQuery: ''
    };

    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      this.props.fetchLyrics(this.state.artistQuery, this.state.songQuery);
    }
  }

  render() {
    return <Lyrics
      text={this.props.text}
      setArtist={this.handleArtistInput}
      setSong={this.handleSongInput}
      artistQuery={this.state.artistQuery}
      songQuery={this.state.songQuery}
      handleSubmit={this.handleSubmit}
    />
  }

}

const mapStateToProps = function (state, ownProps) {
  return {
    text : state.lyrics.text
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    fetchLyrics: (artist, song) => dispatch(fetchLyrics(artist, song))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LyricsContainer);