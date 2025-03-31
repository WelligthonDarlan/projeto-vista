// Components
import HomeSection from "../components/HomeSection";
import About from "../components/About";
import ContainerVideo from "../components/ContainerVideo";

// Assets
import video from "../assets/videos/video.mp4";
import homeBG from "../assets/bg-home.jpg";

const Home = () => {
  return (
    <>
      <HomeSection
        mainText="Se aproxime mais de Jesus. Convidamos você a conhecer o nossa igreja, estamos ansiosos para conhecê-lo também!"
        homeBG={homeBG}
        shine={true}
        justify="end"
        fontSize="3xl"
      />
      <About
        title="TITULO QUALQUER"
        bigText="AGRADEÇA"
        description="Somos uma comunidade acolhedora, dedicada a compartilhar o amor de Deus e fortalecer a fé. 
        Nossa missão é transformar vidas por meio da Palavra, oração e comunhão fraterna. Venha nos conhecer!"
      />
      <ContainerVideo
        video={video}
        title="Junte-se a nós em um domingo"
        description="As reuniões de domingo na nossa igreja são um espaço para você e sua família se unirem à comunhão do povo de Deus, enriquecerem-se com os
          ensinamentos das palavras de Deus e viverem suas vozes em alegres cânticos de louvor a Deus. Nós nos reunimos às 9h30 e às 11h30 todos os
          domingos no The Lincoln Theatre, e nossos ministérios familiares se reúnem em um ambiente seguro e divertido a apenas algumas portas dali
          Temos algo para todos os membros da família aos domingos, e esperamos que você se junte a nós em uma das próximas reuniões!"
      />
    </>
  );
};

export default Home;
