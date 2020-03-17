import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import RouteHook from 'react-route-hook'
import store from '../store';

import SidebarContainer from '../containers/SidebarContainer';
import PlayerContainer from '../containers/PlayerContainer';
import AlbumsContainer from '../containers/AlbumsContainer';
import AlbumContainer from '../containers/AlbumContainer';
import FilterableArtistsContainer from '../containers/FilterableArtistsContainer';
import ArtistContainer from '../containers/ArtistContainer';
import NewPlaylistContainer from '../containers/NewPlaylistContainer';
import LyricsContainer from '../containers/LyricsContainer';
import PlaylistContainer from '../containers/PlaylistContainer';
import StationsContainer from '../containers/StationsContainer';
import StationContainer from '../containers/StationContainer'

import { fetchSongs } from '../action-creators/songs';
import { fetchAlbums } from '../action-creators/albums';

export default () => (
  <div id="main" className="container-fluid">
    <SidebarContainer />
    <div className="col-xs-10">
      <Switch>
        <Route exact path="/albums" component={AlbumsContainer} />
        <Route path="/albums/:id" render={({match})=><AlbumContainer match={match}/>} />
        <Route path="/artists" exact component={FilterableArtistsContainer} />
        <Route path="/artists/:id" component={ArtistContainer} />
        <Route path="/playlists/new" component={NewPlaylistContainer} />
        <Route path="/playlists/:id" component={PlaylistContainer} />
        <Route path="/lyrics" component={LyricsContainer} />
        <Route path="/stations" exact onEnter={onStationsEnter} component={StationsContainer} />
        <RouteHook path="/stations/:genreName" onEnter={onStationsEnter} render={({match})=><StationContainer match={match}/> } />
        <Redirect from="/" to="/albums" />
      </Switch>
    </div>
    <PlayerContainer />
  </div>
);

const onStationsEnter = () => {
  store.dispatch(fetchSongs());
}
