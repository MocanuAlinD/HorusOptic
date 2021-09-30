import React from 'react';
import styles from '../styles/Footer.module.css'
import { ImMobile} from 'react-icons/im'
import { FiFacebook} from 'react-icons/fi'
import { AiOutlineMail} from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.footer__container}>
            <div className={styles.footer__left}>
                <h3>Contact</h3>
                <hr width='100%' style={{height:'.1rem'}}/>
                <div className={styles.footer__social}>
                    <ul>
                        <li><ImMobile size='1.2rem' style={{marginBottom: '-0.2rem', marginRight: '.5rem'}}/><a> 0742.654.258</a></li>
                        <li><AiOutlineMail size='1.2rem' style={{ marginBottom: '-0.2rem', marginRight: '.5rem' }}/><a> horus_top_optic@yahoo.com</a></li>
                    </ul>
                </div>
                <div className={styles.footer__socialMobile}>
                    <ul>
                        <li><a href="tel:0742654258"><ImMobile size='2rem' style={{ marginTop: '1rem', marginRight: '0' }} /></a></li>
                        <li><a href="mailto:horus_top_optic@yahoo.com"><AiOutlineMail size='2rem' style={{ marginTop: '1rem', marginRight: '0' }} /></a></li>
                    </ul>
                </div>
                
            </div>
            <div className={styles.footer__middle}>
                <h3>Despre</h3>
                <hr width='100%' style={{height:'.1rem', marginBottom: '.5rem'}}/>
                <Link href="/istoriaochelarilor"><a>Istoria ochelarilor de vedere</a></Link>
                <Link href="/nastere"><a>Locul de naștere al ochelarilor</a></Link>
                <Link href="/tipuridelentile"><a>Tipuri de lentile</a></Link>
                <Link href="/lentiledecontact"><a>Lentile de contact</a></Link>
                <Link href="/ochelariideazi"><a>Ochelarii din ziua de azi</a></Link>
                <Link href="/ochelarisoare"><a>Ochelarii de soare</a></Link>
                <Link href="/consultopticamedicala"><a>Consult optica medicala</a></Link>
            </div>
            <div className={styles.footer__right} >
                <Link href="#"><a>Inainte sa cumperi !</a></Link>
                <Link href="/PoliticaDeConfidentialitate"><a>Politica de confidentialitate</a></Link>
                <Link href="/Garantie"><a>Garantie</a></Link>
                <h4>CUI: 40666971</h4>
                <h4>J13/856/2019</h4>
            </div>
        </div>
    );
}

export default Footer;
