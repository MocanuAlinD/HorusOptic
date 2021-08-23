import React, { useState, useEffect } from 'react';
import styles from '../../styles/Produse.module.css'
import MiniCard from '../../components/MiniCard'
import Sidebar from '../../components/Sidebar'
import LoadingScreen from '../../components/LoadingScreen'
import Pagination from '../../components/Pagination'
import Head from 'next/head'
import { AiOutlineVerticalRight } from 'react-icons/ai';
import Image from 'next/image'
import { IconButton } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'


const Produse = ({ onAddToCart, products, loading }) => {

    const ochelariVedere = products.filter(x => { return (x.categories[0].slug === 'rame' || x.categories[1].slug === 'rame') && !(x.name && x.description.includes('soare')) })
    const ochelariVedereLen = ochelariVedere.length

    const ochelariSoare = products.filter(x => { return (x.categories[0].slug === 'rame' || x.categories[1].slug === 'rame') && (x.name && x.description.includes('soare')) })
    const ochelariSoareLen = ochelariSoare.length

    const ochelariAccesorii = products.filter(x => { return x.categories[0].slug === 'accesorii' || x.categories[1].slug === 'accesorii' })
    const ochelariAccesoriiLen = ochelariAccesorii.length

    // Here the spinner while is loading products
    if (loading) {
        return <LoadingScreen />
    }

    // if (products===[]){
    //     return
    // }

    const [brand, setBrand] = useState('marcaAll')
    const [search, setSearch] = useState('')
    const [def, setDef] = useState('mic')
    const [imgpos, setImgpos] = useState(0)

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [currentPosts, setCurrentPosts] = useState(ochelariVedereLen)
    const [allProducts, setAllProducts] = useState(ochelariVedere)
    const [img, setImg] = useState(allProducts[0])

    // Names for the brands
    const abc = allProducts.filter(x => { return x.name && x.categories[0].slug === 'rame' })
    const sortedNames1 = []
    for (let i in abc) {
        if (sortedNames1.includes(abc[i].name)) {
            continue
        } else {
            sortedNames1.push(abc[i].name)
        }
    }
    const sortedNames = sortedNames1.sort((a, b) => a > b && 1 || -1)


    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage

    const changeBrand = () => {
        if (brand === 'marcaAll') {
            return allProducts.slice(indexOfFirstPost, indexOfLastPost)
        }
        if (brand !== 'marcaAll') {
            return allProducts.filter(m => { return m.name && m.name === brand })
        }
    }

    const changePriceName = (e) => {
        setDef(e)
        if (e === 'mic') {
            return allProducts.sort((a, b) => parseInt(a.price.raw) > parseInt(b.price.raw) && 1 || -1)
        }
        if (e === 'mare') {
            return allProducts.sort((a, b) => parseInt(a.price.raw) < parseInt(b.price.raw) && 1 || -1)
        }
        if (e === 'atoz') {
            return allProducts.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() && 1 || -1)
        }
        if (e === 'ztoa') {
            return allProducts.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() && 1 || -1)
        }
    }

    // Details page(section)
    const changeMe = (e) => {
        setImg(e)
        setImgpos(window.pageYOffset)

        let b = document.getElementById('s2')
        b.style.display = 'flex'
        let c = document.getElementById('s1')
        c.style.display = 'none'
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        })
    }



    const goback = () => {
        let b = document.getElementById('s1')
        b.style.display = 'flex'
        let c = document.getElementById('s2')
        c.style.display = 'none'
        window.scrollTo({
            top: imgpos,
            left: 0,
            behavior: 'auto'
        })
    }


    const searchItems = () => {
        const a = allProducts.filter(x => {
            return x.name && x.name.toLowerCase().includes(search) ||
                x.description && x.description.toLowerCase().includes(search)
        })
        return a
    }


    // Slider Images
    let ln = img && (img.assets ? img.assets.length - 1 : '')
    let sliderIndex = 0



    const setImagePlus = () => {
        let a = document.getElementById('slider1')
        sliderIndex = (sliderIndex < ln) ? sliderIndex + 1 : ln
        a.style.transform = 'translate(' + (sliderIndex) * -100 + '%)'
    }

    const setImageMinus = () => {
        let a = document.getElementById('slider1')
        sliderIndex = (sliderIndex > 0) ? sliderIndex - 1 : 0
        a.style.transform = 'translate(' + (sliderIndex) * -100 + '%)'
    }

    // Change page
    const paginate = (e, pageNumber) => {
        setCurrentPage(pageNumber)
        let buttons = document.querySelectorAll('.btn')
        buttons.forEach(btn => btn.classList.remove('active'))
        e.target.classList.add('active')
    }

    // Show products per page select
    const changeShow = (e) => {
        setPostsPerPage(e)
        setCurrentPage(1)
        buttonChange()
    }

    const buttonChange = () => {
        let buttons = document.querySelectorAll('.btn')
        buttons.forEach(btn => btn.classList.remove('active'))
        buttons[0] ? buttons[0].classList.add('active') : ''
    }

    const mad = (cat) => {
        setBrand('marcaAll')
        buttonChange()
        setCurrentPage(1)
        if (cat === 'ochelariVedere') {
            setCurrentPosts(ochelariVedereLen)
            setAllProducts(ochelariVedere)
        }
        if (cat === 'ochelariSoare') {
            setCurrentPosts(ochelariSoareLen)
            setAllProducts(ochelariSoare)
        }
        if (cat === 'ochelariAccesorii') {
            setCurrentPosts(ochelariAccesoriiLen)
            setAllProducts(ochelariAccesorii)
        }
    }

    useEffect(() => {
        let b = document.getElementById('slider1')
        b.style.transform = 'translate(0)'
    }, [img])

    return (
        <div className={styles.container} id='top'>
            <Head>
                <title>Produse</title>
            </Head>

            <div className={styles.containerImg}>
                <div className={styles.carousel}>
                    <div className={styles.slider} id='slider'>
                        <section className={styles.s1} id='s1'>
                            <div className={styles.containerSt}>
                                <div className={styles.sidebar}>
                                    <Sidebar
                                        // changeCat={(cat) => { mad(cat), console.log(cat)}}
                                        changeCat={(cat) => mad(cat)}
                                        changePriceName={word => changePriceName(word)}
                                        sortedNames={sortedNames}
                                        setSearch={setSearch}
                                        setBrand={setBrand}
                                        brand={brand}
                                    />
                                </div>

                                <div className={styles.productList}>
                                    {(search === "" && brand === "marcaAll") && <Pagination setPostsPerPage={setPostsPerPage} postsPerPage={postsPerPage} totalPosts={currentPosts} paginate={paginate} changeShow={changeShow} />}
                                    {search === '' && changeBrand(allProducts).map(prd => <MiniCard onAddToCart={onAddToCart} key={prd.id} produs={prd} change={changeMe} />)}
                                    {search !== '' ? searchItems().map(prd => <MiniCard onAddToCart={onAddToCart} key={prd.id} produs={prd} change={changeMe} />) : []}
                                </div>
                            </div>
                        </section>

                        <section className={styles.s2} id='s2'>
                            <div className={styles.containerDr}>
                                <button className={styles.backBtn} onClick={() => goback()}>&#60;</button>

                                <div className={styles.alin2}>
                                    <div className={styles.alin4} id='slider1'>
                                        <div className={styles.alin5}>
                                            {img ? img.assets.map((alin) =>
                                                <section key={alin.id}>
                                                    {/* <Image priority='true' layout='responsive' as='image' src={alin.url} width={alin.image_dimensions.width} height={alin.image_dimensions.height} /> */}
                                                    <Image layout='intrinsic' as='image' src={alin.url} width={1920} height={1080} />
                                                </section>
                                            ) : ''}
                                        </div>
                                    </div>
                                    <div className={styles.buttonsDiv}>
                                        <button className={styles.btnMinus} onClick={setImageMinus}>&#60;</button>
                                        {/* <h4>{imageNumber} / {img && img.assets.length}</h4> */}
                                        <button className={styles.btnPlus} onClick={setImagePlus}>&#62;</button>
                                    </div>
                                </div>

                                <div className={styles.rightSide}>
                                    <h4>{img && img.name}</h4>
                                    <div className={img && styles.description} dangerouslySetInnerHTML={{ __html: img && img.description }}></div>

                                    {img && (!img.inventory.managed ? (
                                        <div className={styles.link} >
                                            <IconButton onClick={() => onAddToCart(img.id, 1)}>
                                                <ShoppingCart className={styles.shopIcon} />
                                            </IconButton>
                                        </div>) :
                                        (
                                            img.inventory.available < 1 ?
                                                (<div className={styles.linkDisabled}>
                                                    <IconButton className={styles.shopIconDisabled} >
                                                        <ShoppingCart />
                                                    </IconButton>
                                                </div>) :
                                                (<div className={styles.link}>
                                                    <IconButton onClick={() => onAddToCart(img.id, 1)}>
                                                        <ShoppingCart className={styles.shopIcon} />
                                                    </IconButton>
                                                </div>)
                                        ))}

                                    <h4>Pret: {img && img.price.raw} <sub>ron</sub></h4>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Produse;
