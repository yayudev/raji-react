import React, { PropTypes } from 'react';

import ApplicationContainers from '../containers/application';
import AlbumsContainer from '../containers/albums';


import Header from '../components/Header';
import AlbumList from '../components/AlbumList';


const AlbumListView = ({ albumsState, applicationActions }) => (
  <main className="Content">
    <Header text="Iguchi Yuka" toggleAction={applicationActions.toggleSidemenu} />
    <AlbumList albums={albumsState.albums} />
  </main>
);

AlbumListView.propTypes = {
  albumsState: PropTypes.shape({
    album: PropTypes.array,
  }),
  applicationActions: PropTypes.shape({
    toggleSidemenu: PropTypes.func,
  }),
};


export default ApplicationContainers(AlbumsContainer(AlbumListView));
