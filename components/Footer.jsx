import styles from '../styles/Footer.module.css'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className={styles.container}>
           
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>Non farti idee strane, siamo i miglori</h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Come raggungerci</h1>
                    <p className={styles.text}>
                        Corso unione 15
                        <br /> Torino, 10135
                        <br /> +39 3333333333 
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Orari</h1>
                    <p className={styles.text}>
                        Martedi - Sabato
                        <br /> 09:00 - 18:30
                    </p>
                    <p className={styles.text}>
                        Chiusura 
                        <br /> Domenica e Lunedì

                    </p>
            </div>

            </div>

        </div>
    )
}

export default Footer