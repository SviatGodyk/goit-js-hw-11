export const fetchPhotosByQuery = searchQuery => {
  const searchParams = new URLSearchParams({
    key: '48537996-74d498ea386a1fe50c0c053c2',
    q: searchQuery,
  });

  return fetch(
    `https://pixabay.com/api/?${searchParams}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
