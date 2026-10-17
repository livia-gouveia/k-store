import "./Carrinho.css";

function Carrinho({
  carrinho,aumentarQuantidade,diminuirQuantidade})  {
  return (
    <section className="pagina-carrinho">
      <h2>Meu Carrinho</h2>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="lista-carrinho">
          {carrinho.map((produto, index) => (
            <div className="item-carrinho" key={index}>
              <img src={produto.imagem} alt={produto.nome} />

              <div>
                <div>
                  <h3>{produto.nome}</h3>
                  <p>R$ {produto.preco}</p>

              <div className="quantidade">
                <button
                  onClick={() => diminuirQuantidade(produto.nome)}
                >
                  −
                </button>

                <span>{produto.quantidade}</span>

                <button
                  onClick={() => aumentarQuantidade(produto.nome)}
                >
                  +
                </button>
              </div>
            </div>
                          </div>
                        </div>
                      ))}
                    </div>
      )}
    </section>
  );
}

export default Carrinho;