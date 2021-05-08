import Head from 'next/head'
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
      <div className={styles.mission}></div>
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

