export default function normalizePhotos(photos) {
  return Array.from(photos)
    .map(photo => ({
      src: String(photo.url_o),
      srcset: [
        `${photo.url_o} 1024w`,
        `${photo.url_c} 800w`,
        `${photo.url_z} 640w`,
        `${photo.url_o} 500w`,
        `${photo.url_n} 320w`,
      ],
      thumbnail: String(photo.url_o || photo.url_n || photo.url_z),
      thumbnailWidth: Number(photo.width_o || photo.width_n || photo.width_z),
      thumbnailHeight: Number(photo.height_o || photo.height_n || photo.height_z),
    }));
}

// export default function normalizePhotos(photos) {
//   return Array.from(photos)
//     .map(photo => ({
//       src: photo.url_o,
//       srcset: [
//         `${photo.url_o} 1024w`,
//         `${photo.url_c || photo.url_z} 800w`,
//         `${photo.url_o} 500w`,
//         `${photo.url_n} 320w`,
//       ],
//       thumbnail: `${photo.url_n}`,
//       thumbnailWidth: Number(photo.width_n),
//       thumbnailHeight: Number(photo.height_n),
//     }));
// }
// photo.url_o || photo.url_n || photo.url_c || photo.url_z || photo.url_q || photo.url_sq || photo.url_t || photo.url_s || photo.url_m
