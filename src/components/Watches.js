import React from 'react'
import Flip from '../components/pictures/flip.png'
import B1 from '../components/pictures/w1.png'
import B2 from '../components/pictures/w2.png'
import B3 from '../components/pictures/w7.png'
import B4 from '../components/pictures/w4.png'
import B5 from '../components/pictures/w8.png'
import B6 from '../components/pictures/w9.png'
import B8 from '../components/pictures/w10.png'

// import Product from '../components/Product'
import './Watches.css'
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'
export default function Watches(id,price,title) {
    let dispatch=useDispatch()
    return (
       
        <div>
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
            <div className='deal1'>
                {/* <h4>Fashion Top Deals</h4> */}
                <div className='row4'>
                    <div className="row header__set4">
                        <div className='header__deal7'>
                            <img className="header__Today3" src={B1} />
                            <h6 className='set4'>LCS-8188 BLUE DIAL AND SILVER S </h6>
                            <h6>FUNCTIONING WATch BOYS watch</h6>
                            <img className='m4' src={Flip} />
                            <span>Upto 20% off + 10% </span>
                            <h6>specialprice:₹1139</h6>
                            <div className='but8'>
                                <button className='but7' >Buy Now</button>
                                <button className='but6' onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' FUNCTIONING WATCH BOYS WATCH ',title: 'LCS-8188 BLUE DIAL AND SILVER S',price:1139}})}>Add To Cart</button>
                            </div>
                        </div>

                        <div className='header__deal7'>
                            <img className="header__Today3" src={B2} />
                           
                            <h6 className='set4'>NEW STYLISH DIAL- PU STRAP</h6>
                            <h6> MEN Analog Watch - For Boys </h6>
                            <img className='m4' src={Flip} />
                            <span>Upto 70% off</span>
                            <h6>specialprice:₹739</h6>
                            <div className='but8'>
                                <button className='but7'>Buy Now</button>
                                <button className='but6'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' MEN Analog Watch - For Boys ',title:'NEW STYLISH DIAL- PU STRAP',price:499}})}>Add To Cart</button>
                            </div>
                        </div>
                        <div className='header__deal3'>
                            <img className="header__Today3" src={B4} />
                            <h6 className='set4'>216-Blue Sporty look Designer For </h6>
                            <h6>Boys And Men Analog Watch - For Men</h6>
                          
                            <img className='m4' src={Flip} />
                            <span>Upto 50% off</span>
                            <h6>specialprice:₹1439</h6>
                            <div className='but8'>
                                <button className='but7'>Buy Now</button>
                                    <button className='but6' onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:'Boys And Men Analog Watch - For Men',title:'216-Blue Sporty look Designer',price:899}})}>Add To Cart</button>
                            </div>


                        </div>
                        <div className='header__deal3'>
                            <img className="header__Today3" src={B3} />
                           
                            <h6 className='set4'>1170-BL-BR Unique New Day &   </h6>
                            <h6>Date Analog Watch - For Men</h6>
                            <img className='m4' src={Flip} />
                            <span>Upto 50% off</span>
                            <h6>specialprice:₹1439</h6>
                            <div className='but8'>
                                <button className='but7'>Buy Now</button>
                                <button className='but6'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:'Date Analog Watch - For Men',title:'1170-BL-BR Unique New Day',price:999}})}>Add To Cart</button>
                            </div>


                        </div>
                        <div className='header__deal7'>
                            <img className="header__Today3" src={B3} />
                            <h6 className='set4'>1170-BL-BR Unique New Day &   </h6>
                            <h6>Date Analog Watch - For Men</h6>
                            <img className='m4' src={Flip} />
                            <span>Upto 50% off</span>
                            <h6>specialprice:₹1439</h6>
                            <div className='but8'>
                                <button className='but7'>Buy Now</button>
                                <button className='but6'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:'Boys And Men Analog Watch - For Men',title:'216-Blue Sporty look Designer',price:499}})}>Add To Cart</button>
                            </div>


                        </div>
                       




                        <div className='header__deal3'>
                            <img className="header__Today3" src={B8} />
                            <h6 className='set4'>IWS Self Design Double Mink Blanket  </h6>
                            <img className='m4' src={Flip} />
                            <span>Upto 50% off</span>
                            <h6>specialprice:₹1439</h6>
                            <div className='but8'>
                                <button className='but7'>Buy Now</button>
                                <button className='but6'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:'MEN Analog Watch - For Boys ',title:'IWS Self Design Double Mink Blanket ',price:599}})}>Add To Cart</button>
                            </div>


                        </div>
                        <div className='header__deal3'>
                            <img className="header__Today3" src={B6} />
                            <h6 className='set4'>1164-BR Brown Day and Date Unique </h6>
                            <h6>New Analog Watch - For Men</h6>
                            <img className='m4' src={Flip} />
                            <span>Upto 50% off</span>
                            <h6>specialprice:₹1439</h6>
                            <div className='but8'>
                                <button className='but7'>Buy Now</button>
                                <button className='but6'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:'New Analog Watch - For Men',title:'1164-BR Brown Day and Date Unique',price:699}})}>Add To Cart</button>
                            </div>


                        </div>
                        <div className='header__deal3'>
                            <img className="header__Today3" src={B5} />
                            <h6 className='set4'>HMTG-G9052 Original Gold Plated </h6>
                            <h6> Chain Analog Watch - For Men</h6>
                            <img className='m4' src={Flip} />
                            <span>Upto 50% off</span>
                            <h6>specialprice:₹1439</h6>
                            <div className='but8'>
                                <button className='but7'>Buy Now</button>
                                <button className='but6'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' Chain Analog Watch - For Men',title:'HMTG-G9052 Original Gold Plated ',price:499}})}>Add To Cart</button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

    
