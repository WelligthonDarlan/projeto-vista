import { useState, useEffect } from "react";

interface LogoProp {
  logo: string;
}

const Navbar = ({ logo }: LogoProp) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-screen h-60px z-50 flex items-center justify-between px-30 py-2 border-0 transition-all duration-400 ease-in-out  ${
          scrolling ? "bg-black/30 shadow-lg backdrop-blur-xs" : "bg-transparent"
        }`}
      >
        <a href="">
          <img src={logo} alt="logo" className="w-30" style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))" }} />
        </a>
        <div className="border-0 flex items-center justify-between gap-10">
          <a
            href="/home"
            className="text-white font-medium text-xl relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[3px] after:bg-blue-400/100 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-70 after:origin-left"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Inicio
          </a>
          <a
            href="#sobre"
            className="text-white font-medium text-xl relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[3px] after:bg-blue-400/100 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-70 after:origin-left"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Sobre
          </a>
          <a
            href="#contact"
            className="text-white font-medium text-xl relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[3px] after:bg-blue-400/100 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-70 after:origin-left"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Contato
          </a>
          <a
            href="/store"
            className="text-white font-medium text-xl relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[3px] after:bg-blue-400/100 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-70 after:origin-left"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Loja
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
