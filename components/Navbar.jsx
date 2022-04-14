import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="" width="32" height="32" ></Image>
                </div>  
                <div className={styles.texts}>
                    <div className={styles.text}>Ordina ora</div>
                    <div className={styles.text}>+39 3333333333</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>Prodotti</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/img/logo.png" alt="" width="160px" height="69px"/>
                    <li className={styles.listItem}>Eventi</li>
                    <li className={styles.listItem}>Contatti</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src="/img/cart.png" width="30px" height="30px"/>
                    <div className={styles.counter}>2</div>
                    
                </div>
            </div>


        </div>

    );
};

export default Navbar