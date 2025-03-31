import logoFB from "../assets/icons/fb-icon.png";
import logoINT from "../assets/icons/int-icon.png";
import logoYOU from "../assets/icons/you-icon.png";

interface ContactProp {
  // Ajustes
  logo: string;
  colorFirstBG: string;
  colorSecondBG: string;
  // Endereço
  cidade: string;
  UF: string;
  bairro: string;
  rua: string;
  number: number;
  complemento: string;
  // Contatos
  email: string;
  phone: number;
  // Links para redes sociais
  facebook: string;
  instagram: string;
  youtube: string;
  // Marca
  suaMarca: string;
}

const Contact = ({
  logo,
  colorFirstBG,
  colorSecondBG,
  cidade,
  UF,
  bairro,
  rua,
  number,
  complemento,
  email,
  phone,
  facebook,
  instagram,
  youtube,
  suaMarca,
}: ContactProp) => {
  return (
    <>
      <footer
        className="flex flex-col pt-10 items-center justify-center"
        style={{ backgroundImage: `linear-gradient(to top, ${colorFirstBG}, ${colorSecondBG})` }}
      >
        <div className="w-screen h-auto flex items-center justify-between gap-10 px-20 py-20 ">
          <div className="w-2/5 h-full flex flex-col items-center justify-start gap-2">
            <img style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))" }} src={logo} alt="logo" />
            <p className="text-2xl text-white/70">
              {cidade} - {UF}
            </p>
            <p className="text-2xl text-white/70">
              {bairro}, {rua} - {number}
            </p>
            <p className="text-2xl text-white/70">{complemento}</p>
            <p className="text-white/40 pt-10">Copyright © Vista tecnologia.</p>
          </div>
          <div className="w-2/5 h-full flex flex-col items-center justify-between gap-10">
            <h1 className="text-4xl" id="contact">
              Contato
            </h1>
            <div className="w-full h-full flex flex-col items-center justify-start gap-5">
              <p className="text-2xl text-white/70">Email: {email}</p>
              <p className="text-2xl text-white/70">Telefone: {phone}</p>
            </div>
            <h1 className="text-4xl">Redes Sociais</h1>
            <div className="w-full h-full flex flex-row items-center justify-center gap-5">
              <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Ir para o canal do Facebook">
                <img src={logoFB} className="w-10 opacity-50 hover:opacity-100" alt="Veja a nossa página no facebook" />
              </a>
              <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Ir para o canal do Instagram">
                <img src={logoINT} className="w-10 opacity-50 hover:opacity-100" alt="Veja a nossa página no instagran" />
              </a>
              <a href={youtube} target="_blank" rel="noopener noreferrer" aria-label="Ir para o canal do YouTube">
                <img src={logoYOU} className="w-10 opacity-50 hover:opacity-100" alt="Veja a nossa página no youtube" />
              </a>
            </div>
          </div>
          <div className="w-2/5 h-full flex flex-col items-center justify-start gap-5">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70   font-medium text-2xl relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[3px] after:bg-blue-400/100 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-70 after:origin-left"
            >
              Link qualquer
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70   font-medium text-2xl relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[3px] after:bg-blue-400/100 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-70 after:origin-left"
            >
              Link qualquer
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70   font-medium text-2xl relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[3px] after:bg-blue-400/100 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-70 after:origin-left"
            >
              Link qualquer
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70   font-medium text-2xl relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[3px] after:bg-blue-400/100 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-70 after:origin-left"
            >
              Link qualquer
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70   font-medium text-2xl relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[3px] after:bg-blue-400/100 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-70 after:origin-left"
            >
              Link qualquer
            </a>
          </div>
        </div>

        <div className="w-screen h-full flex items-center justify-center bg-transparent p-0 m-0" style={{}}>
          <p
            className="w-full text-white/20 text-center font-bold overflow-hidden p-0 m-0"
            style={{ fontSize: "10vw", whiteSpace: "nowrap", textTransform: "uppercase" }}
          >
            {suaMarca}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
