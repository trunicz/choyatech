import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="bg-neutral-100 w-full">
      <main className="container flex items-center py-12">
        <div className="mx-auto md:2/3 lg:w-1/2">
          <h3 className="text-4xl font-bold">
            Estamos aquí para resolver tus dudas.
          </h3>
          <p className="mb-8">
            Respondemos a las preguntas más frecuentes sobre el desarrollo y
            mantenimiento de sitios para que tengas toda la información que
            necesitas.
          </p>
          <Accordion
            className="rounded-xl overflow-hidden"
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                ¿Por qué elegirnos para impulsar tu negocio en línea?
              </AccordionTrigger>
              <AccordionContent>
                Porque no solo creamos plataformas digitales, diseñamos
                estrategias que impulsan tu crecimiento. Nuestro enfoque combina
                tecnología de vanguardia con tácticas de marketing efectivas,
                asegurando que tu negocio no solo esté en línea, sino que
                destaque y crezca.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                ¿En qué se diferencian nuestras soluciones de otras opciones en
                el mercado?
              </AccordionTrigger>
              <AccordionContent>
                Porque no solo creamos plataformas digitales, diseñamos
                estrategias que impulsan tu crecimiento. Nuestro enfoque combina
                tecnología de vanguardia con tácticas de marketing efectivas,
                asegurando que tu negocio no solo esté en línea, sino que
                destaque y crezca.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="hidden lg:flex lg:mt-0 justify-center">
          <img src="/miroodles_3.png" alt="Proceso de desarrollo y ejecución" />
        </div>
      </main>
    </section>
  );
};

export default Faq;
