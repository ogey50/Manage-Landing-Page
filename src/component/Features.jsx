import React from 'react'

const Features = () => {
  return (
    <section id="#Features">
      <div className="container mx-auto px-4 flex flex-col space-y-12 md:space-y-0 md:w-1/2 md:flex-row mt-10">
        {/* left handside */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="text-4xl font-bold md:text-5xl text-center md:text-left max-w-1/2">
            What's different about Manage?
          </h2>
          <p className="md:text-left text-center text-darkGrayishBlue max-w-sm">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        {/* right side */}
        <div>What's different about Manage?</div>
      </div>
    </section>
  );
}

export default Features