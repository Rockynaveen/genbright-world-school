import Container from "../shared/container";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navItems = [
  "About Us",
  "Our Approach",
  "Learning Centers",
  "Programs",
  "Admissions",
  "Connect",
];

export default function Header() {
  return (
<header className="fixed inset-x-0 top-0 z-[100] border-b border-sky-blue/10 bg-white/50 backdrop-blur-lg">
<Container>
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <a href="/" className="shrink-0">
            <img
              src="/images/logo.png"
              alt="GenBright"
              className="h-[70px] w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="
                  relative
                  text-[13px]
                  font-semibold
                  text-dark-navy
                  transition-all
                  duration-300
                  hover:text-sky-blue
                  after:absolute
                  after:-bottom-1
                  after:left-0
                  after:h-[2px]
                  after:w-0
                  after:bg-sky-blue
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Button
              className="
                hidden
                h-11
                rounded-full
                bg-deep-teal
                px-6
                text-[13px]
                font-semibold
                text-white
                shadow-md
                transition-all
                duration-300
                hover:bg-dark-navy
                lg:flex
              "
            >
              Book a Tour →
            </Button>

            {/* Mobile Menu */}
            <button
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-deep-teal
                text-white
                lg:hidden
              "
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}