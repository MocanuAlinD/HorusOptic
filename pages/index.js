import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getIndexData } from "../actions"
import Card1 from '../components/Card1'
import { BsArrowBarUp} from 'react-icons/bs'

export default function Home(props) {
  const { allIndexData } = props
  return (
    <div className={styles.container}>
      <Head>
        <title>horusTopOptic</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cantata+One&family=Cinzel:wght@400;500&family=Elsie+Swash+Caps&family=Hammersmith+One&family=Indie+Flower&family=Josefin+Slab:wght@500&family=Montserrat:ital,wght@0,200;0,300;0,500;0,900;1,200;1,300;1,500;1,900&family=Poppins:ital,wght@0,200;0,400;0,600;0,900;1,200;1,400;1,600;1,900&family=Raleway:ital,wght@0,300;0,500;0,900;1,200&family=Special+Elite&display=swap"
          rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <script src="https://kit.fontawesome.com/cbb96f47ca.js" crossorigin="anonymous"></script>
      </Head>

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

