import { Check, MousePointerClick, Star } from "lucide-react";

const Facts = () => {
  return (
    <section className="bg-amber-400 text-neutral-950 py-12" id="facts">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center my-2">
            <MousePointerClick
              className="mb-4"
              size="48px"
              aria-hidden="true"
            />
            <span className="text-3xl font-extrabold">1k</span>
            <p className="font-normal text-sm mt-2 sm:w-1/2">
              Los clientes reciben +1000 clics cada mes.
            </p>
          </div>
          <div className="flex flex-col items-center my-2">
            <Check className="mb-4" size="48px" aria-hidden="true" />
            <span className="text-3xl font-extrabold">92%</span>
            <p className="font-normal text-sm mt-2 sm:w-1/2">
              Tenemos la mejor tasa de satisfacción de nuestros increíbles
              clientes.
            </p>
          </div>
          <div className="flex flex-col items-center my-2">
            <Star className="mb-4" size="48px" aria-hidden="true" />
            <span className="text-3xl font-extrabold">4.9/5.0</span>
            <p className="font-normal text-sm mt-2 sm:w-1/2">
              Calificación promedio de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
