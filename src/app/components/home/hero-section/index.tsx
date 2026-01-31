import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Somraj</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h1>Web Designer & Developer</h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              Crafting modern, responsive, and visually stunning digital
              experiences. I blend creativity with clean, efficient code to
              design websites that not only look great but perform flawlessly
              across devices.
            </p>
            <a
  href="/files/Somraj_Resume.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  className="d-inline-block w-fit"
>
  <button
    type="button"
    className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-black rounded-full group bg-white hover:bg-black transition-colors duration-300"
  >
    <span className="relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300">
      Download CV
    </span>
    <i className="ri-download-fill ml-2 relative z-10 text-black group-hover:text-white transition-colors duration-300"></i>
  </button>
</a>

          </div>
          <Image
            src={getImgPath("/images/home/banner/banner-img.png")}
            alt="banner-img"
            width={685}
            height={650}
            className="block lg:hidden"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src={getImgPath("/images/home/banner/banner-img.png")}
          alt="banner-img"
          width={685}
          height={650}
          className=" absolute right-0 top-0 z-1"
        />
      </div>
    </section>
  );
};

export default index;
