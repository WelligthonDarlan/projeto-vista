import CardStore from "./CardStore";

interface ContainerStoreProp {
  containerBG: string;
}

const ContaienrStore = ({ containerBG }: ContainerStoreProp) => {
  return (
    <>
      <div
        className="w-full h-full px-30 py-40 bg-white flex flex-col items-center justify-center bg-cover "
        style={{
          backgroundImage: `url(${containerBG})`,
        }}
      >
        <div className="w-full h-full bg-white/20 flex flex-wrap gap-10 justify-center items-center rounded-xl backdrop-blur-xs ">
          <h1 className="text-black/70 text-4xl font-bold pt-20">
            O que <span className="text-blue-700/70">você</span> vai <span className="text-blue-700/70">vestir</span> hoje?
          </h1>
          <div className="w-full h-full px-10 pt-10 pb-20 flex flex-wrap gap-10 justify-center items-center rounded-xl ">
            <CardStore
              cardIMG="https://img.ltwebstatic.com/images3_spmp/2024/06/13/9c/1718215039f8ae25d347132c85b80366f979a9b0f2_thumbnail_405x.webp"
              title="Camiseta Vermelha"
              price={60.0}
            />
            <CardStore cardIMG="https://http2.mlstatic.com/D_NQ_NP_781301-MLB54668520786_032023-O.webp" title="Saia longa" price={40.0} />
            <CardStore cardIMG="https://http2.mlstatic.com/D_NQ_NP_838241-MLB76740035111_052024-O.webp" title="Vestido preto" price={60.0} />
            <CardStore cardIMG="https://m.media-amazon.com/images/I/61UjcArtmGL._AC_SY606_.jpg" title="Vestido Godê Duplo" price={120.0} />
            <CardStore
              cardIMG="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSemupdC3YxpxKbx2oHCHct87zYu8IHE69M6QnAct7oKB3HNRZ1hF-EHWz9lU3SImamGIM2RLubHPAnsICD-6uEIbl_yC87l1ySS-2BT47YD-yyXIVW9qlUjA"
              title="Camiseta Branca"
              price={69.9}
            />
            <CardStore
              cardIMG="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQp1VNDSF4poO0f3_4kcWjK0sTLjHGqrscQ_GX51JudayzWTAQjLUTs27TrfgsFQPGN7v53gH2xEDq0x7f8Z402-LuHvAqEBkwK3SzMiQyayo_1cJviskxT"
              title="Blusa floral"
              price={30.0}
            />
            <CardStore
              cardIMG="https://acdn-us.mitiendanube.com/stores/736/370/products/img_8919baixa1-c7c9b0856ac32d8f1616487770544342-1024-1024.webp"
              title="Saia Preta"
              price={69.0}
            />
            <CardStore
              cardIMG="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRwLj3YH1rZDZcpG1lECIXyUHN1mCagGFaiJ8fk4W4PJvzigLS1TemR6FenL9LQN_U5UEjP0YHYE1KTjcynqpO_l5bIzUYMrowjQLd21HoiGSUsoQ--WF3VIA"
              title="Camisa com Gola Laço Vermelha"
              price={70.0}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContaienrStore;
