export const helper = array => {
  return array.map(({ id, largeImageURL, pageURL, previewURL, tags }) => ({
    id,
    largeImageURL,
    pageURL,
    previewURL,
    tags,
  }));
};
