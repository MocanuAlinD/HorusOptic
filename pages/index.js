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
    </div>
  )
}

Home.getInitialProps = async () => {
  const indexData = await getIndexData() // returns array of movies

  // this is what returns
  // [id: 'image-1', image: 'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600']
  const allIndexData = indexData.map(data => ({
    id: data.id,
    title: data.title,
    text: data.text,
    button: data.button
  }))

  return { allIndexData }
}

