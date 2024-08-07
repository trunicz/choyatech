import {
  Facebook,
  HandMetal,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16">
      <div className="container flex flex-col sm:flex-row items-center sm:items-start gap-16">
        <section className="h-full w-fit flex flex-col justify-start items-start container py-12">
          <div className="flex items-center gap-4">
            <img
              className="w-12 hidden sm:block"
              src="/choyatechwhite.svg"
              alt="Choya.Tech Logo"
            />
            <h1 className="font-header text-4xl">Choya.Tech</h1>
          </div>
          <h6 className="mt-6 font-bold">Síguenos:</h6>
          <div className="flex gap-2 mt-2">
            <Button
              size="icon"
              variant="ghost"
              className="bg-white/25 p-2 rounded-xl"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="bg-white/25 p-2 rounded-xl"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="bg-white/25 p-2 rounded-xl"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="bg-white/25 p-2 rounded-xl"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="bg-white/25 p-2 rounded-xl"
              aria-label="Contacto"
            >
              <HandMetal size={16} />
            </Button>
          </div>
        </section>
        <section className="flex-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-11">
          <div>
            <h4 className="text-xl font-bold">Acerca de</h4>
            <ul className="mt-12">
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Compañía
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Precios
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold">Casos</h4>
            <ul className="mt-12">
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Educación
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  E-Commerce
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Gestión
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Negocios Locales
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold">Recursos</h4>
            <ul className="mt-12">
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Blog
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Centro de Ayuda
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold">Términos y Condiciones</h4>
            <ul className="mt-12">
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Términos y Condiciones
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Política de Accesibilidad
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Política de Privacidad
                </Button>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="container">
        <p className="container text-white/50">
          Copyright © 2024, ChoyaTech. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
