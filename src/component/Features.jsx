const Features = () => {
  return (
    <section id="#features">
      <div className="container mx-auto px-4 flex flex-col space-y-12 md:space-y-0  md:flex-row mt-10">
        {/* left side */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="font-bold text-4xl  text-center md:text-left max-w-md">
            What's different about Manage?
          </h2>
          <p className="md:text-left text-center text-darkGrayishBlue max-w-sm">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        {/* create a general container div */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-4">
                <div className="rounded-full text-white bg-brightRed px-4 py-2 md:py-1">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Track company-wide progress
                </h3>
              </div>
            </div>

            {/* second div to display h3 text without bg and paragraph but hide h3-text with bg */}
            <div>
              <h3 className="hidden md:block font-bold mb-4 text-lg">
                Track company-wide progress
              </h3>
              <p className="text-darkGrayishBlue">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

          {/* ============= 02 ============== */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-4">
                <div className="rounded-full text-white bg-brightRed px-4 py-2 md:py-1">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            {/* second div to display h3 text without bg and paragraph but hide h3-text with bg */}
            <div>
              <h3 className="hidden md:block font-bold mb-4 text-lg">
                Advanced built-in reports
              </h3>
              <p className="text-darkGrayishBlue">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>

          {/* ============= 03 ============== */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-4">
                <div className="rounded-full text-white bg-brightRed px-4 py-2 md:py-1">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Everything you need in one place
                </h3>
              </div>
            </div>

            {/* second div to display h3 text without bg and paragraph but hide h3-text with bg */}
            <div>
              <h3 className="hidden md:block font-bold mb-4 text-lg">
                Everything you need in one place
              </h3>
              <p className="text-darkGrayishBlue">
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
};

export default Features;
