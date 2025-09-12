import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa6';
const testimonials = [
  {
    name: "Anisha Li",
    img: "./avatar-anisha.png",
    text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    name: "Ali Bravo",
    img: "./avatar-ali.png",
    text: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    name: "Richard Watts",
    img: "./avatar-richard.png",
    text: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
];



const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  
  // functions to handle previous and next buttons
  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };
  
  return (
    <section id="#testimonials">
      <div className=" max-w-6xl max-auto px-5 py-10 text-center">
        {/* title */}
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage
        </h2>

        {/* mobile carousel */}
        <div className="relative mt-24 md:hidden">
          {/* detail contains- image, title and text(which is the paragraph) */}

          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray">
            {/* image */}
            <img
              className="w-16 -mt-16"
              src={testimonials[currentIndex].img}
              alt={`testimonials[currentIndex].Avatar`}
            />

            {/* text(which is the paragraph) */}
            <h5 className="text-lg font-bold">
              {testimonials[currentIndex].name}
            </h5>
            <p className="text-sm text-shadow-darkGrayishBlue">
              {testimonials[currentIndex].text}
            </p>
          </div>
          {/* Buttons - Previous and Next Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 left-0 p-2 mb-6 md:hidden"
          >
            <FaAngleLeft className="text-2xl text-brightRed" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 right-0 p-2 md: mb-6 md:hidden"
          >
            <FaAngleRight className="text-2xl text-brightRed" />
          </button>
          {/* indicators */}
          <div className="flex justify-center mt-4 space-x-3">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? "bg-brightRed" : "bg-darkGrayishBlue"
                }`}
              ></span>
            ))}
          </div>
        </div>
        {/* desktop testimonials */}
        {/* desktop view */}
        <div className="hidden md:flex md:space-x-6">
          {testimonials.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
            >
              <img src={item.img} alt={item.name} className="w-16 h-16" />
              <h5 className="text-lg font-bold">{item.name}</h5>
              <p className="text-sm text-darkGrayishBlue">{item.text}</p>
            </div>
          ))}
        </div>
        {/* get started button */}
        <div className="mt-16 w-fit mx-auto">
          <a className="md:block baseline hover:bg-brightRedLight py-2 px-5 bg-brightRed rounded-full text-white">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials