import styles from '../styles/Home.module.css'
import { getIndexData } from "../actions"
import Card1 from '../components/Card1'
import { BsArrowBarUp} from 'react-icons/bs'



export default function Home(props) {
  const { allIndexData } = props
  return (
    <div className={styles.container}>
      {/* <div className={styles.scrollText}>
        <p>Pentru produsele indisponibile(nu mai sunt pe stoc), va rugam sa trimiteti un email (horus_top_optic@yahoo.com), sms ori la telefon (0742.654.258) cu codul produsului dorit si il vom aduce il cel mai scurt timp posibil. Va multumim pentru intelegere! </p>
      </div> */}


      {/* <marquee className={styles.scrollText} behavior="scroll" direction="left">Pentru produsele indisponibile(nu mai sunt pe stoc), va rugam sa trimiteti un email (horus_top_optic@yahoo.com), sms ori la telefon (0742.654.258) cu codul produsului dorit si il vom aduce il cel mai scurt timp posibil. Va multumim pentru intelegere!</marquee> */}


      <div className={styles.bigImage}>
        <h3>NOI AVEM GRIJA DE OCHII DUMNEAVOASTRA !</h3>
      </div>
      
      <Card1 indexData={allIndexData}/>

      <div className={styles.mission}>
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
  const indexData = await getIndexData()
  const allIndexData = indexData.map(data => ({
    id: data.id,
    title: data.title,
    text: data.text,
    button: data.button,
    url: data.url
  }))

  return { allIndexData }
}

