import image from "../assets/images/about.png";

const About = () => {
  return (
    <div
      id="about"
      className="px-4 md:px-8 lg:px-20 2xl:px-37.5 py-10 md:py-15 lg:py-20 bg-gray-100 flex flex-col lg:flex-row items-center justify-between"
    >
      <div className="w-full lg:w-[50%]">
        <img className="h-full lg:h-125" src={image} alt="image" />
      </div>
      <div className="w-full lg:w-[50%]">
        <h4 className="text-[#1DC6CB] text-[18px] pb-2">
          Explore the world with confidence
        </h4>

        <h2 className="font-medium md:font-semibold lg:font-bold text-[25px] md:text-[30px] lg:text-[40px] 2xl:pb-1 leading-6 md:leading-9 lg:leading-12">
          Smart flight search for modern travelers
        </h2>

        <p className="text-justify text-[14px] md:text-[16px] text-[#757575] font-normal lg:font-medium pt-4 md:pt-5 lg:pt-6 2xl:pt-7">
          We help travelers find the best flight options by comparing prices
          from trusted airlines worldwide. Our platform offers real-time
          availability, flexible filters, and transparent pricing—so you can
          book with confidence and focus on your journey, not the search.
        </p>
        <p className="text-justify text-[14px] md:text-[16px] text-[#757575] font-normal lg:font-medium py-4 md:py-5 lg:py-6 2xl:py-7">
          Our flight search engine is designed to simplify travel planning. With
          powerful search tools, live price trends, and advanced filtering, we
          help you compare flight options effortlessly and choose the best deal
          for your next destination.Built with modern technology, our flight
          search engine delivers accurate results, live price insights, and
          advanced filters—helping you make informed decisions and travel with
          confidence.
        </p>
        <p className="text-justify text-[14px] md:text-[16px] text-[#757575] font-normal lg:font-medium pb-4 md:pb-5 lg:pb-6 2xl:pb-7">
          Our platform helps you compare flights from multiple airlines in one
          place. With real-time pricing, flexible search options, and a
          user-friendly experience, booking your next trip becomes faster and
          easier.
        </p>
        <a
          className="bg-[#1DC6CB] text-[#ffff] hover:bg-[#FEBB76] duration-500 active:scale-1.2 px-6 md:px-8 2xl:px-9 py-2 md:py-3 rounded-md"
          href="#contacts"
        >
          Contacts Us
        </a>
      </div>
    </div>
  );
};

export default About;
