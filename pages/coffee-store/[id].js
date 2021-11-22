import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Stores from "../../stores.json";

export async function getStaticProps({ params }) {
	console.log("params ", params);
	return {
		props: {
			CoffeeStores: Stores.find((store) => {
				return store.id.toString() === params.id;
			}),
		},
	};
}
export async function getStaticPaths() {
	return {
		paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
		fallback: false,
	};
}
const CoffeeStore = (props) => {
	const router = useRouter();
	const query = router.query;
	return (
		<div>
			<Link href="/">
				<a>Back to Home</a>
			</Link>
			<Link href="/coffee-store${query}">
				<a>dynamic</a>
			</Link>
			<h1>{props.CoffeeStores.name}</h1>
		</div>
	);
};

export default CoffeeStore;
