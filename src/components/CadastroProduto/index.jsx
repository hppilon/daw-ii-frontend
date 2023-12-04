import { useState } from "react";
import styles from "./styles.module.css";
export default function CadastroProduto() {
  const [titulo, setTitulo] = useState("");
  const [tituloFormulario, setTituloFormulario] = useState("Título inicial");

  function handleSubmit(e) {
    e.preventDefault();
    setTituloFormulario(titulo);
    // alert(titulo);
    // const { titulo, descricao, preco } = e.target;
    // console.log(titulo.value, descricao.value, preco.value);
  }

  return (
    <div className={styles.container}>
      <p>{tituloFormulario}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input type="text" name="descricao" placeholder="Descrição" />
        <input type="number" name="preco" placeholder="Preço" />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
