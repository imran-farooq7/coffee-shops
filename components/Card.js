import Link from "next/link";
import Image from "next/image";
const Card = ({ image, title, href }) => {
	return (
		<Link href={href}>
			<a>
				<h2>{title}</h2>
				<Image src={image} alt="coffee" width={260} height={160} />
			</a>
		</Link>
	);
};

export default Card;
