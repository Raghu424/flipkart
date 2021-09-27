import React from 'react'
import './Curten.css'
import B1 from '../components/pictures/car1.png'
import B2 from '../components/pictures/car2.png'
import B3 from '../components/pictures/car3.png'
import B4 from '../components/pictures/car4.png'
import B5 from '../components/pictures/car5.png'
import B6 from '../components/pictures/car6.png'
import { Link } from 'react-router-dom'
import Flip from '../components/pictures/flip.png'
import {useDispatch} from 'react-redux';
export default function Curten(id,price,title,image) {
    let dispatch=useDispatch()
    return (
        <div className='home2'>
            {/* <div className='deal1'>
                <h4>Fashion Top Deals</h4> */}


<div className='tel'>
                <div className='tv'>
                    <div class="dropdown">
                        <h6 className='E2'>Electronics</h6>

                        <div class="dropdown-content">
                            <Link to='/television'>
                                <a href="#">Televisions</a>
                            </Link>
                            <Link to='men'>
                                <a href="#">Styles for men </a>
                            </Link>

                            <Link to='saree'>
                                <a href="#">Styles for women</a>
                            </Link>
                            <Link to='spray'>
                                <a href="#"> Deodrant Sprays</a>
                            </Link>
                            <Link to='/watch'>
                                <a href="#">watches</a>
                            </Link>
                            <Link to='mobiles'>

                                <a href="#">Mobiles</a>
                            </Link>
                            <Link to='curten'>
                                <a href="#">Curtens</a>
                            </Link>
                            <Link to='electronics'>
                                <a href="#">Electronics</a>
                            </Link>
                            <Link to='pouch'>
                                <a href="#">Mobile Pouches</a>
                            </Link>
                            <Link to='pendrive'>
                                <a href="#"> pendrive</a>
                            </Link>

                        </div>
                    </div>
                    <div className='tv'>

                        <div class="dropdown">
                            <h6 className='E2'>Tvs and Appliances</h6>

                            <div class="dropdown-content">
                                <Link to='/television'>
                                    <a href="#">Televisions</a>
                                </Link>
                                <Link to='men'>
                                    <a href="#">Styles for men </a>
                                </Link>

                                <Link to='saree'>
                                    <a href="#">Styles for women</a>
                                </Link>
                                <Link to='spray'>
                                    <a href="#"> Deodrant Sprays</a>
                                </Link>
                                <Link to='/watch'>
                                    <a href="#">watches</a>
                                </Link>
                                <Link to='mobiles'>

                                    <a href="#">Mobiles</a>
                                </Link>
                                <Link to='curten'>
                                    <a href="#">Curtens</a>
                                </Link>
                                <Link to='electronics'>
                                    <a href="#">Electronics</a>
                                </Link>
                                <Link to='pouch'>
                                    <a href="#">Mobile Pouches</a>
                                </Link>
                                <Link to='pendrive'>
                                    <a href="#"> pendrive</a>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='tv'>

                        <div class="dropdown">
                            <h6 className='E2'>Women</h6>

                            <div class="dropdown-content">
                                <Link to='/television'>
                                    <a href="#">Televisions</a>
                                </Link>
                                <Link to='men'>
                                    <a href="#">Styles for men </a>
                                </Link>

                                <Link to='saree'>
                                    <a href="#">Styles for women</a>
                                </Link>
                                <Link to='spray'>
                                    <a href="#"> Deodrant Sprays</a>
                                </Link>
                                <Link to='/watch'>
                                    <a href="#">watches</a>
                                </Link>
                                <Link to='mobiles'>

                                    <a href="#">Mobiles</a>
                                </Link>
                                <Link to='curten'>
                                    <a href="#">Curtens</a>
                                </Link>
                                <Link to='electronics'>
                                    <a href="#">Electronics</a>
                                </Link>
                                <Link to='pouch'>
                                    <a href="#">Mobile Pouches</a>
                                </Link>
                                <Link to='pendrive'>
                                    <a href="#"> pendrive</a>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='tv'>

                        <div class="dropdown">
                            <h6 className='E2'>Men</h6>

                            <div class="dropdown-content">
                                <Link to='/television'>
                                    <a href="#">Televisions</a>
                                </Link>
                                <Link to='men'>
                                    <a href="#">Styles for men </a>
                                </Link>

                                <Link to='saree'>
                                    <a href="#">Styles for women</a>
                                </Link>
                                <Link to='spray'>
                                    <a href="#"> Deodrant Sprays</a>
                                </Link>
                                <Link to='/watch'>
                                    <a href="#">watches</a>
                                </Link>
                                <Link to='mobiles'>

                                    <a href="#">Mobiles</a>
                                </Link>
                                <Link to='curten'>
                                    <a href="#">Curtens</a>
                                </Link>
                                <Link to='electronics'>
                                    <a href="#">Electronics</a>
                                </Link>
                                <Link to='pouch'>
                                    <a href="#">Mobile Pouches</a>
                                </Link>
                                <Link to='pendrive'>
                                    <a href="#"> pendrive</a>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='tv'>

                        <div class="dropdown">
                            <h6 className='E2'>Home Furniture</h6>

                            <div class="dropdown-content">
                                <Link to='/television'>
                                    <a href="#">Televisions</a>
                                </Link>
                                <Link to='men'>
                                    <a href="#">Styles for men </a>
                                </Link>

                                <Link to='saree'>
                                    <a href="#">Styles for women</a>
                                </Link>
                                <Link to='spray'>
                                    <a href="#"> Deodrant Sprays</a>
                                </Link>
                                <Link to='/watch'>
                                    <a href="#">watches</a>
                                </Link>
                                <Link to='mobiles'>

                                    <a href="#">Mobiles</a>
                                </Link>
                                <Link to='curten'>
                                    <a href="#">Curtens</a>
                                </Link>
                                <Link to='electronics'>
                                    <a href="#">Electronics</a>
                                </Link>
                                <Link to='pouch'>
                                    <a href="#">Mobile Pouches</a>
                                </Link>
                                <Link to='pendrive'>
                                    <a href="#"> pendrive</a>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='tv'>

                        <div class="dropdown">
                            <h6 className='E2'>Mobiles</h6>

                            <div class="dropdown-content">
                                <Link to='/television'>
                                    <a href="#">Televisions</a>
                                </Link>
                                <Link to='men'>
                                    <a href="#">Styles for men </a>
                                </Link>

                                <Link to='saree'>
                                    <a href="#">Styles for women</a>
                                </Link>
                                <Link to='spray'>
                                    <a href="#"> Deodrant Sprays</a>
                                </Link>
                                <Link to='/watch'>
                                    <a href="#">watches</a>
                                </Link>
                                <Link to='mobiles'>

                                    <a href="#">Mobiles</a>
                                </Link>
                                <Link to='curten'>
                                    <a href="#">Curtens</a>
                                </Link>
                                <Link to='electronics'>
                                    <a href="#">Electronics</a>
                                </Link>
                                <Link to='pouch'>
                                    <a href="#">Mobile Pouches</a>
                                </Link>
                                <Link to='pendrive'>
                                    <a href="#"> pendrive</a>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
                <div className='row3'>
                    <div className="row header__set4">
                        <div className='header__deal3'>
                            <img className="header__Today6" src={B1} />
                              <h6 className='set4'>Flipkart Perfect Homes Abstract Double Coral Curten</h6> 
                            <img className='m4' src={Flip} />
                            <span>Upto 20% off + 10% extra Off</span>
                            <h6>specialprice:₹1139</h6>
                            <div className='but5'>
                                <button className='but3' >Buy Now</button>
                                <button className='but4'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' Best curtens for House Hold  ',title: 'Flipkart Perfect Homes Abstract Double Coral Curten',price:1139}})}>Add To Cart</button>
                            </div>
                        </div>

                        <div className='header__deal3'>
                            <img className="header__Today6" src={B2} />
                            <h6 className='set4'>KIRTIKA ENTERPRISES Self Curtens</h6>
                          
                            <img className='m4' src={Flip} />
                            <span>Upto 70% off</span>
                            <h6>specialprice:₹739</h6>
                            <div className='but5'>
                                <button className='but3'>Buy Now</button>
                                <button className='but4'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' Best curtens for House Hold  ',title: 'KIRTIKA ENTERPRISES Self Curtens',price:739}})}>Add To Cart</button>
                            </div>
                        </div>
                        <div className='header__deal3'>
                            <img className="header__Today6" src={B4} />
                            <h6 className='set4'>IWS Self Design Double Mink Blanket curten  </h6>
                            <img className='m4' src={Flip} />
                            <span>Upto 50% off</span>
                            <h6>specialprice:₹1439</h6>
                            <div className='but5'>
                                <button className='but3'>Buy Now</button>
                                <button className='but4'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' Best curtens for House Hold  ',title: 'IWS Self Design Double Mink Blanket curten ',price:1439}})}>Add To Cart</button>
                            </div>


                        </div>

                        <div className='header__deal3'>
                            <img className="header__Today5" src={B6} />
                            <h6 className='set4'>PORTICO NEW YORK Solid Double Comforter curten</h6>
                            <img className='m4' src={Flip} />
                            <span>Upto 40% off</span>
                            <h6>specialprice:₹1299</h6>
                            <div className='but5'>
                                <button className='but3'>Buy Now</button>
                                <button className='but4'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:'Best curtens for House Hold  ',title: 'PORTICO NEW YORK Solid Double Comforter curten',price:1299}})}>Add To Cart</button>
                            </div>
                        </div>




                        <div className='header__deal3'>
                            <img className="header__Today5" src={B5} />
                            <h6 className='set4'>PORTICO NEW YORK Solid Double Comforter Curten </h6>
                            <img className='m4' src={Flip} />
                            <span>Upto 20% off</span>
                            <h6>specialprice:₹939</h6>
                            <div className='but5'>
                                <button className='but3'>Buy Now</button>
                                <button className='but4'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' Best curtens for House Hold ',title: 'PORTICO NEW YORK Solid Double Comforter curten',price:939}})}>Add To Cart</button>
                            </div>
                        </div>
                        <div className='header__deal3'>
                            <img className="header__Today5" src={B3} />
                            <h6 className='set4'>Signature Printed Double Mink Curten</h6>
                            <img className='m4' src={Flip} />
                            <span>Upto 30% off</span>
                            <h6>specialprice:₹1599</h6>
                            <div className='but5'>
                                <button className='but3'>Buy Now</button>
                                <button className='but4'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' Best Curtens for House Hold ',title: 'Signature Printed Double Mink Curten',price:1599}})}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}
