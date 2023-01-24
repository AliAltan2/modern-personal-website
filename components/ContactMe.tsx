import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:Altan.Ali@outlook.com?subject=Personal-Website-Visit&body=Hi, my name is ${formData.name}, I am from ${formData.subject}.  ${formData.message}`;
  };

  return (
    <div
      className="h-screen  relative flex overflow-hidden flex-col md:text-left text-left 
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I am up for the task.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let us talk</span>{" "}
          :3
        </h4>
        <div className="space-y-10">
          {/*NOT ACTUALLY NEEDED HERE*/}
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#800020]/80 h-7 w-7 animate-pulse" />
            <p>+90 535 388 13 99</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#800020]/80 h-7 w-7 animate-pulse" />
            <p>Istanbul, Levent</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#800020]/80 h-7 w-7 animate-pulse" />
            <p>Altan.Ali@outlook.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto "
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Company Name/Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F5704A]/80 py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
