import React from 'react'

const Features = () => {
  return (
    <section id="#Features">
      <div className="container mx-auto px-4 flex flex-col space-y-12 md:space-y-0  md-w-1/2 space-x-18 md:flex-row mt-10">
        {/* left handside */}
        <div className="flex flex-col space-y-12">
          <h2 className="text-4xl font-bold md:text-5xl text-center md:text-left max-w-1/2 ">
            What's different about Manage?
          </h2>
          <p className="md:text-left text-center text-darkGrayishBlue max-w-sm">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        {/* righthand side*/}
        {/* parent div */}
        <div className="flex flex-col space-y-8">
          {/* create 3 divs that will contain the three features(01,02,03) */}
          {/* div 01 */}
          {/* parent div 01 */}
          <div className="flex flex-col md:flex-row space-y-0 md:space-x-6 ">
            {/* child div of 01 and text*/}
            <div>
              {/* styling of 01 and text */}
              <div className="flex items-center rounded-1-full space-x-4 md:bg-white bg-brightRedSupLight">
                {/* styling of number */}
                <div className="px-4 bg-brightRed rounded-full ">01</div>
                <h2 className="font-bold text-base md:block">
                  Track company-wide progress
                </h2>
              </div>
              <p className="text-darkGrayishBlue md:mt-4">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

          {/* div 02 */}
          {/* parent div 01 */}
          <div className="flex flex-col md:flex-row space-y-0 md:space-x-6">
            {/* child div of 02 and text*/}
            <div>
              {/* styling of 02 and text */}
              <div className="flex items-center rounded-1-full space-x-4 md:bg-white bg-brightRedSupLight">
                {/* styling of number */}
                <div className="px-4 bg-brightRed rounded-full ">02</div>
                <h2 className="font-bold text-base md:block">
                  Advanced built-in reports
                </h2>
              </div>
              <p className="text-darkGrayishBlue md:mt-4">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>

          {/* div 03 */}
          {/* parent div 03 */}
          <div className="flex flex-col md:flex-row space-y-0 md:space-x-6">
            {/* child div of 03 and text*/}
            <div>
              {/* styling of 03 and text */}
              <div className="flex items-center rounded-1-full space-x-4 md:bg-white bg-brightRedSupLight">
                {/* styling of number */}
                <div className="px-4 bg-brightRed rounded-full ">03</div>
                <h2 className="font-bold text-base md:block">
                  Everything you need in one place
                </h2>
              </div>
              <p className="text-darkGrayishBlue md:mt-4">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features