import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'

const PizzaCard = () =>{
    return (

        <div className={styles.container}>
            <Image src="/img/pizza.png" alt=" " width="250" height="250"></Image>
            <h1 className={styles.title}>Margherita</h1>
            <span className={styles.price}>19,90€</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>

    )
}


export default PizzaCard