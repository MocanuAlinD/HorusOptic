import React from 'react';
import styles from '../styles/Footer.module.css'
import { ImMobile} from 'react-icons/im'
import { FiFacebook} from 'react-icons/fi'
import { AiOutlineMail} from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.leftFooter}>
                <h3>Contact</h3>
                <hr width='100%' style={{height:'.1rem'}}/>
                <div className={styles.socialFooter}>
                    <ul>
                        <li><ImMobile size='1.2rem' style={{marginBottom: '-0.2rem', marginRight: '.5rem'}}/><a> 0742.654.258</a></li>
                        <li><AiOutlineMail size='1.2rem' style={{ marginBottom: '-0.2rem', marginRight: '.5rem' }}/><a> horus_top_optic@yahoo.com</a></li>
                    </ul>
                </div>
                <div className={styles.socialFooterMobile}>
                    <ul>
                        <li><a href="tel:0742654258"><ImMobile size='2rem' style={{ marginTop: '1rem', marginRight: '0' }} /></a></li>
                        <li><a href="mailto:horus_top_optic@yahoo.com"><AiOutlineMail size='2rem' style={{ marginTop: '1rem', marginRight: '0' }} /></a></li>
                    </ul>
                </div>
                
            </div>
            <div className={styles.middleFooter}>
                <h3>Despre</h3>
                <hr width='100%' style={{height:'.1rem', marginBottom: '.5rem'}}/>
                <Link href="/Footer/istoria"><a>Istoria ochelarilor de vedere</a></Link>
                <Link href="/Footer/nastere"><a>Locul de naștere al ochelarilor</a></Link>
                <Link href="/Footer/stare"><a>Tipuri de lentile</a></Link>
                <Link href="/Footer/contact"><a>Lentile de contact</a></Link>
                <Link href="/Footer/prezent"><a>Ochelarii din ziua de azi</a></Link>
                <Link href="/Footer/soare"><a>Ochelarii de soare</a></Link>
                <Link href="/Footer/optica"><a>Consult optica medicala</a></Link>
            </div>
            <div className={styles.rightFooter} >
                <Link href="/PoliticaDeConfidentialitate"><a>Politica de confidentialitate</a></Link>
                <Link href="/Garantie"><a>Garantie</a></Link>
                <h4>CUI: 40666971</h4>
                <h4>J13/856/2019</h4>
            </div>
        </div>
    );
}

export default Footer;
