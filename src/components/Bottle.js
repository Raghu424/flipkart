import React from 'react'
import './Blanket.css'
import B1 from '../components/pictures/bot1.png'
import B2 from '../components/pictures/bot7.png'
import B3 from '../components/pictures/bot3.png'
import B4 from '../components/pictures/bot4.png'
import B5 from '../components/pictures/bot5.png'
import B6 from '../components/pictures/bot10.png'
import Flip from '../components/pictures/flip.png'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux';
export default function Blanket(id,price,title,image) {
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
            <br></br>
           
                <div className='row3'>
                    <div className="row header__set4">
                        <div className='header__deal3'>
                            <img className="header__Today6" src={B1} />
                              <h6 className='set4'>Powify Thermosteel Flip Lid Flask,Hot&Cold Water Bottle </h6> 
                              <h6>500 ml Flask  (Pack of 1, Steel/Chrome, Steel)</h6>
                            <img className='m4' src={Flip} />
                            <span>Upto 20% off + 10% extra Off</span>
                            <h6>specialprice:₹1139</h6>
                            <div className='but5'>
                                <button className='but3' >Buy Now</button>
                                <button className='but4'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:'Thermosteel Hot&Cold Water Bottle ',title: 'Powify Thermosteel Flip Lid Flask,Hot&Cold Water Bottle ',price:1139}})}>Add To Cart</button>
                            </div>
                        </div>

                        <div className='header__deal3'>
                            <img className="header__Today6" src={B2} />
                            <h6 className='set4'>MILTON PRUDENT-800 Thermosteel Hot & Cold </h6>
                            <h6>Water Bottle 810 ml Bottle  (Pack of 1, Blue, Steel)</h6>
                          
                            <img className='m4' src={Flip} />
                            <span>Upto 70% off</span>
                            <h6>specialprice:₹739</h6>
                            <div className='but5'>
                                <button className='but3'>Buy Now</button>
                                <button className='but4'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' Thermosteel Hot&Cold Water Bottle',title: 'MILTON PRUDENT-800 Thermosteel Hot & Cold ',price:739}})}>Add To Cart</button>
                            </div>
                        </div>
                        <div className='header__deal3'>
                            <img className="header__Today6" src={B4} />
                            <h6 className='set4'>MILTON BLISS 900 Thermosteel Vaccum Insulated   </h6>
                            <h6>Hot & Cold Wate Bottle 820 ml Flask </h6>
                            <img className='m4' src={Flip} />
                            <span>Upto 50% off</span>
                            <h6>specialprice:₹1439</h6>
                            <div className='but5'>
                                <button className='but3'>Buy Now</button>
                                <button className='but4'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:'Thermosteel Hot&Cold Water Bottle ',title: 'MILTON BLISS 900 Thermosteel Vaccum Insulated ',price:1439}})}>Add To Cart</button>
                            </div>


                        </div>

                        <div className='header__deal3'>
                            <img className="header__Today5" src={B6} />
                            <h6 className='set4'>Cltllzen Thermosteel Flip Flask 24hrs Hot </h6>
                            <h6>Water Bottle 500 ml Flask </h6>
                            <img className='m4' src={Flip} />
                            <span>Upto 40% off</span>
                            <h6>₹499 ₹649 23% off</h6>
                            <div className='but5'>
                                <button className='but3'>Buy Now</button>
                                <button className='but4'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:'Thermosteel Hot&Cold Water Bottle',title: 'Cltllzen Thermosteel Flip Flask 24hrs Hot',price:499}})}>Add To Cart</button>
                            </div>
                        </div>




                        <div className='header__deal3'>
                            <img className="header__Today5" src={B5} />
                            <h6 className='set4'>MILTON Elfin-160 Thermosteel Hot & Cold  </h6>
                            <h6>Water Bottle 160 ml Bottle  (Pack of 1, Silver, Steel)</h6>
                            <img className='m4' src={Flip} />
                            <span>Upto 20% off</span>
                            <h6>specialprice:₹939</h6>
                            <div className='but5'>
                                <button className='but3'>Buy Now</button>
                                <button className='but4'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' Thermosteel Hot&Cold Water Bottle ',title: 'MILTON Elfin-160 Thermosteel Hot & Cold  ',price:939}})}>Add To Cart</button>
                            </div>
                        </div>
                        <div className='header__deal3'>
                            <img className="header__Today5" src={B3} />
                            <h6 className='set4'>MILTON BLISS 900 Thermosteel Vaccum Insulated </h6>
                            <h6> Hot & Cold Water Bottle 820 ml Flask</h6>
                            <img className='m4' src={Flip} />
                            <span>Upto 30% off</span>
                            <h6>specialprice:₹1599</h6>
                            <div className='but5'>
                                <button className='but3'>Buy Now</button>
                                <button className='but4'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:'Thermosteel Hot&Cold Water Bottle ',title: 'MILTON BLISS 900 Thermosteel Vaccum Insulated ',price:1599}})}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
         
        </div>
    )
}
