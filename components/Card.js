import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Card.module.css";
const Card = ({ image, title, href }) => {
	return (
		<Link href={href}>
			<a className={styles.cardLink}>
				<div className={`styles.container + glass`}>
					<div className={styles.cardHeaderWrapper}>
						<h2 className={styles.cardHeader}>{title}</h2>
					</div>
					<div className={styles.cardImageWrapper}>
						<Image
							className={styles.cardImage}
							src={image}
							alt="coffee"
							width={260}
							height={160}
							objectFit="cover"
						/>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default Card;
