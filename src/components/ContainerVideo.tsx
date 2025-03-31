interface ContainerVideoProps {
  video: string;
  title: string;
  description: string;
}

const ContainerVideo: React.FC<ContainerVideoProps> = ({ video, title, description }: ContainerVideoProps) => {
  return (
    <div className="relative h-screen w-screen bg-black flex items-center justify-start pl-20">
      <video className="absolute top-0 left-0 w-full h-full object-cover z-20" src={video} autoPlay muted loop />

      <div className="absolute z-40 w-[800px] flex flex-col gap-10 bg-black/30 p-10 backdrop-blur-sm rounded-lg">
        <h1 className="text-7xl text-white">{title}</h1>
        <p className="text-2xl text-white whitespace-pre-line leading-relaxed">&nbsp;&nbsp;{description}</p>
        <a
          href=""
          className="w-50 py-2 px-10 text-xl text-blue-500 bg-white/0 flex item-center justify-center cursor-pointer border-1 border-blue-500 hover:bg-blue-500/100 hover:text-white/100 rounded-xl"
        >
          Veja mais
        </a>
      </div>
    </div>
  );
};

export default ContainerVideo;
