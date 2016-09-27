import { combineReducers } from 'redux';
import activeGallery, * as fromActiveGallery from './active-gallery.js';
import galleries, * as fromGalleries from './galleries.js';


export default combineReducers({
  activeGallery,
  galleries,
});

/*
 * Selectors
*/
export const getActiveGalleryId = (state) => fromActiveGallery.getActiveGalleryId(state.activeGallery);
export const getGalleries = (state) => fromGalleries.getGalleries(state.galleries);
export const getGallery = (state, id) => fromGalleries.getGallery(state.galleries, id);
export const getPhotos = (state, id) => fromGalleries.getPhotos(state.galleries, id);
export const getFetching = (state, id) => fromGalleries.getFetching(state.galleries, id);
export const getLastFetched = (state, id) => fromGalleries.getLastFetched(state.galleries, id);
