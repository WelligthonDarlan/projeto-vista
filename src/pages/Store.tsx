import HomeSection from "../components/HomeSection";
import homeBG from "../assets/images/storie/storieBG.jpg";
import ContaienrStore from "../components/ContainerStore";
import containerBG from "../assets/images/storie/containerBG.jpg";
import Testmonials from "../components/Testimonials";

const Store = () => {
  return (
    <>
      <HomeSection mainText="Moda jovem evangélica" shine={true} homeBG={homeBG} justify="center" fontSize="6xl" />
      <ContaienrStore containerBG={containerBG} />
      <Testmonials />
    </>
  );
};

export default Store;
