import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import {useState} from 'react'

const Product = () =>{
    const [size, setSize] = useState(0);
    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "MARGHERITA",
        price: [7, 8.5, 10],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime laborum veniam fugiat ab magnam? Repellendus nemo, in consequuntur ullam, explicabo at ipsam quod doloribus iusto consequatur aliquid porro facere!"
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} layout="fill" alt=""></Image>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price}>{pizza.price[size]}€</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={()=>setSize(0)}>
                        <Image src="/img/size.png" alt="" layout="fill"></Image>
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={()=>setSize(1)}>
                        <Image src="/img/size.png" alt="" layout="fill"></Image>
                        <span className={styles.number}>Mediums</span>
                    </div>
                    <div className={styles.size} onClick={()=>setSize(2)}>
                        <Image src="/img/size.png" alt="" layout="fill"></Image>
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Vuoi aggiungere degli extra?</h3>
                <div className={styles.ingridients}>
                    <div className={styles.option}>
                        <input type="checkbox" id="double" name="double" className={styles.checkbox}/>
                        <label htmlFor="double">Bigger</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="cheese" name="cheese" className={styles.checkbox}/>
                        <label htmlFor="cheese">Extra cheese</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="spicy" name="spicy" className={styles.checkbox}/>
                        <label htmlFor="spicy">Spicy sauce </label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity} />
                    <button className={styles.button}>Add to cart</button>
                </div>
                </div>
        </div>
    )

}

export default Product