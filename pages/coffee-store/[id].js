import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Stores from "../../stores.json";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Coffe-store.module.css";
import StarsIcon from "@mui/icons-material/Stars";
import PlaceIcon from "@mui/icons-material/Place";
import { fetchCoffeeStores } from "../../lib/coffee-stores";

export async function getStaticProps({ params }) {
	const coffeeStores = await fetchCoffeeStores();
	const findCoffeeStores = coffeeStores.find((store) => {
		return store.id === params.id.toString();
	});
	return {
		props: {
			CoffeeStores: findCoffeeStores ? findCoffeeStores : {},
		},
	};
}
export async function getStaticPaths() {
	const coffeeStores = await fetchCoffeeStores();
	const paths = coffeeStores.map((store) => {
		return {
			params: {
				id: store.id,
			},
		};
	});
	return {
		paths,
		fallback: true,
	};
}
const CoffeeStore = (props) => {
	const router = useRouter();
	const query = router.query;
	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	const handleUpvote = () => {
		console.log("clicked");
	};
	const { address, name, imgUrl } = props.CoffeeStores;
	return (
		<div className={styles.layout}>
			<Head>
				<title>{name}</title>
			</Head>
			<div className={styles.container}>
				<div className={styles.col1}>
					<div className={styles.backToHomeLink}>
						<Link href="/">
							<a>Back to Home</a>
						</Link>
					</div>

					<div className={styles.nameWrapper}>
						<h1 className={styles.name}>{name}</h1>
					</div>
					<Image
						src={
							imgUrl ||
							"https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
						}
						width={600}
						height={360}
						className={styles.storeImg}
					/>
				</div>
				<div className={`glass ${styles.col2}`}>
					<div className={styles.iconWrapper}>
						<PlaceIcon className={styles.icon} />
						<p className={styles.text}>{address}</p>
					</div>

					<div className={styles.iconWrapper}>
						<StarsIcon className={styles.icon} />
						<p className={styles.text}>{1}</p>
					</div>
					<button className={styles.upvoteButton} onClick={handleUpvote}>
						Up vote
					</button>
				</div>
			</div>
		</div>
	);
};

export default CoffeeStore;
