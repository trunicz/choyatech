import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck } from "lucide-react";

const Customers = () => {
  return (
    <section className="bg-blue-600 pb-12" id="our-customers">
      <div className="container text-center py-12">
        <h3 className="text-3xl font-extrabold text-white">Our customers</h3>
        <hr className="w-24 h-2 mx-auto my-2 bg-white border-0 dark:bg-white" />
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-white">
        <div className="flex flex-col ms-auto items-center text-center mx-auto">
          <Avatar className="w-20 h-20">
            <AvatarImage src="https://randomuser.me/api/portraits/men/4.jpg" />
            <AvatarFallback className="text-3xl font-bold bg-gradient-to-tr from-purple-400 to-rose-400">
              LG
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <h4 className="font-bold my-4 text-2xl">E-commerce Fashion</h4>
            <BadgeCheck />
          </div>
          <p>
            Working with ChoyaTech has been a transformative experience for our
            online store.
          </p>
          <span className="font-bold mt-5"> - Laura Gómez</span>
        </div>
        <div className="flex flex-col me-auto items-center text-center mx-auto">
          <Avatar className="w-20 h-20">
            <AvatarImage src="https://randomuser.me/api/portraits/men/7.jpg" />
            <AvatarFallback className="text-3xl font-bold bg-gradient-to-tr from-green-400 to-sky-400">
              MR
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <h4 className="font-bold my-4 text-2xl">HealthTech Solutions</h4>
            <BadgeCheck />
          </div>
          <p>The ChoyaTech team exceeded our expectations in every way.</p>
          <span className="font-bold mt-5"> - Miguel Rodríguez</span>
        </div>
      </div>
    </section>
  );
};

export default Customers;
