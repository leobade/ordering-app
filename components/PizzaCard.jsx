import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'


const PizzaCard = ({pizza}) =>{
    const {_id, title, prices, desc, img} = pizza
    const redirect = () => {
        useRouter().push(`/product/${_id}`)
    }
    return (

        <div className={styles.container}>
            <Link  href={`/product/${_id}`} passHref>
                <Image src={img} alt=" " width="250" height="250"></Image>
            </Link>
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.price}>${prices[0]}</span>
            <p className={styles.desc}>
                {desc}
            </p>
        </div>

    )
}


export default PizzaCard