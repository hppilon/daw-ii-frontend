import styles from "./styles.module.css";
export default function Produto() {
  return (
    <div className={styles.container}>
      <div>
        <img src="https://blog-static.infra.grancursosonline.com.br/wp-content/uploads/2018/12/19110219/LOGO-IFSUL1.jpg" />
      </div>
      <div>
        <span className={styles.titulo}>título</span>
        <span className={styles.descricao}>descricao</span>
        <span className={styles.preco}>preço</span>
        <button>Comprar</button>
      </div>
    </div>
  );
}
