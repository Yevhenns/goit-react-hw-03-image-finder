export const helper = array => {
  return array.map(({ id, largeImageURL, pageURL, webformatURL, tags }) => ({
    id,
    largeImageURL,
    pageURL,
    webformatURL,
    tags,
  }));
};
