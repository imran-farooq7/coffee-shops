import styles from "../styles/Banner.module.css";
const Banner = ({ buttonText, handleOnClick }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<span className={styles.title1}>Coffee</span>
				<span className={styles.title2}>Shops</span>
			</h1>
			<p className={styles.subtitle}>Discover your local coffee shops!</p>
			<div className={styles.cta}>
				<div className={styles.buttonWrapper}>
					<button className={styles.button} onClick={handleOnClick}>
						{buttonText}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
