import React from "react";

const Contacts = () => {
  return (
    <div
      id="contacts"
      className="px-4 md:px-8 lg:px-20 2xl:px-37.5 py-10 md:py-15 lg:py-20 flex flex-col lg:flex-row justify-between items-center"
    >
      <div className="lg:w-1/2 h-full contact_left rounded-md"></div>
      <div className="w-full lg:w-[50%] p-10">
        <h4 className="text-[#1DC6CB] text-[18px] pb-2">Contacts Us</h4>
        <h2 className="font-medium md:font-semibold lg:font-bold text-[25px] md:text-[30px] lg:text-[40px] leading-6 md:leading-9 lg:leading-12">
          Let's Plan Your Flight
        </h2>
        <p className="text-justify text-[14px] md:text-[16px] text-[#757575] font-normal lg:font-medium">
          Contact our school today for expert guidance program details and
          professional advice to start your journey toward mastering the skies.
        </p>
        <form className="pt-6 flex flex-col gap-5">
          <div className="flex gap-5 justify-between items-center w-full">
            <div className="flex flex-col gap-1 w-full">
              <label>
                First Name <span className="text-[#FEBB76]">*</span>
              </label>
              <input
                className="h-10 md:h-11 lg:h-12 rounded-md px-4 bg-gray-100 focus:outline-none"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label>
                Last Name <span className="text-[#FEBB76]">*</span>
              </label>
              <input
                className="h-10 md:h-11 lg:h-12 rounded-md px-4 bg-gray-100 focus:outline-none"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 w-full">
              <label>
                Phone Number <span className="text-[#FEBB76]">*</span>
              </label>
              <input
                className="h-10 md:h-11 lg:h-12 rounded-md px-4 bg-gray-100 focus:outline-none"
                type="number"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label>
                Email <span className="text-[#FEBB76]">*</span>
              </label>
              <input
                className="h-10 md:h-11 lg:h-12 rounded-md px-4 bg-gray-100 focus:outline-none"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label>
              Message <span className="text-[#FEBB76]">*</span>
            </label>
            <textarea
              className="w-full rounded-md px-4 py-2 bg-gray-100 focus:outline-none"
              rows={5}
              placeholder="Write Your message here..."
            />
          </div>
          <button className="bg-[#1DC6CB] text-[#ffff] hover:bg-[#FEBB76] duration-500 active:scale-1.2 px-6 md:px-8 2xl:px-9 py-2 md:py-3 rounded-md">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
