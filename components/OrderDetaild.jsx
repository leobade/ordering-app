
import styles from '../styles/OrderDetail.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


const OrderDetail = ({ total, createOrder}) =>{
    const [customer, setCustomer] = useState("")
    const [address, setAddress] = useState("")

    const handleClick = () =>{
        createOrder({customer, address, total, method: 0})
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>You will pay X after delivery</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Name surname</label>
                    <input type="text" placeholder='John doe' className={styles.input} onChange={(e)=>setCustomer(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Address</label>
                    <textarea rows={5} type="text" placeholder='Elton str. 1' className={styles.textArea} onChange={(e)=>setAddress(e.target.value)} />
                </div>
                <button className={styles.button} onClick={handleClick}>Order Now</button>
            </div>
        </div>
    )
}


export default OrderDetail