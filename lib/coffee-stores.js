import { createApi } from "unsplash-js";

// on your node server
const unsplashAPI = createApi({
	accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
	//...other fetch options
});
const getListOfPhotos = async () => {
	const photos = await unsplashAPI.search.getPhotos({
		query: " coffee shops",
		perPage: 40,
	});
	const unsplashResults = await photos.response.results;
	return unsplashResults?.map((result) => result.urls["small"]);
};
export const fetchCoffeeStores = async (
	latlng = "31.5204,74.3587",
	limit = 6,
) => {
	const photos = await getListOfPhotos();
	const options = {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_ACCESS_KEY,
		},
	};

	const response = await fetch(
		`https://api.foursquare.com/v3/places/search?query=coffee&ll=${latlng}&radius=10000&limit=${limit}`,
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
