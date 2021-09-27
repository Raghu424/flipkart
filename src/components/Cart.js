import React from 'react'
// import { Link } from 'react-router-dom'
import './Cart.css'
import CheckOut from '../components/Checkout'
import { useSelector } from 'react-redux';
import Cart1 from '../components/pictures/cart1.png'
import { Link } from 'react-router-dom'
export default function Cart() {
    let basket = useSelector(state => state.basket);
    console.log(basket);

    let checkOutDet = basket.map(item => <CheckOut id={item.id}  title={item.title} price={item.price} image={item.img} />)

   
    
    return (
        <div className='cart5'>
            <div className='cart2'>

                <div className='cart1'>
                    <h5>My Cart</h5>
                    <div className='cart4' >
                        <img className='cart3' src={Cart1} />
                        <h6>Missing Cart items?</h6>
                        <span>Login to see the items you added previously</span>
                        <div >
                        <Link to='/login'>
                            <button className="a5">Login</button>
                            </Link>
                        </div>
                    </div>

                </div>

                <div> {checkOutDet}</div>
            </div>
        </div>


    )
}
