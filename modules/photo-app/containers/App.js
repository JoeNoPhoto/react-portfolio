import React from 'react';
import { connect } from 'react-redux';
import Gallery from 'react-grid-gallery';
import { showGallery, loadGalleryData } from './../actions/index.js';
import {
  getGalleries, getActiveGalleryId,
  getFetching, getPhotos,
} from './../reducers/index.js';

const App = ({
  galleries,
  activeGalleryId,
  activeGalleryFetching,
  activeGalleryPhotos,
  showGallery,
}) => (
  <div>
    {
      galleries.map(gallery => (
        <button onClick={() => showGallery(gallery.id)} key={gallery.id}>
          {gallery.name}
        </button>
      ))
    }

    {!activeGalleryId &&
      <div>Click one of the buttons!</div>
    }

    {activeGalleryFetching &&
      <div>Loading {activeGalleryId}...</div>
    }

    {activeGalleryPhotos &&
      <Gallery
        images={activeGalleryPhotos}
        enableImageSelection={false}
      />
    }
  </div>
);

export default connect(
  (state) => ({
    galleries: getGalleries(state),
    activeGalleryId: getActiveGalleryId(state),
    activeGalleryFetching: getFetching(state, getActiveGalleryId(state)),
    activeGalleryPhotos: getPhotos(state, getActiveGalleryId(state)),
  }),
  (dispatch) => ({
    showGallery: (id) => {
      dispatch(loadGalleryData(id));
      dispatch(showGallery(id));
    },
  })
)(App);
