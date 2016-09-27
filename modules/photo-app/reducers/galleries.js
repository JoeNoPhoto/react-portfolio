import normalizePhotos from './../utils/normalize-photos.js';

const initialState = {
  '72157672493623286': { name: 'Music', photos: [] },
  '72157669502145453': { name: 'People', photos: [] },
  '72157669502192183': { name: 'Performers', photos: [] },
  '72157673748915726': { name: 'World', photos: [] },
  '72157673749369546': { name: 'BLK', photos: [] },
  '72157672741096881': { name: 'Design', photos: [] },
};

const galleries = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_GALLERY_DATA_REQUEST': {
      const galleryId = action.payload.id;

      return {                   // return brand new object
        ...state,                // containing all properties of the `state` object
        [galleryId]: {           // but also adding (or overwriting if already exists) property with name held by `galleryId` which points to new object
           ...state[galleryId],  // that contains all properties of the object referenced by the same name in the `state` object
           fetching: true,       // but also adding `fetching` property with value `true`
        }
      };
    }

    case 'LOAD_GALLERY_DATA_SUCCESS': {
      const galleryId = action.payload.id;

      return {
        ...state,
        [galleryId]: {
          ...state[galleryId],
          photos: normalizePhotos(action.payload.data.photo),
          fetching: false,
          lastFetched: Date.now(),
        }
      };
    }

    case 'LOAD_GALLERY_DATA_FAILURE': {
      const galleryId = action.payload.id;

      return {
        ...state,
        [galleryId]: {
          ...state[galleryId],
          fetching: false,
        }
      };
    }

    default:
      return state;
  }
};

export default galleries;


/*
 * Selectors
 */
export const getGallery = (state, id) => state[id] || {};
export const getPhotos = (state, id) => getGallery(state, id).photos;
export const getFetching = (state, id) => getGallery(state, id).fetching;
export const getLastFetched = (state, id) => getGallery(state, id).lastFetched;

// {1: {name: a}, 2: {name: b}} -> [{id: 1, name: a}, {id: 2, name: b}]
export const getGalleries = (state) => Object.keys(state).map(id => ({
  id,
  ...state[id]
}));
