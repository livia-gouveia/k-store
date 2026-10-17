import "./CardProduto.css";

function CardProduto(props) {
  return (
    <div className="card-produto">
      <img
        className="card-produto-imagem"
        src={props.imagem}
        alt={props.nome}
      />

      <h3 className="card-produto-nome">{props.nome}</h3>

      <p className="card-produto-preco">
        R$ {props.preco}
      </p>

      <button
        className="card-produto-botao"
        onClick={() => props.adicionarAoCarrinho(props.produto)}>
        Comprar
      </button>
    </div>
  );
}

export default CardProduto;