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
        <div id="redBlack" className="button-group toggle" data-toggle="buttons-radio">
          <input
            type="radio"
            id={gallery.id}
            name="r-group"
            onClick={() => showGallery(gallery.id)}
            data-toggle="button"
            key={gallery.id}
          />

          <label
            className="button"
            htmlFor={gallery.id}
          >
            {gallery.name}
          </label>
        </div>

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
