import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Descubre & Comparte
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia2 es una herramienta de avisos de IA de código abierto para
        que el mundo moderno descubra, cree y comparta avisos creativos.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
