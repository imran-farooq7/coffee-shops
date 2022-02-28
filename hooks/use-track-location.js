import { useContext } from "react";
import { useState } from "react";
import { ACTION_TYPE, StoreContext } from "../store/storeContext";

const useTrackLocation = () => {
	const {dispatch} = useContext(StoreContext)
	const [locationErrorMsg, setLocationErrorMsg] = useState("");
	// const [latLng, setLatLng] = useState("");
	const [isFindLocation, setIsFindLocation] = useState(false);
	const success = (position) => {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		// setLatLng(`${latitude},${longitude}`);
		dispatch({
			type: ACTION_TYPE.SET_LAT_LNG,
			payload: {
				latLng: `${latitude},${longitude}`,
			},
		});
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
		// latLng,
		handleTrackLocation,
		locationErrorMsg,
		isFindLocation,
	};
};

export default useTrackLocation;
