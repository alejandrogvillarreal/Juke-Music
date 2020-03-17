import React from 'react';
import { connect } from 'react-redux'

import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

import { fetchArtists } from '../action-creators/artists';


class FilterableArtistsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtists();
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }

  render() {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter(artist => artist.name.toLowerCase().match(inputValue.toLowerCase()));
    return (
      <div>
        <FilterInput handleChange={this.handleChange} />
        <Artists artists={filteredArtists} />
      </div>
    )
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
    artists: state.artists.list,
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    fetchArtists: () => dispatch(fetchArtists())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterableArtistsContainer);