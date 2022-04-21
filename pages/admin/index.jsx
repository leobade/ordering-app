import axios from 'axios'
import styles from '../../styles/Admin.module.css'
import { useState } from 'react'
import Image from 'next/image'
const server = process.env.SERVER

const Index = ({ orders, products }) => {
    const [pizzaList, setPizzaList] = useState(products)
    const [orderList, setOrderList] = useState(orders)
    const status = ['Preparing', 'on the way', 'delivered']

    const handleDelete = async (id) => {
        try {
            const res = axios.delete(`${server}/api/products/${id}`);
            setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
        } catch (error) {
            console.error(error)
        }
    }


    const handleStatus = async (id) => {
        //need to find the current order statsu
        const item = orderList.filter(order => order._id === id)[0]
        const currentStatus = item.status
        
        try {
            const res = await axios.put(`${server}/api/orders/${id}`, { status: currentStatus + 1 })
            setOrderList([
                res.data, 
                ...orderList.filter(order => order._id !== id)
            ])
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Products</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Image</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {pizzaList.map((product) => (
                        <tbody key={product._id}>
                            <tr className={styles.trTitle}>
                                <td>
                                    <Image
                                        src={product.img}
                                        width={50}
                                        height={50}
                                        objectFit="cover"
                                        alt=""
                                    />
                                </td>
                                <td>{product._id.slice(0, 5)}...</td>
                                <td>{product.title}</td>
                                <td>${product.prices[0]}</td>
                                <td>
                                    <button className={styles.button}>Edit</button>
                                    <button
                                        className={styles.button}
                                        onClick={() => handleDelete(product._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            <div className={styles.item}>
                <h1 className={styles.title}>Orders</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Id</th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {orderList.map((order) => (
                        <tbody key={order._id}>
                            <tr className={styles.trTitle}>
                                <td>{order._id.slice(0, 5)}...</td>
                                <td>{order.customer}</td>
                                <td>${order.total}</td>
                                <td>
                                    {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                                </td>
                                <td>{status[order.status]}</td>
                                <td>
                                    <button onClick={() => handleStatus(order._id)}>
                                        Next Stage
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    //if there is a request we can take the cookie key, otherwise null
    const myCookie = ctx.req?.cookies || "";
    if(myCookie.token !== process.env.TOKEN){
        return {
            redirect:{
                destination: "/admin/login",
                permanent: false
            }
        }
    }
    const productsRes = await axios.get(`${server}/api/products`);
    const ordersRes = await axios.get(`${server}/api/orders`);

    return {
        props: {
            orders: ordersRes.data,
            products: productsRes.data
        }
    }
}

export default Index