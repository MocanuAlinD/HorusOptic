import styles from '../styles/Home.module.css'
import { getIndexData } from "../actions"
import Card1 from '../components/Card1'
import { BsArrowBarUp} from 'react-icons/bs'

export default function Home(props) {
  const { allIndexData } = props
  return (
    <div className={styles.container}>

      <div className={styles.bigImage}>
        <h3>NOI AVEM GRIJA DE OCHII DUMNEAVOASTRA !</h3>
      </div>
      
      <Card1 indexData={allIndexData}/>

      <BsArrowBarUp className={styles.backTop}/>

      <div className={styles.mission}>
        {/* <img src="/bg4.jpg" alt="" /> */}
        <h3>Misiunea noastra</h3>
        <ul className={styles.ulMission}>
          <li>Preturi incepand de la 100 lei perechea de ochelari</li>
          <li>Garantie 2 ani la toate produsele comercializate</li>
          <li>Posibilitatea achitarii produselor achizitionate, in mai multe rate lunare stabilite de comun acord – <strong>FARA DOBANDA</strong></li>
          <li>Oferirea de consultatii optometrice profesioniste gratuite indiferent daca se achizitioneaza sau nu produsele companiei.</li>
          <li>Consultanta de specialitate cu privire la tipurile de protectie necesare pentru ochi (in functie de domeniul de activitate).</li>
          <li>Furnizarea de produse si servicii de calitate superioara si la preturi minime.</li>
          <li>Informarea clientilor despre afectiunile ochilor.</li>
          <li>Informarea clientilor despre noutatile din lumea opticii medicale (tip rame, tip lentiel etc).</li>
          </ul>
      </div>

    </div>
  )
}

Home.getInitialProps = async () => {
  const indexData = await getIndexData() // returns array of movies
  const allIndexData = indexData.map(data => ({
    id: data.id,
    title: data.title,
    text: data.text,
    button: data.button
  }))

  return { allIndexData }
}

