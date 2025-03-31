interface AboutProps {
  title: string;
  bigText: string;
  description: string;
}

const About = ({ title, bigText, description }: AboutProps) => {
  return (
    <>
      <div className="h-screen w-screen bg-cover flex items-center justify-between flex-col">
        <div className="bg-[url('./assets/bg-about.jpg')] absolute h-screen w-screen bg-cover z-10"></div>

        <h1 className="pt-20 pl-20 font-extrabold text-red-50/80 text-6xl w-full text-left z-40 tracking-wide leading-tight" id="sobre">
          {title}
        </h1>

        <h1 className="text-9xl font-extrabold text-white/45 pb-10 float-animation z-20 ">{bigText}</h1>

        <p className="bg-black/25 py-8 mb-20 mx-40 px-10 text-3xl rounded-lg z-40 backdrop-blur-sm leading-relaxed">&nbsp;&nbsp;{description}</p>

        <div className="bg-[url('./assets/bg-about-up.png')] absolute h-screen w-screen bg-cover z-30"></div>
      </div>
    </>
  );
};

export default About;
