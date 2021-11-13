import { useRouter } from "next/dist/client/router";
import Link from "next/link";
const CoffeeStore = () => {
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
			<h1>Coffee</h1>
		</div>
	);
};

export default CoffeeStore;
