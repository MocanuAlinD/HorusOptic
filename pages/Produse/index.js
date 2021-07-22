import React, { useState, useEffect } from 'react';
import styles from '../../styles/Produse.module.css'
import MiniCard from '../../components/MiniCard'
import Sidebar from '../../components/Sidebar'
import LoadingScreen from '../../components/LoadingScreen'
import Pagination from '../../components/Pagination'
import Head from 'next/head'
import { AiOutlineVerticalRight } from 'react-icons/ai';
import Image from 'next/image'
import { commerce } from '../../lib/commerce'
import { IconButton } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'


const Produse = ({ onAddToCart, products, loading }) => {

    const ochelari = products.filter(x => (x.categories[0].slug === 'rame' || x.categories[1].slug === 'rame')).length
    // console.log('ochelari: ', ochelari)

    const accesorii = products.filter(x => (x.categories[0].slug === 'accesorii' || x.categories[1].slug === 'accesorii')).length
    // console.log('accesorii: ', accesorii)


    // Here the spinner while is loading products
    if (loading) {
        return <LoadingScreen />
    }

    // if (products===[]){
    //     return
    // }

    const [filter, setFilter] = useState('rame')
    const [brand, setBrand] = useState('marcaAll')
    const [search, setSearch] = useState('')
    const [def, setDef] = useState('mic')
    const [img, setImg] = useState(products[0])
    const [imgpos, setImgpos] = useState(0)

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(5)
    // const [currentPosts, setCurrentPosts] = useState(products.filter(x => (x.categories[0].slug === filter || x.categories[1].slug === filter)).length)
    const [currentPosts, setCurrentPosts] = useState(ochelari)

    // Names for the brands
    const abc = products.filter(x => { return x.name && x.categories[0].slug === 'rame' })
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
    // const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)

    const changeBrand = () => {
        if (brand === 'marcaAll') {
            return products.filter(x => (x.categories[0].slug === filter || x.categories[1].slug === filter)).slice(indexOfFirstPost, indexOfLastPost)
        }
        if (brand !== 'marcaAll') {
            return products.filter(m => { return m.name && m.name === brand })
        }
    }

    const changePriceName = (e) => {
        setDef(e)
        if (e === 'mic') {
            return products.sort((a, b) => parseInt(a.price.raw) > parseInt(b.price.raw) && 1 || -1)
        }
        if (e === 'mare') {
            return products.sort((a, b) => parseInt(a.price.raw) < parseInt(b.price.raw) && 1 || -1)
        }
        if (e === 'atoz') {
            return products.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() && 1 || -1)
        }
        if (e === 'ztoa') {
            return products.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() && 1 || -1)
        }
    }


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



    const goback = (e) => {
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
        const a = products.filter(x => {
            return x.name && x.name.toLowerCase().includes(search) ||
                x.description && x.description.toLowerCase().includes(search)
        })
        return a
    }


    // Slider Images
    let ln = img && (img.assets ? img.assets.length - 1 : [])
    var sliderIndex = 0

    useEffect(() => {
        let b = document.getElementById('slider1')
        b.style.transform = 'translate(0)'
    }, [img])

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
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        let buttons = document.querySelectorAll('.btn')
        buttons.forEach(button => {
            // console.log(button)
            button.addEventListener('click', function () {
                buttons.forEach(btn => btn.classList.remove('active'))
                button.classList.add('active')
            })
        })
    }

    const changeShow = (e) => {
        setPostsPerPage(e)
        console.log(e)
    }

    const mad = (cat) => {
        setBrand('marcaAll')
        setFilter(cat)
        if (cat === 'rame') {
            setCurrentPage(1)
            setCurrentPosts(ochelari)
        }
        if (cat === 'accesorii') {
            setCurrentPage(1)
            setCurrentPosts(accesorii)
        }
    }

    
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
                                        changeCat={(cat) => mad(cat)}
                                        brandAll={word => (changeBrand(word, setBrand(word !== 'marcaAll' ? word : 'marcaAll')))}
                                        changePriceName={word => changePriceName(word)}
                                        sortedNames={sortedNames}
                                        searchResult={word => setSearch(word)}
                                    />
                                </div>

                                <div className={styles.productList}>
                                    {/* {(filter === 'rame' && brand === "marcaAll") && <Pagination postsPerPage={postsPerPage} totalPosts={products.filter(x => (x.categories[0].slug === filter || x.categories[1].slug === filter)).length} paginate={paginate} changeShow={changeShow} />} */}
                                    {brand === "marcaAll" && <Pagination postsPerPage={postsPerPage} totalPosts={currentPosts} paginate={paginate} changeShow={changeShow} />}
                                    {/* <Pagination postsPerPage={postsPerPage} totalPosts={currentPosts} paginate={paginate} changeShow={changeShow} /> */}
                                    {search === '' && changeBrand(products).map(prd =>
                                        <MiniCard onAddToCart={onAddToCart} key={prd.id} produs={prd} change={changeMe} />)}

                                    {search !== '' ? searchItems().map(prd =>
                                        <MiniCard onAddToCart={onAddToCart} key={prd.id} produs={prd} change={changeMe} />) : []}
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
                                                    <Image src={alin.url} width={alin.image_dimensions.width} height={alin.image_dimensions.height} />
                                                </section>
                                            ) : ''}
                                        </div>
                                    </div>
                                    <div className={styles.buttonsDiv}>
                                        <button className={styles.btnMinus} onClick={() => setImageMinus()}>&#60;</button>
                                        <button className={styles.btnPlus} onClick={() => setImagePlus()}>&#62;</button>
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
