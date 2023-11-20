import styles from "./styles.module.css";
export default function Card() {
  return (
    <div className={styles.container}>
      <p>Título</p>
      <img
        className={styles.cardImg}
        src="https://scontent.fpoa10-1.fna.fbcdn.net/v/t39.30808-6/380218369_722508836557295_9090960416374901537_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=E_-omKcaisUAX8PHJsW&_nc_ht=scontent.fpoa10-1.fna&oh=00_AfDwwn0KqoveWA-S9fE1RHgRHryCdgdCMnUZAdx_cYgESQ&oe=6560C8E7"
      />
      <span>Preço</span>
      <button type="button">Ver mais</button>
    </div>
  );
}
