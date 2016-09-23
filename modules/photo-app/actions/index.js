import { fetchGallery } from './../utils/flickr-api.js';
import { getGalleries, getFetching, getLastFetched } from './../reducers/index.js';

export const loadGalleryData = (id) => (dispatch, getState) => {
  if (getFetching(getState(), id)) return;

  const secondsFromLastFetch = (Date.now() - getLastFetched(getState(), id)) / 1000;
  if (secondsFromLastFetch < 300) return;

  dispatch({
    type: 'LOAD_GALLERY_DATA_REQUEST',
    payload: { id },
  });

  fetchGallery(id)
    .then(
      data => {
        if (data.photoset) {
          dispatch({
            type: 'LOAD_GALLERY_DATA_SUCCESS',
            payload: { id, data: data.photoset },
          });
        } else {
          dispatch({
            type: 'LOAD_GALLERY_DATA_FAILURE',
            payload: { id, error: 'API error', more: data },
          });
        }
      },
      error => dispatch({
        type: 'LOAD_GALLERY_DATA_FAILURE',
        payload: { id, error: 'Network error', more: error },
      })
    );
};

export const showGallery = (id) => ({
  type: 'SHOW_GALLERY',
  payload: { id },
});

export const preload = () => (dispatch, getState) => {
  const galleries = getGalleries(getState());

  galleries.forEach(gallery =>
    dispatch(loadGalleryData(gallery.id))
  );
};
