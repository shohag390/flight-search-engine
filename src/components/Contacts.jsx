import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdPhoneCallback } from "react-icons/md";
import { toast } from "react-toastify";

const contactInfo = [
  {
    icone: <FaLocationDot />,
    title: "Head Office",
    one: "4812 E 30th Ave, Hutchinson,",
    two: "KS 67502, United States",
  },
  {
    icone: <MdEmail />,
    title: "Email Support",
    one: "support@gmail.com",
    two: "hello@gmail.com",
  },
  {
    icone: <MdPhoneCallback />,
    title: "Let's Talk",
    one: "+1 620-662-0581",
    two: "+1 620-694-1905",
  },
];

const Contacts = () => {
  const [state, handleSubmit] = useForm("xojwzala");

  // Toast messages
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!");
    }

    if (state.errors && state.errors.length > 0) {
      toast.error("Failed to send message. Try again!");
    }
  }, [state.succeeded, state.errors]);
  return (
    <div
      id="contacts"
      className="px-4 md:px-8 lg:px-20 2xl:px-37.5 py-10 md:py-15 lg:py-20 w-full"
    >
      <h4 className="text-[#1DC6CB] text-[18px] pb-2 text-center">
        Get In Touch
      </h4>
      <h2 className="font-medium md:font-semibold lg:font-bold text-[25px] md:text-[30px] lg:text-[40px] 2xl:pb-1 leading-6 md:leading-9 lg:leading-12 text-center w-full lg:w-[30%] mx-auto">
        Smart flight search for modern travelers
      </h2>
      <div
        data-aos="fade-up"
        className="pt-4 md:pt-5 lg:pt-6 2xl:pt-7 pb-11 md:pb-12 lg:pb-13 2xl:pb-14 w-full lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {contactInfo?.map((item, index) => (
          <div
            className="border border-gray-100 duration-500 hover:bg-gray-100 flex flex-col items-center justify-center py-4 md:py-5 lg:py-6 2xl:py-7"
            key={index}
          >
            <div className="h-12.5 w-12.5 flex items-center justify-center bg-[#1DC6CB] text-[#ffff] rounded-md text-[20px] ">
              {item?.icone}
            </div>
            <h4 className="font-medium text-[18px] pt-2 ">{item?.title}</h4>
            <p className="text-[14px] md:text-[16px] text-[#757575] font-normal lg:font-medium text-center">
              {item?.one}
            </p>
            <p className="text-[14px] md:text-[16px] text-[#757575] font-normal lg:font-medium text-center">
              {item?.two}
            </p>
          </div>
        ))}
      </div>
      <div
        data-aos="fade-up"
        className="w-full h-75 md:h-100 lg:h-125 overflow-hidden rounded-lg"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d101080.25325180753!2d-97.88829371812179!3d38.112186241295696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x87a4b5b785986645%3A0x84ed5d1edf66970e!2sPrairie%20Dunes%20Country%20Club%2C%204812%20E%2030th%20Ave%2C%20Hutchinson%2C%20KS%2067502%2C%20United%20States!3m2!1d38.0914485!2d-97.847988!5e1!3m2!1sen!2sbd!4v1769829782157!5m2!1sen!2sbd"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 w-full pt-10 md:pt-15 lg:pt-20">
        <div data-aos="fade-up" className="w-full lg:w-[50%]">
          <h4 className="text-[#1DC6CB] text-[18px] pb-2">Send Us A Message</h4>
          <h2 className="font-medium md:font-semibold lg:font-bold text-[25px] md:text-[30px] lg:text-[40px] 2xl:pb-1 leading-6 md:leading-9 lg:leading-12 w-full lg:w-[70%]">
            Smart flight search for modern travelers
          </h2>
          <p className="text-justify text-[14px] md:text-[16px] text-[#757575] font-normal lg:font-medium">
            We help travelers find the best flight options by comparing prices
            from trusted airlines worldwide. Our platform offers real-time
            availability, flexible filters, and transparent pricing—so you can
            book with confidence and focus on your journey, not the search.
          </p>
          <p className="text-justify text-[14px] md:text-[16px] text-[#757575] font-normal lg:font-medium py-2 md:py-3 lg:py-4 2xl:py-5">
            Our flight search engine is designed to simplify travel planning.
            With powerful search tools, live price trends, and advanced
            filtering, we help you compare flight options effortlessly and
            choose the best deal for your next destination.Built with modern
            technology, our flight search engine delivers accurate results, live
            price insights, and advanced filters—helping you make informed
            decisions and travel with confidence.
          </p>
          <p className="text-justify text-[14px] md:text-[16px] text-[#757575] font-normal lg:font-medium pb-4 md:pb-5 lg:pb-6 2xl:pb-7">
            Our platform helps you compare flights from multiple airlines in one
            place. With real-time pricing, flexible search options, and a
            user-friendly experience, booking your next trip becomes faster and
            easier.
          </p>
          <div className="h-0.5 w-full bg-gray-100"></div>
          <div className="flex items-center gap-2 pt-4 md:pt-5 lg:pt-6 2xl:pt-7">
            <div className="h-10 md:h-11 lg:h-12.5 w-10 md:w-11 lg:w-12.5 flex items-center justify-center bg-[#1DC6CB] text-[#ffff] rounded-md text-[20px] hover:bg-[#FEBB76] duration-500">
              <FaFacebookF />
            </div>
            <div className="h-10 md:h-11 lg:h-12.5 w-10 md:w-11 lg:w-12.5 flex items-center justify-center bg-[#1DC6CB] text-[#ffff] rounded-md text-[20px] hover:bg-[#FEBB76] duration-500">
              <FaLinkedinIn />
            </div>
            <div className="h-10 md:h-11 lg:h-12.5 w-10 md:w-11 lg:w-12.5 flex items-center justify-center bg-[#1DC6CB] text-[#ffff] rounded-md text-[20px] hover:bg-[#FEBB76] duration-500">
              <FaWhatsapp />
            </div>
            <div className="h-10 md:h-11 lg:h-12.5 w-10 md:w-11 lg:w-12.5 flex items-center justify-center bg-[#1DC6CB] text-[#ffff] rounded-md text-[20px] hover:bg-[#FEBB76] duration-500">
              <FaInstagram />
            </div>
          </div>
        </div>
        <form
          data-aos="zoom-in"
          onSubmit={handleSubmit}
          className="bg-gray-100 flex flex-col items-center justify-center p-4 md:p-5 lg:p-6 2xl:p-7 w-full lg:w-[50%] rounded-md"
        >
          <div className="w-full flex flex-col gap-5">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label>
                Name <span className="text-[#FEBB76]">*</span>
              </label>
              <input
                name="name"
                required
                className="h-10 md:h-11 lg:h-12 w-full rounded-md px-4 bg-white focus:outline-none"
                placeholder="Enter Your Name"
                type="text"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label>
                Email <span className="text-[#FEBB76]">*</span>
              </label>
              <input
                name="email"
                type="email"
                required
                className="h-10 md:h-11 lg:h-12 w-full rounded-md px-4 bg-white focus:outline-none"
                placeholder="Enter Your Email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label>
                Phone <span className="text-[#FEBB76]">*</span>
              </label>
              <input
                name="phone"
                required
                className="h-10 md:h-11 lg:h-12 w-full rounded-md px-4 bg-white focus:outline-none"
                placeholder="Enter Your Number"
                type="text"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label>
                Message <span className="text-[#FEBB76]">*</span>
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-md p-4 bg-white focus:outline-none"
                placeholder="Message..."
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-[#1DC6CB] text-white hover:bg-[#FEBB76] duration-500 px-9 py-3 rounded-md disabled:opacity-50"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
