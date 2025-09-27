import React from 'react'

const CTA = () => {
  return (
    <section id="cta" className="bg-brightRed mt-10">
      {/* General Container Div */}
      <div className="container mx-auto flex flex-col md:flex-row items-center py-16 md:py-12 sm:py-20 md:space-y-0 space-y-12 justify-between">
        {/* Section Text */}
        <h2 className="text-5xl md:text-4xl font-bold leading-tight md:text-left text-center text-white md:max-w-xl">
          Simplify how your team works today.
        </h2>
        {/* div for button since an a tag is used instead of a button*/}
        <div>
          <a
            href="#"
            className="baseline hover:bg-darkGrayishBlue py-2 px-5 bg-white text-brightRed rounded-full"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA