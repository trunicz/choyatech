import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormData {
  name: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Codifica los valores del formulario para usarlos en la URL de mailto
    const subject = encodeURIComponent(`Consulta de ${formData.name}`);
    const body = encodeURIComponent(
      `Saludos cordiales,\n\nMi nombre es ${
        formData.name
      }, y tengo interés en saber:\n${
        formData.message
      }\n\n------------------------------------------------------\nFolio #${crypto
        .randomUUID()
        .substring(0, 5)}`
    );

    // Crea el enlace mailto
    const mailtoLink = `mailto:contacto@choya.tech?subject=${subject}&body=${body}`;

    // Crea un elemento temporal para el enlace
    const a = document.createElement("a");
    a.href = mailtoLink;

    // Añade temporalmente el enlace al DOM y simula el clic
    document.body.appendChild(a);
    a.click();

    // Elimina el enlace del DOM
    document.body.removeChild(a);
  };

  return (
    <div className=" flex items-center relative overflow-hidden">
      <div className="w-auto absolute -right-80 rotate-45 hidden lg:flex lg:mt-0 ">
        <img src="/miroodles_3.png" alt="Proceso de desarrollo y ejecución" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="container flex flex-col gap-8 my-28"
        id="contacto"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold lg:text-start mx-auto">
          Contacto
        </h2>
        <div className="max-w-[500px] w-full mx-auto">
          <label
            htmlFor="name"
            className="block text-lg text-gray-700 font-bold mb-2"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Escribe tu nombre aquí"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="max-w-[500px] w-full mx-auto">
          <label
            htmlFor="message"
            className="block text-lg text-gray-700 font-bold mb-2"
          >
            Mensaje:
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Escribe tu mensaje aquí"
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-4 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2  focus:ring-blue-500 focus:ring-opacity-50 max-w-[500px] mx-auto"
        >
          Enviar
        </button>
      </form>
      <div className="w-auto absolute -left-60 rotate-45 hidden lg:flex lg:mt-0">
        <img src="/miroodles_4.png" alt="Proceso de desarrollo y ejecución" />
      </div>
    </div>
  );
};

export default ContactForm;
