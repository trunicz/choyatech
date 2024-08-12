import { Button } from "@/components/ui/button";
import {
  BookOpen,
  BriefcaseBusiness,
  Building,
  ShoppingBag,
} from "lucide-react";

const Showcase = () => {
  return (
    <main className="bg-gray-100" id="who-is-for">
      <div className="container text-center py-12">
        <h3 className="text-3xl font-extrabold text-neutral-800">
          ¿Que Hacemos en Choya Tech?
        </h3>
        <hr className="w-24 h-2 mx-auto my-2 bg-blue-500 border-0 dark:bg-blue-300" />
      </div>
      <div className="container grid grid-cols-4 gap-12 h-full">
        <div className="flex flex-col items-start justify-between h-full gap-4 w-4/5 sm:w-auto mx-auto md:mx-0 col-span-full md:col-span-2 lg:col-span-1">
          <div className="p-2 rounded-lg bg-blue-500 w-fit text-white">
            <BookOpen />
          </div>
          <h4 className="text-xl font-bold">Educación</h4>
          <p className="text-gray-500">
            Creamos herramientas para mejorar la gestión educativa y el acceso a
            recursos de aprendizaje.
          </p>
          <Button variant="link" className="px-0">
            Leer más
          </Button>
        </div>
        <div className="flex flex-col items-start justify-between h-full gap-4 w-4/5 sm:w-auto mx-auto md:mx-0 col-span-full md:col-span-2 lg:col-span-1">
          <div className="p-2 rounded-lg bg-amber-400 w-fit text-white">
            <ShoppingBag />
          </div>
          <h4 className="text-xl font-bold">E-Commerce</h4>
          <p className="text-gray-500">
            Diseño de páginas web, ponemos tu negocio en línea y diversificamos
            tus ingresos con una tienda abierta 24/7.
          </p>
          <Button variant="link" className="px-0">
            Leer más
          </Button>
        </div>
        <div className="flex flex-col items-start justify-between h-full gap-4 w-4/5 sm:w-auto mx-auto md:mx-0 col-span-full md:col-span-2 lg:col-span-1">
          <div className="p-2 rounded-lg bg-purple-500 w-fit text-white">
            <Building />
          </div>
          <h4 className="text-xl font-bold">Gestión</h4>
          <p className="text-gray-500">
            Gestionamos tu organización con software administrativo y un
            seguimiento detallado de la fabricación y entrega.
          </p>
          <Button variant="link" className="px-0">
            Leer más
          </Button>
        </div>
        <div className="flex flex-col items-start justify-between h-full gap-4 w-4/5 sm:w-auto mx-auto md:mx-0 col-span-full md:col-span-2 lg:col-span-1">
          <div className="p-2 rounded-lg bg-rose-500 w-fit text-white">
            <BriefcaseBusiness />
          </div>
          <h4 className="text-xl font-bold">Negocios Locales</h4>
          <p className="text-gray-500">
            Desarrollo de páginas web y posicionamiento tu marca en los primeros
            resultados de búsqueda y desarrollamos aplicaciones web para tu
            negocio.
          </p>
          <Button variant="link" className="px-0">
            Leer más
          </Button>
        </div>
      </div>
      <div className="container text-center mt-12 pb-12">
        <Button className="">¡Contáctanos Ahora!</Button>
      </div>
    </main>
  );
};

export default Showcase;
