import axios from 'axios'
import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import {useState} from 'react'

const Product = ({pizza}) =>{
    const [size, setSize] = useState(0);
    const [price, setPrice] = useState(pizza.prices[0])
    const [extras, setExtras] = useState([])
    const [qty, setQty] = useState(1);
    
    const changePrice = (number) =>{
        setPrice(price + number)
    }

    const handleSize = (sizeIndex) =>{
        const difference = pizza.prices[sizeIndex] - pizza.prices[size]
        setSize(sizeIndex)
        changePrice(difference);
    }

    const handleChange = (e, option) =>{
        const checked = e.target.checked;
        if(checked){
            changePrice(option.price)
            setExtras((prev)=>[...prev, option])
        }else{
            changePrice(-option.price)
            setExtras(extras.filter((extra)=>(extra._id !== option._id)))
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} layout="fill" alt=""></Image>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.title}</h1>
                <span className={styles.price}>{price}€</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={()=>handleSize(0)}>
                        <Image src="/img/size.png" alt="" layout="fill"></Image>
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={()=>handleSize(1)}>
                        <Image src="/img/size.png" alt="" layout="fill"></Image>
                        <span className={styles.number}>Mediums</span>
                    </div>
                    <div className={styles.size} onClick={()=>handleSize(2)}>
                        <Image src="/img/size.png" alt="" layout="fill"></Image>
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Vuoi aggiungere degli extra?</h3>
                <div className={styles.ingridients}>
                    {pizza.extraOptions.map((extra, i)=>(
                        <div className={styles.option} key={i}>
                            <input type="checkbox" id={extra.text} name={extra.text} className={styles.checkbox} onChange={(e)=>handleChange(e, extra)}/>
                            <label htmlFor="double" value={extra._id}>{extra.text}</label>
                        </div>
                    ))}
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity} onChange={(e) => setQty(e.target.value)} />
                    <button className={styles.button}>Add to cart</button>
                </div>
                </div>
        </div>
    )

}

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
    return {
        props: {
            pizza: res.data,
        }
    }
}

export default Product