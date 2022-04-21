import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import Add from '../components/Add'
import AddButton from '../components/AddButton'
import { useState } from 'react'

const server = process.env.SERVER;

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true)
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza resturant</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured></Featured>
      {admin && <AddButton setClose={setClose}></AddButton>}
      <PizzaList pizzaList={pizzaList}></PizzaList>
      {!close && <Add setClose={setClose}></Add>}
    </div>
  )
}


export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if(myCookie.token === process.env.TOKEN){
    admin = true;
  }
  const res = await axios.get(`${server}/api/products`)
  return {
    props: {
      pizzaList: res.data,
      admin
    }
  }
}