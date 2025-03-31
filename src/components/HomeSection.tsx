import { useState, useEffect } from "react";

interface HomeProps {
  mainText: string;
  homeBG: string;
  shine: boolean;
  justify: string;
  fontSize: string;
}

const HomeSection = ({ mainText, homeBG, shine, justify, fontSize }: HomeProps) => {
  const [shineBG, setShineBG] = useState(shine ? "brilhar-animation" : "");

  useEffect(() => {
    setShineBG(shine ? "brilhar-animation" : "");
  }, [shine]);

  return (
    <>
      <div
        id="home"
        className={`bg-fixed h-screen w-screen bg-cover flex items-center justify-${justify} ${shineBG} px-20`}
        style={{
          backgroundImage: `url(${homeBG})`,
        }}
      >
        <p className={`text-${fontSize} font-bold absolute z-2 text-red-50/75 max-w-200 comesRight-animation`}>&nbsp;&nbsp;{mainText}</p>
      </div>
    </>
  );
};

export default HomeSection;
