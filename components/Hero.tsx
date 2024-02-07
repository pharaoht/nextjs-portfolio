import Image from "next/image";
import ParticlesBackground from "./ParticlesBackground";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub, FaDev, FaYoutube } from "react-icons/fa";
import Link from "next/link"

const Hero = () => {
  
  return (
    <header id="home" className="relative h-fit py-10">
      <ParticlesBackground />
      <div className="relative flex justify-between max-w-[1400px] mx-auto items-center h-full w-[91%] max-md:flex-col">
        <div className="flex flex-col justify-center text-white flex-1 max-md:order-2 max-md:text-center">
          <h2 className="font-bold md:text-4xl text-3xl mb-2">
            Hi I&#39;m Pharaoh a Full Stack
          </h2>
          <h1 className="xl:text-9xl lg:text-8xl md:text-7xl text-6xl text-yellow-500 font-bold mb-5">
            Developer
          </h1>
          <span className="md:w-4/4 mb-5">
            Experience problem solver with a drive for technology and a growth mindset to learn more technologies. My individual
            character includes a passion for empowering people, with ethical values of diversion and inclusion, I believe different
            perspectives help us all to achieve our potential. {" "}
            <Link href={"#contact"}>
              <span className="text-yellow-500 underline text-sm">
                Contact Me &#8594;
              </span>
            </Link>
          </span>

          <div className="flex gap-5 text-yellow-500 text-2xl max-md:justify-center">
            <FaSquareXTwitter />
            <FaGithub />
            <FaDev />
            <FaYoutube />
          </div>
        </div>

        <div className="flex flex-1 justify-end max-md:order-1 max-md:mb-3 relative">
          <Image
            src={"/shape.png"}
            width={450}
            height={450}
            role="img"
            aria-label="Shape Image"
            alt="Shape Image"
            className="md:justify-self-end max-md:w-96"
          />
          <Image 
            src={'/pharaoh.png'}
            width={450}
            height={450}
            role="img"
            aria-label="Pharaoh Image"
            alt="Pharaoh Image"
            className="md:justify-self-end max-md:w-96 absolute z-10"
            style={{ borderBottomRightRadius: '42%' }}
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;