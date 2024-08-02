import { CheckCheck, MousePointerClick, Star } from "lucide-react";

const Facts = () => {
  return (
    <section className="bg-amber-400 text-neutral-950 flex items-center justify-center gap-6 py-12">
      <div className="col-start-3 text-4xl font-extrabold text-center">
        <MousePointerClick className="mx-auto mb-4" size="48px" />
        <span>10k</span>
        <p className="font-normal text-sm w-2/3 mx-auto">
          Customers receive +10k clicks every month.
        </p>
      </div>
      <div className="text-4xl font-extrabold text-center">
        <CheckCheck className="mx-auto mb-4" size="48px" />
        <p>92%</p>
        <p className="font-normal text-sm w-2/3 mx-auto">
          We have the best satisfaction rate from our amazing customers.
        </p>
      </div>
      <div className="text-4xl font-extrabold text-center">
        <Star className="mx-auto mb-4" size="48px" />
        <span>4.9/5.0</span>
        <p className="font-normal text-sm w-2/3 mx-auto">
          Average customer ratings we have got all over internet.
        </p>
      </div>
    </section>
  );
};

export default Facts;
