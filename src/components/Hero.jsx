import image1 from "../assets/images/item-1.jpg";
import image2 from "../assets/images/item-2.jpg";
import image3 from "../assets/images/item-4.jpg";
import image4 from "../assets/images/item-5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const heroSlides = [
  {
    id: 1,
    image: image1,
    title: "Explore the world with ease",
    subtitle:
      "Find the best flights at the best price with our smart search system that compares hundreds of airlines and travel agencies to give you the most affordable and reliable options for your journey.",
  },
  {
    id: 2,
    image: image2,
    title: "Your journey starts here",
    subtitle:
      "Book flights instantly using our fast and secure platform designed to make your travel experience smooth, simple, and stress-free from start to finish.",
  },
  {
    id: 3,
    image: image3,
    title: "Adventure awaits",
    subtitle:
      "Discover flights to your favorite destinations with flexible dates, affordable fares, trusted airlines, and real-time availability to plan your perfect adventure without hassle.",
  },
  {
    id: 4,
    image: image4,
    title: "Adventure awaits",
    subtitle:
      "Plan smarter trips with powerful search tools, real-time price comparisons, exclusive deals, and a seamless booking experience tailored for both local and international travelers.",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full relative h-[30vh] md:h-[55vh] lg:h-[90vh]"
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        effect={"fade"}
        className="h-[30vh] md:h-[55vh] lg:h-[90vh]"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center px-4 md:px-8 lg:px-20 2xl:px-37.5 bg-[#014f52bb]">
                <h2 className="text-[#ffff] font-medium md:font-semibold lg:font-bold text-[25px] md:text-[30px] lg:text-[40px] 2xl:pb-1">
                  {slide.title}
                </h2>
                <p className="text-center text-[14px] md:text-[16px] w-[90%] md:w-[70%] lg:w-[60%] 2xl:w-[50%] line-clamp-2 text-[#e4e2e2] font-normal lg:font-medium">
                  {slide.subtitle}
                </p>
                <a
                  className="bg-[#1DC6CB] text-[#ffff] hover:bg-[#FEBB76] duration-500 active:scale-1.2 px-6 md:px-8 2xl:px-9 py-2 md:py-3 rounded-full mt-3 md:mt-5 lg:mt-6 2xl:mt-7"
                  href="#contacts"
                >
                  Contacts Us
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
