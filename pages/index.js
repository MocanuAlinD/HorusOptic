import styles from "../styles/Home.module.css";
import IndexCard from "../components/IndexCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src="/bg1_169.jpg" alt="BackgroundImage" />
        <h4>Noi avem grija de ochii dumneavoastra!</h4>
      </div>
      <IndexCard />
    </div>
  );
}
