import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <main className="container my-20 flex h-[calc(100vh-22rem)]">
      <div className="w-1/2 hidden lg:flex items-center">
        <img src="/miroodles_2.png" alt="no-image" className="" />
      </div>
      <div className="flex-1 flex flex-col items-center lg:items-start justify-center gap-6 md:gap-12">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-center lg:text-start">
          Ready for take your business to the next level?
        </h1>
        <Button variant="default" className="w-fit" size="lg">
          Contact us Today!
        </Button>
      </div>
    </main>
  );
};

export default Hero;
