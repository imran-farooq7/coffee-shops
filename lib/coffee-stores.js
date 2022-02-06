import { createApi } from "unsplash-js";

// on your node server
const unsplashAPI = createApi({
	accessKey: process.env.UNSPLASH_ACCESS_KEY,
	//...other fetch options
});
const getListOfPhotos = async () => {
	const photos = await unsplashAPI.search.getPhotos({
		query: "coffee shops",
		perPage: 10,
	});
	const unsplashResults = photos.response.results;
	return unsplashResults.map((result) => result.urls["small"]);
};
export const fetchCoffeeStores = async () => {
	const photos = await getListOfPhotos();
	const options = {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: process.env.FOURSQUARE_ACCESS_KEY,
		},
	};

	const response = await fetch(
		"https://api.foursquare.com/v3/places/search?query=coffee&ll=31.5204%2C74.3587&radius=10000&limit=6",
		options,
	);
	const data = await response.json();
	return data.results.map((venue, i) => {
		return {
			id: venue.fsq_id,
			name: venue.name,
			address: venue.location.address || "",
			imgUrl: photos[i],
		};
	});
};
