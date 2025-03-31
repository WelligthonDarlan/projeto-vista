interface CardProp {
  cardIMG: string;
  title: string;
  price: number;
}

const CardStore = ({ cardIMG, title, price }: CardProp) => {
  return (
    <div className="max-w-xs w-full bg-white shadow-2xl rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:rounded-4xl">
      <div className="relative">
        <img className="w-full h-56 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" src={cardIMG} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent shadow-md"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 truncate">{title}</h3>
        <p className="text-lg font-medium text-gray-600 mt-2">R${price.toFixed(2)}</p>

        <div className="mt-4 flex justify-center items-center">
          <button className="bg-black/80 text-white py-2 px-6 rounded-sm hover:bg-black/100 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardStore;
