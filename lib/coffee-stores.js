export const fetchCoffeeStores = async () => {
	const options = {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: "fsq3iqKtFMafiHS1zjrOqImvhhwRXj/pLvmMMm1rmqRM4OA=",
		},
	};

	const response = await fetch(
		"https://api.foursquare.com/v3/places/search?query=coffee&ll=31.5204%2C74.3587&radius=10000&limit=6",
		options,
	);
	const data = await response.json();
	return data.results.map((venue) => {
		return {
			id: venue.fsq_id,
			name: venue.name,
			address: venue.location.address || "",
		};
	});
};
