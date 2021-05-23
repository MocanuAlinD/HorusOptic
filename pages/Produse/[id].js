import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { commerce } from '../../lib/commerce'
import cls from '../../styles/dinamicPage.module.css'
import Image from 'next/image'
import Link from 'next/link'

export async function getStaticProps({ params }) {
    const page = await commerce.products.retrieve(params.id)
    return {
        props: { page }
    }
}

export async function getStaticPaths() {
    const product = await commerce.products.list()
    // const product = await res.json()
    const paths = product.data.map(item => ({
        params: { id: item.id.toString() }
    }))
    return {
        paths, fallback: false
    }
}


const unProdus = ({ page }) => {
    const router = useRouter()
    const { id } = router.query



    // if (!props.propId) return null


    const jobId = page.id
    // let page = jobId ? props.produse.filter(x => x && x.id === jobId)[0] : ''
    let ln = page.assets ? page.assets.length - 1 : []
    var sliderIndex = 0

    useEffect(() => {
        let b = document.getElementById('slider')
        b.style.transform = 'translate(0)'
    }, [page])


    const setImagePlus = () => {
        let a = document.getElementById('slider')
        sliderIndex = (sliderIndex < ln) ? sliderIndex + 1 : ln
        a.style.transform = 'translate(' + (sliderIndex) * -100 + '%)'
    }

    const setImageMinus = () => {
        let a = document.getElementById('slider')
        sliderIndex = (sliderIndex > 0) ? sliderIndex - 1 : 0
        a.style.transform = 'translate(' + (sliderIndex) * -100 + '%)'
    }


    return (
        <div className={cls.container} id='pop'>
            {/* <button className={cls.backBtn} onClick={} >&#60; back</button> */}
            <Link href='/Produse'><a className={cls.backBtn} >&#60; back</a></Link>

            <div className={cls.left}>
                <div className={cls.containerImg} id='containerImg'>
                    <div className={cls.carousel} id='carousel'>
                        <div className={cls.slider} id='slider'>
                            {page.assets.map((alin) =>
                                <section key={alin.id}>
                                    <Image priority='true' layout='responsive' src={alin.url} alt='Glasses' width={alin.image_dimensions.width} height={alin.image_dimensions.height} />
                                </section>
                            )}
                        </div>
                    </div>
                </div>
                <div className={cls.buttonsDiv}>
                    <button className={cls.btnMinus} onClick={() => setImageMinus()}>&#60;</button>
                    <button className={cls.btnPlus} onClick={() => setImagePlus()}>&#62;</button>
                </div>
            </div>

            <div className={cls.right}>
                <h4>{page.name}</h4>
                <div dangerouslySetInnerHTML={{ __html: page.description }}></div>
                {/* <p>{page.description}</p> */}
                <h5>Pret: {page.price.raw} <sub>ron</sub></h5>
            </div>

            {/* <button className={cls.backBtn} >X</button>

            <div className={cls.left}>
                <div className={cls.containerImg} id='containerImg'>
                    <div className={cls.carousel} id='carousel'>
                        <div className={cls.slider} id='slider'>
                            {page.assets.map((alin) =>
                                <section key={alin.id}>
                                    <Image priority='true' layout='responsive' src={alin.url} alt='Glasses' width={alin.image_dimensions.width} height={alin.image_dimensions.height} />
                                </section>
                            )}
                        </div>
                    </div>
                </div>
                <div className={cls.buttonsDiv}>
                    <button className={cls.btnMinus} onClick={() => setImageMinus()}>&#60;</button>
                    <button className={cls.btnPlus} onClick={() => setImagePlus()}>&#62;</button>
                </div>
            </div>

            <div className={cls.right}>
                <h4>{page.name}</h4>
                <p dangerouslySetInnerHTML={{ __html: page.description }}></p>
                <h5>Pret: {page.price.raw} <sub>ron</sub></h5>
            </div> */}
        </div>
    );
}

export default unProdus;
