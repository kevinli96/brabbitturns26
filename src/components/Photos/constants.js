const MAX_PHOTO_NUMBER = 51;

const photoMetadata = {};

export const allPhotos = Array.from(Array(MAX_PHOTO_NUMBER).keys())
  .filter((number) => {
    try {
      require(`../../media/${number}.jpg`);
      return true;
    } catch (err) {
      console.log(`${number}.jpg does not exist`);
      return false;
    }
  })
  .map((number) => {
    return {
      description: photoMetadata[number] && photoMetadata[number].description,
      title: photoMetadata[number] && photoMetadata[number].title,
      src: require(`../../media/${number}.jpg`).default,
    };
  });
