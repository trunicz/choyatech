import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="container flex items-center pt-8">
      <div>
        <a
          href="https://choya.tech/"
          className="flex gap-4 items-center"
          aria-label="Choya.Tech Home"
        >
          <span className="font-header text-4xl hover:underline text-purple-500">
            Choya.Tech
          </span>
        </a>
      </div>
      <div className="ms-auto flex items-center">
        <div className="ms-auto hidden sm:flex gap-2">
          <nav>
            <ul className="flex">
              <li>
                <Button asChild className="text-black/60" variant="link">
                  <a href="https://choya.tech/#who-is-for">¿Para quién es?</a>
                </Button>
              </li>
              <li>
                <Button asChild className="text-black/60" variant="link">
                  <a href="https://choya.tech/#blog">Blog</a>
                </Button>
              </li>
              <li>
                <Button asChild className="text-black/60" variant="link">
                  <a href="https://choya.tech/#how-does-it-work">
                    ¿Cómo funciona?
                  </a>
                </Button>
              </li>
              <li>
                <Button asChild className="text-black/60" variant="link">
                  <a href="https://choya.tech/#our-customers">
                    Nuestros Clientes
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ms-auto block sm:hidden">
          <Button size="icon" variant="outline" aria-label="Menu">
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
}
