import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import SubTotal from './SubTotal'
function CheckOut() {
    const [{ basket , user }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img18/SecureCard/PF/SecureCard_PR_Header.jpg" alt=""/>
            <div>
                <h3>Hello,{user?.email}</h3>
                <h2 className="checkout__title">
                    Your shopping basket
                </h2>

                    {basket.map(item => (
                        <CheckoutProduct 
                        id={item.id}
                        title= {item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                         />
                    ))}

            </div>
            </div>
            
            <div className="checkout__right">
               <SubTotal />
            </div>
        </div>
    )
}

export default CheckOut
 