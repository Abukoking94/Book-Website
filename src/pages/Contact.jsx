import React from "react";
import CallImg from "../images/Call.png";
import MessageImg from "../images/Message.png";
import ScheduleImg from "../images/Schedule.png";

function Contact() {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center min-h-[90vh] bg-cover bg-center px-4">
      <h1 className="text-[40px] sm:text-[60px] lg:text-[77px] text-white font-bold text-center">
        CONTACT US
      </h1>

      <h2 className="text-[20px] sm:text-[24px] lg:text-[30px] text-white font-light text-center mb-8">
        Please feel free to contact us about partnership and Ideas
      </h2>

      <div className="flex flex-col md:flex-row  justify-center items-center gap-6 bg-white/50 p-6 md:p-8 w-full md:w-[90%] lg:w-[80%] rounded-lg shadow-md">
        <div className="w-full md:w-[45%] lg:w-[30%] min-h-[200px] border border-white flex flex-col items-start gap-4 bg-white/50 p-4">
          <img
            src={CallImg}
            alt="Call"
            className="max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] h-auto mt-2 ml-2"
          />
          <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold">
            Call Us
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            velit quo minima,
          </p>
        </div>

        <div className="w-full md:w-[45%] lg:w-[30%] min-h-[200px] border border-white flex flex-col items-start gap-4 bg-white/50 p-4">
          <img
            src={MessageImg}
            alt="Message"
            className="max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] h-auto mt-2 ml-2"
          />
          <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold">
            Text Us
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            velit quo minima,
          </p>
        </div>

        <div className="w-full md:w-[45%] lg:w-[30%] min-h-[200px] border border-white flex flex-col items-start gap-4 bg-white/50 p-4">
          <img
            src={ScheduleImg}
            alt="Schedule"
            className="max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] h-auto mt-2 ml-2"
          />
          <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold">
            Schedule Appointment
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            velit quo minima,
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
