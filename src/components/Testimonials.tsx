import stars from "../assets/icons/star.png";
import client1 from "../assets/images/clients/client-1.png";
import client2 from "../assets/images/clients/client-2.png";
import client3 from "../assets/images/clients/client-3.png";

const Testmonials = () => {
  return (
    <>
      <div className="w-full h-full bg-white flex flex-row items-center justify-center py-40 gap-0">
        <div className="w-md p-10 bg-white flex flex-col items-center justify-around rounded-xl text-center gap-10 shadow-2xl">
          <p className="text-black text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo rerum vel neque ad accusantium earum quas omnis odio cum.
          </p>
          <img className="w-30 h-auto rounded-xl" src={client1} alt="Foto perfil de cliente" />
          <h2 className="text-black text-xl font-bold">Lorem ipsum dolor</h2>
          <img className="w-1xs h-auto" src={stars} alt="Icone de 5 estrelas"></img>
        </div>
        <div className="w-md p-10 bg-white flex flex-col items-center justify-around rounded-xl text-center gap-10 shadow-2xl scale-110">
          <p className="text-black text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo rerum vel neque ad accusantium earum quas omnis odio cum.
          </p>
          <img className="w-30 h-auto rounded-xl" src={client2} alt="Foto perfil de cliente" />
          <h2 className="text-black text-xl font-bold">Lorem ipsum dolor</h2>
          <img className="w-1xs h-auto" src={stars} alt="Icone de 5 estrelas"></img>
        </div>
        <div className="w-md p-10 bg-white flex flex-col items-center justify-around rounded-xl text-center gap-10 shadow-2xl">
          <p className="text-black text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo rerum vel neque ad accusantium earum quas omnis odio cum.
          </p>
          <img className="w-30 h-auto rounded-xl" src={client3} alt="Foto perfil de cliente" />
          <h2 className="text-black text-xl font-bold">Lorem ipsum dolor</h2>
          <img className="w-1xs h-auto" src={stars} alt="Icone de 5 estrelas"></img>
        </div>
      </div>
    </>
  );
};

export default Testmonials;
