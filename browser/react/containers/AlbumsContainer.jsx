import React from 'react';
import { connect } from 'react-redux'
import Albums from '../components/Albums';
import { fetchAlbums } from '../action-creators/albums';

class AlbumsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchAlbums()
    }

    render(){
        return(
            <Albums albums={this.props.albums}/>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        albums: state.albums.list
    };
}


const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        fetchAlbums: () => dispatch(fetchAlbums())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlbumsContainer)

