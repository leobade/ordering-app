import styles from '../styles/PizzaList.module.css'
import Image from 'next/image'
import { useState } from 'react';
import PizzaCard from './PizzaCard'

const PizzaList = () => {
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>The best pizza in town</h2>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellendus earum ex consequuntur officiis obcaecati non qui aperiam hic, sequi quisquam dicta maiores vitae ab, cumque ratione sapiente maxime! Reprehenderit!
                </p>
                <div className={styles.wrapper}>

                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                </div>
            </div>
        </>
    )

}


export default PizzaList