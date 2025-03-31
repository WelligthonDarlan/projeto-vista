import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";
import Contact from "./Contact";

const Layout = () => {
  return (
    <>
      <Navbar logo={logo} />
      <main>
        <Outlet />
      </main>
      <Contact
        // Ajustes
        logo={logo}
        colorFirstBG="#131313"
        colorSecondBG="#232323"
        // Endereço
        cidade="Florianópolis"
        UF="SC"
        bairro="Bairro qualquer"
        rua="rua qualquer"
        number={1000}
        complemento=""
        // Contato
        email="contato@gmail.com"
        phone={48988888888}
        facebook="https://www.facebook.com/"
        instagram="https://www.instagram.com/"
        youtube="https://www.youtube.com/"
        // Marca
        suaMarca="vistatecnologia"
      />
    </>
  );
};

export default Layout;
