import CardProduto from "../components/CardProduto";
import "./Produtos.css";

function Produtos() {

  const produtos = [
    {
      nome: "BTS - Map of the Soul: 7",
      preco: "259,00",
      imagem: "/imagens/mapofthesoul7.webp"
    },
    {
      nome: "BTS - Skool Luv Affair",
      preco: "219,00",
      imagem: "/imagens/skoolluvaffair.webp"
    },
    {
      nome: "JENNIE - Ruby",
      preco: "289,00",
      imagem: "/imagens/ruby.webp"
    },
    {
      nome: "Dreamcatcher Lightstick",
      preco: "1.005,00",
      imagem: "/imagens/dreamcatcher.webp"
    },
    {
      nome: "BTS - 2 Cool 4 Skool",
      preco: "219,00",
      imagem: "/imagens/2cool4skool.webp"
    },
    {
      nome: "BLACKPINK Lightstick",
      preco: "619,00",
      imagem: "/imagens/martelinho.webp"
    },
    {
      nome: "BLACKPINK - The Album",
      preco: "279,00",
      imagem: "/imagens/THEalbum.webp"
    },
    {
      nome: "aespa - Savage",
      preco: "239,00",
      imagem: "/imagens/aespa.webp"
    },
    {
      nome: "Jimin - FACE",
      preco: "239,00",
      imagem: "/imagens/face.webp"
    },
    {
      nome: "BTS - Wings",
      preco: "229,00",
      imagem: "/imagens/wings.webp"
    },
    {
      nome: "NewJeans - Get Up",
      preco: "294,00",
      imagem: "/imagens/newjeans.webp"
    },
    {
      nome: "Red Velvet - Chill Kill",
      preco: "199,00",
      imagem: "/imagens/cachorras.webp"
    },
    {
      nome: "BTS - Arirang",
      preco: "269,00",
      imagem: "/imagens/arirang.webp"
    },
    {
      nome: "Stray Kids Lightstick",
      preco: "599,00",
      imagem: "/imagens/stray-kids-lightstick.webp"
    },
    {
      nome: "TWICE - Taste of Love",
      preco: "375,00",
      imagem: "/imagens/twice.webp"
    },
    {
      nome: "TWICE Lightstick",
      preco: "569,00",
      imagem: "/imagens/candytwice.webp"
    },
    {
      nome: "BTS - Young Forever",
      preco: "269,00",
      imagem: "/imagens/youngforever.webp"
    }
  ];

  return (
    <section className="pagina-produtos">
      <h2>Álbuns & Lightsticks</h2>

      <div className="lista-produtos">
        {produtos.map((produto, index) => (
          <CardProduto
            key={index}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}
          />
        ))}
      </div>
    </section>
  );
}

export default Produtos;