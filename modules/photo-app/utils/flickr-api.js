import axios from 'axios';

const ROOT_URL = 'https://api.flickr.com/services/rest/';

export const fetchGallery = (galleryId) =>
  axios.get(ROOT_URL, {
    params: {
      api_key: '762ef5752888e4728101a359a26cc0e9',
      user_id: '16196444@N00',
      format: 'json',
      method: 'flickr.photosets.getPhotos',
      photoset_id: galleryId,
      nojsoncallback: 1,
      extras: 'url_o,url_n,url_c,url_z,url_q,url_sq,url_t,url_s,url_m',
    },
  })
  .then(response => response.data);
