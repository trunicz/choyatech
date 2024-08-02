import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="container flex items-center pt-8">
      <div>
        <a href="/" className="flex gap-4 items-center">
          <h1 className="font-header text-4xl hover:underline text-purple-500">
            Choya.Tech
          </h1>
        </a>
      </div>
      <div className="ms-auto flex items-center">
        <div className="ms-auto hidden sm:flex gap-2">
          <nav>
            <ul className="flex">
              <li>
                <Button asChild className="text-black/60" variant="link">
                  <a href="#who-is-for">Who is for?</a>
                </Button>
              </li>
              <li>
                <Button asChild className="text-black/60" variant="link">
                  <a href="#blog">Blog</a>
                </Button>
              </li>
              <li>
                <Button asChild className="text-black/60" variant="link">
                  <a href="#how-does-it-work">How does it work?</a>
                </Button>
              </li>
              <li>
                <Button asChild className="text-black/60" variant="link">
                  <a href="#our-customers">Our Customers</a>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ms-auto block sm:hidden">
          <Button size="icon" variant="outline">
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
}
