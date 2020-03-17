import { connect } from 'react-redux';
import Station from '../components/Station';
import {start} from '../action-creators/player'

const mapStateToProps = function (state, ownProps) {
    return {
        genreName: ownProps.match.params.genreName,
        songs: state.songs
            .filter(song => song.genre === ownProps.match.params.genreName),
        currentSong: state.player.currentSong
    };
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        start : (song, list)=> dispatch(start(song, list))
    };
}

const StationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Station);

export default StationContainer;