import Banner from "../components/Banner";
import "./Home.css";

function Home() {
  return (
    <div className="pagina-home">
      <Banner />

      <section className="home-sobre">
        <h2>Sobre a K-Store</h2>

        <p>
          A K-Store é uma loja especializada em álbuns oficiais 
          de K-Pop, lightsticks e merchandising de artistas coreanos 
          e leste-asiáticos. Atendemos fãs e colecionadores de todo o Brasil com 
          opções de pronta entrega e encomendas internacionais, com
          todos os fretes e taxas inclusos.
        </p>
      </section>
    </div>
  );
}

export default Home;