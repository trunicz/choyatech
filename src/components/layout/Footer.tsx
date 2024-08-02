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
              alt="noicon"
            />
            <h1 className="font-header text-4xl">Choya.Tech</h1>
          </div>
          <h6 className="mt-6 font-bold">Follow us:</h6>
          <div className="flex gap-2 mt-2">
            <Button
              size="icon"
              variant="ghost"
              className="bg-white/25 p-2 rounded-xl"
            >
              <Linkedin size={16} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="bg-white/25 p-2 rounded-xl"
            >
              <Facebook size={16} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="bg-white/25 p-2 rounded-xl"
            >
              <Instagram size={16} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="bg-white/25 p-2 rounded-xl"
            >
              <Twitter size={16} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="bg-white/25 p-2 rounded-xl"
            >
              <HandMetal size={16} />
            </Button>
          </div>
        </section>
        <section className="flex-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 py-11">
          <div>
            <h4 className="text-xl font-bold">About</h4>
            <ul className="mt-12">
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Company
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Leadership
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Jobs - HIRING!
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Pricing
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Press
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Investors
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold">Cases</h4>
            <ul className="mt-12">
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Education
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  E-Commerce
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Management
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Local Business
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold">Resources</h4>
            <ul className="mt-12">
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Blog
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Help Center
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Library
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold">Terms and conditions</h4>
            <ul className="mt-12">
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Terms and Conditions
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Accessibility policy
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  US Privacy Laws
                </Button>
              </li>
              <li>
                <Button variant="link" className="px-0 text-white/65 text-md">
                  Privacy Policy
                </Button>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="container">
        <p className="container text-white/50">
          Copyright © 2024, ChoyaTech All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
