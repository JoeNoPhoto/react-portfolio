const activeGallery = (state = null, action) => {
  switch (action.type) {
    case 'SHOW_GALLERY':
      return action.payload.id;

    default:
      return state;
  }
};

export default activeGallery;


/*
 * Selectors
 */
export const getActiveGalleryId = (state) => state;
