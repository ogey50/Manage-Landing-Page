import React from 'react'

const Hero = () => {
  return (
    <section id="#hero">
      <div className="flex flex-col-reverse justify-center container items-center space-y-0 px-7 md:space-y-0 md:flex-row mx-auto mt-8">
        {/* text and title */}
        <div className="flex flex-col mb-32 space-y-12 md-w-1/2">
          <h2 className="text-4xl font-bold md:text-5xl text-center md:text-left max-w-1/2">
            Bring everyone together to build better products
          </h2>
          <p className="md:text-left text-center text-darkGrayishBlue max-w-sm">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start flex-wrap">
            <button className="md:block baseline hover:bg-brightRedLight py-2 px-5 bg-brightRed rounded-full text-white">
              Get Started
            </button>
          </div>
        </div>
        {/* image div */}
        <div>
          {/* Image goes here */}
          <img src="/illustration-intro.svg" alt="illustration intro" />
        </div>
      </div>
    </section>
  );
}

export default Hero