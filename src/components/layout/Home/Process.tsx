const Process = () => {
  return (
    <div className="pb-12" id="how-does-it-work">
      <div className="lg:container text-center py-12">
        <h3 className="text-3xl font-extrabold text-neutral-800">
          How does ChoyaTech work?
        </h3>
        <hr className="w-24 h-2 mx-auto my-2 bg-blue-500 border-0 dark:bg-blue-300" />
      </div>
      <div className="flex flex-col mx-auto md:container gap-6">
        <div className="flex justify-center mx-auto md:container">
          <div className="w-1/2 hidden lg:flex lg:mt-0 justify-center">
            <img src="/miroodles_2.png" alt="no-image" />
          </div>
          <div className="lg:w-1/2 mx-auto container flex flex-col justify-center gap-4">
            <h3 className="text-3xl font-extrabold text-neutral-800">
              Analysis and Planning
            </h3>
            <p className="text-xl lg:w-4/5">
              We start with a detailed consultation to understand your needs and
              objectives. We carry out an exhaustive analysis of your project,
              defining requirements and creating a strategic plan that will
              guide development.
            </p>
          </div>
        </div>
        <div className="flex justify-center mx-auto md:container">
          <div className="lg:w-1/2 mx-auto container flex flex-col justify-center gap-4">
            <h3 className="text-3xl font-extrabold text-neutral-800">
              Development and Execution
            </h3>
            <p className="text-xl lg:w-4/5">
              Our team of experts develops and executes the solution according
              to the established plan. We implement cutting-edge technology to
              ensure the product is efficient and scalable, while maintaining
              constant communication to ensure the project meets your
              expectations.
            </p>
          </div>
          <div className="w-1/2 hidden lg:flex lg:mt-0 justify-center">
            <img src="/miroodles_3.png" alt="no-image" />
          </div>
        </div>
        <div className="flex justify-center mx-auto md:container">
          <div className="w-1/2 hidden lg:flex lg:mt-0 justify-center">
            <img src="/miroodles_4.png" alt="no-image" />
          </div>
          <div className="lg:w-1/2 mx-auto container flex flex-col justify-center gap-4">
            <h3 className="text-3xl font-extrabold text-neutral-800">
              Testing and Launch
            </h3>
            <p className="text-xl lg:w-4/5">
              We conduct extensive testing to ensure product quality and optimal
              performance. Once the tests have been passed, we launch the
              solution to the market. After launch, we offer ongoing support and
              maintenance to ensure long-term success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
