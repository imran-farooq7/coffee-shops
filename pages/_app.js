import { createContext, useReducer } from "react";
import StoreProvider from "../store/storeContext";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
	return (
		<StoreProvider>
			<Component {...pageProps} />
		</StoreProvider>
	);
}

export default MyApp;
