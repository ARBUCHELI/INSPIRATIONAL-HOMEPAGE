const API_URL = `https://api.unsplash.com/search/photos?query=nature&page=1&per_page=5&client_id=cR8m7h0ADMIIfiDjXU-uGGCUZbu5VA_wqv7VR_hM5zM`;

export const getImage = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json.results.map((result) => result.urls.full);
};

const unsplashApi = {
  getImage
};

export default unsplashApi;
