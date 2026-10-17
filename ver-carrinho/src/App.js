import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Produtos from "./pages/Produtos";
import Carrinho from "./pages/Carrinho";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto) {
  const produtoExistente = carrinho.find(
    (item) => item.nome === produto.nome
  );

  if (produtoExistente) {
    setCarrinho(
      carrinho.map((item) =>
        item.nome === produto.nome
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  } else {
    setCarrinho([
      ...carrinho,
      { ...produto, quantidade: 1 }
    ]);
  }

  alert(`${produto.nome} foi adicionado ao carrinho! 🛒`);
}
  function aumentarQuantidade(nome) {
  setCarrinho(
    carrinho.map((item) =>
      item.nome === nome
        ? { ...item, quantidade: item.quantidade + 1 }
        : item
    )
  );
}

function diminuirQuantidade(nome) {
  setCarrinho(
    carrinho
      .map((item) =>
        item.nome === nome
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
      .filter((item) => item.quantidade > 0)
  );
}

const quantidadeCarrinho = carrinho.reduce(
  (total, item) => total + item.quantidade,
  0
);

  return (
    <BrowserRouter>
      <Header quantidadeCarrinho={quantidadeCarrinho} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/produtos" element={<Produtos adicionarAoCarrinho={adicionarAoCarrinho} />} />
          <Route path="/carrinho" element={<Carrinho carrinho={carrinho}aumentarQuantidade={aumentarQuantidade}
          diminuirQuantidade={diminuirQuantidade} />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;