import { useState } from "react";

const useTrackLocation = () => {
	const [locationErrorMsg, setLocationErrorMsg] = useState("");
	const [latLng, setLatLng] = useState("");
	const [isFindLocation, setIsFindLocation] = useState(false);
	const success = (position) => {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		setLatLng(`${latitude},${longitude}`);
		setIsFindLocation(false);
	};
	const error = () => {
		setLocationErrorMsg("unable to retrieve location");
		setIsFindLocation(false);
	};
	const handleTrackLocation = () => {
		setIsFindLocation(true);
		if (!navigator.geolocation) {
			setLocationErrorMsg("Geolocation not available");
			setIsFindLocation(false);
		} else {
			// st.textContent = "locating....";
			navigator.geolocation.getCurrentPosition(success, error);
			setIsFindLocation(false);
		}
	};
	return {
		latLng,
		handleTrackLocation,
		locationErrorMsg,
		isFindLocation,
	};
};

export default useTrackLocation;
