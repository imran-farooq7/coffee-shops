import Image from "next/image";
import coffee from "../public/coffee.jpg";
const Hero = () => {
	return <Image src={coffee} width={450} height={300}></Image>;
};

export default Hero;
