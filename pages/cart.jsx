import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
//import { PayPalScriptProvider } from "paypal";
import OrderDetail from "../components/OrderDetaild";
import axios from "axios";
import { useRouter } from "next/router";
import {reset} from '../redux/cartSlicer'

const Cart = () => {
  const products = useSelector((state) => state.cart.products)
  const quantity = useSelector((state) => state.cart.quantity)
  const total = useSelector((state) => state.cart.total)
  const dispatch = useDispatch()
  // This values are the props in the UI
  const amount = "2";
  const currency = "USD";
  const style = { "layout": "vertical" };
  const router = useRouter();
  //
  const server = process.env.SERVER;
  //
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);

  const createOrder = async (data) => {
    try {
        const res = await axios.post(`${server}/api/orders`, data)
        console.info(res)
        if(res.status === 201){
          dispatch(reset())
          console.info('Eccodi')
          router.push(`/order/${res.data._id}`)
        }
    } catch (error) {
      console.log(error)
    }
  }
  return (


    <div className={styles.container}>
      <div className={styles.left}>

        <table className={styles.table}>
          <thead className={styles.trTitle}>
            <tr className={styles.tr}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr className={styles.tr} key={i}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text}</span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>${product.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>{product.price * product.quantity}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${total}
          </div>
          {!open ? <>
            <button className={styles.button} onClick={() => setOpen(true)}>CHECKOUT NOW!</button>
          </> : 
          <div className={styles.paymentMehods}>
            <button className={styles.payButton} onClick={()=>setCash(true)}> Cash on delivery</button>
          </div>
          }

        </div>
      </div>
      {cash && (
        <OrderDetail total={total} createOrder={createOrder}>
    
        </OrderDetail>
      )}
    </div>
  );
};

export default Cart;
