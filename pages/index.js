import styles from '../styles/Home.module.css'
import { getIndexData } from "../actions"
import Card1 from '../components/Card1'

export default function Home({ allIndexData }) {

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src="/bg1_169.jpg" alt="BackgroundImage" />
        <h4>Noi avem grija de ochii dumneavoastra!</h4>
      </div>
      <Card1 indexData={allIndexData} />
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

