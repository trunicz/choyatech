import { Button } from "@/components/ui/button";
import {
  BookOpen,
  BriefcaseBusiness,
  Building,
  ShoppingBag,
} from "lucide-react";

const Showcase = () => {
  return (
    <main className="bg-gray-100">
      <div className="container text-center py-12" id="who-is-for">
        <h3 className="text-3xl font-extrabold text-neutral-800">
          Who is ChoyaTech for?
        </h3>
        <hr className="w-24 h-2 mx-auto my-2 bg-blue-500 border-0 dark:bg-blue-300" />
      </div>
      <div className="container grid grid-cols-4 gap-12 h-full">
        <div className="flex flex-col items-start justify-between h-full gap-4 w-4/5 sm:w-auto mx-auto md:mx-0 col-span-full md:col-span-2 lg:col-span-1">
          <div className="p-2 rounded-lg bg-blue-500 w-fit text-white">
            <BookOpen />
          </div>
          <h4 className="text-xl font-bold">Education</h4>
          <p className="text-gray-500">
            We create tools to improve educational management and access to
            learning resources.
          </p>
          <Button variant="link" className="px-0">
            Read more
          </Button>
        </div>
        <div className="flex flex-col items-start justify-between h-full gap-4 w-4/5 sm:w-auto mx-auto md:mx-0 col-span-full md:col-span-2 lg:col-span-1">
          <div className="p-2 rounded-lg bg-amber-400 w-fit text-white">
            <ShoppingBag />
          </div>
          <h4 className="text-xl font-bold">E-Commerce</h4>
          <p className="text-gray-500">
            We put your business online and diversify your income with a store
            open 24/7.
          </p>
          <Button variant="link" className="px-0">
            Read more
          </Button>
        </div>
        <div className="flex flex-col items-start justify-between h-full gap-4 w-4/5 sm:w-auto mx-auto md:mx-0 col-span-full md:col-span-2 lg:col-span-1">
          <div className="p-2 rounded-lg bg-purple-500 w-fit text-white">
            <Building />
          </div>
          <h4 className="text-xl font-bold">Management</h4>
          <p className="text-gray-500">
            We manage your organization with administrative software and
            detailed manufacturing and delivery tracking.
          </p>
          <Button variant="link" className="px-0">
            Read more
          </Button>
        </div>
        <div className="flex flex-col items-start justify-between h-full gap-4 w-4/5 sm:w-auto mx-auto md:mx-0 col-span-full md:col-span-2 lg:col-span-1">
          <div className="p-2 rounded-lg bg-rose-500 w-fit text-white">
            <BriefcaseBusiness />
          </div>
          <h4 className="text-xl font-bold">Local Business</h4>
          <p className="text-gray-500">
            We position your brand in the first search results and develop web
            applications for your business.
          </p>
          <Button variant="link" className="px-0">
            Read more
          </Button>
        </div>
      </div>
      <div className="container text-center mt-12 pb-12">
        <Button className="">Contact us Now!</Button>
      </div>
    </main>
  );
};

export default Showcase;
