import { connect } from 'react-redux'
import React, { PureComponent } from 'react'
import Stations from '../components/Stations'
import { fetchSongs } from '../action-creators/songs';

class StationsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchSongs()
    }
}

const convertSongsToStations = function (songsArray) {
    const stations = {};
    songsArray.forEach(song => {
        const genre = song.genre;
        stations[genre] = stations[genre] || [];
        stations[genre].push(song);
    });
    return stations;
}

const mapStateToProps = function (state) {
    return {
        stations: convertSongsToStations(state.songs)
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchSongs: () => dispatch(fetchSongs())
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Stations)

