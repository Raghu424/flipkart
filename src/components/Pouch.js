import React from 'react'
import './Pouch.css'
import B1 from '../components/pictures/pou1.png'
import B2 from '../components/pictures/pou2.png'
import B3 from '../components/pictures/pou3.png'
import B4 from '../components/pictures/pou7.png'
import B5 from '../components/pictures/pou5.png'
import B6 from '../components/pictures/pou6.png'
import Flip from '../components/pictures/flip.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
export default function Pouch(id, price, title, image) {
    let dispatch = useDispatch()
    return (
        <div className='home2'>
          


          <div className='tel'>
                <div className='tv'>
                    <div class="dropdown">
                        <h6 className='E2'>Electronics</h6>

                        <div class="dropdown-content">
                            <Link to='/television'>
                                <p>Televisions</p>
                            </Link>
                            <Link to='men'>
                                <p>Styles for men </p>
                            </Link>

                            <Link to='saree'>
                                <p>Styles for women</p>
                            </Link>
                            <Link to='spray'>
                                <p> Deodrant Sprays</p>
                            </Link>
                            <Link to='/watch'>
                                <p>watches</p>
                            </Link>
                            <Link to='mobiles'>

                                <p>Mobiles</p>
                            </Link>
                            <Link to='curten'>
                                <p>Curtens</p>
                            </Link>
                            <Link to='electronics'>
                                <p>Electronics</p>
                            </Link>
                            <Link to='pouch'>
                                <p>Mobile Pouches</p>
                            </Link>
                            <Link to='pendrive'>
                                <p> pendrive</p>
                            </Link>

                        </div>
                    </div>
                    <div className='tv'>

                        <div class="dropdown">
                            <h6 className='E2'>Tvs and Appliances</h6>

                            <div class="dropdown-content">
                                <Link to='/television'>
                                    <p>Televisions</p>
                                </Link>
                                <Link to='men'>
                                    <p>Styles for men </p>
                                </Link>

                                <Link to='saree'>
                                    <p>Styles for women</p>
                                </Link>
                                <Link to='spray'>
                                    <p> Deodrant Sprays</p>
                                </Link>
                                <Link to='/watch'>
                                    <p>watches</p>
                                </Link>
                                <Link to='mobiles'>

                                    <p>Mobiles</p>
                                </Link>
                                <Link to='curten'>
                                    <p>Curtens</p>
                                </Link>
                                <Link to='electronics'>
                                    <p>Electronics</p>
                                </Link>
                                <Link to='pouch'>
                                    <p>Mobile Pouches</p>
                                </Link>
                                <Link to='pendrive'>
                                    <p> pendrive</p>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='tv'>

                        <div class="dropdown">
                            <h6 className='E2'>Women</h6>

                            <div class="dropdown-content">
                                <Link to='/television'>
                                    <p>Televisions</p>
                                </Link>
                                <Link to='men'>
                                    <p>Styles for men </p>
                                </Link>

                                <Link to='saree'>
                                    <p>Styles for women</p>
                                </Link>
                                <Link to='spray'>
                                    <p> Deodrant Sprays</p>
                                </Link>
                                <Link to='/watch'>
                                    <p>watches</p>
                                </Link>
                                <Link to='mobiles'>

                                    <p>Mobiles</p>
                                </Link>
                                <Link to='curten'>
                                    <p>Curtens</p>
                                </Link>
                                <Link to='electronics'>
                                    <p>Electronics</p>
                                </Link>
                                <Link to='pouch'>
                                    <p>Mobile Pouches</p>
                                </Link>
                                <Link to='pendrive'>
                                    <p> pendrive</p>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='tv'>

                        <div class="dropdown">
                            <h6 className='E2'>Men</h6>

                            <div class="dropdown-content">
                                <Link to='/television'>
                                    <p>Televisions</p>
                                </Link>
                                <Link to='men'>
                                    <p>Styles for men </p>
                                </Link>

                                <Link to='saree'>
                                    <p>Styles for women</p>
                                </Link>
                                <Link to='spray'>
                                    <p> Deodrant Sprays</p>
                                </Link>
                                <Link to='/watch'>
                                    <p>watches</p>
                                </Link>
                                <Link to='mobiles'>

                                    <p>Mobiles</p>
                                </Link>
                                <Link to='curten'>
                                    <p>Curtens</p>
                                </Link>
                                <Link to='electronics'>
                                    <p>Electronics</p>
                                </Link>
                                <Link to='pouch'>
                                    <p>Mobile Pouches</p>
                                </Link>
                                <Link to='pendrive'>
                                    <p> pendrive</p>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='tv'>

                        <div class="dropdown">
                            <h6 className='E2'>Home Furniture</h6>

                            <div class="dropdown-content">
                                <Link to='/television'>
                                    <p>Televisions</p>
                                </Link>
                                <Link to='men'>
                                    <p>Styles for men </p>
                                </Link>

                                <Link to='saree'>
                                    <p>Styles for women</p>
                                </Link>
                                <Link to='spray'>
                                    <p> Deodrant Sprays</p>
                                </Link>
                                <Link to='/watch'>
                                    <p>watches</p>
                                </Link>
                                <Link to='mobiles'>

                                    <p>Mobiles</p>
                                </Link>
                                <Link to='curten'>
                                    <p>Curtens</p>
                                </Link>
                                <Link to='electronics'>
                                    <p>Electronics</p>
                                </Link>
                                <Link to='pouch'>
                                    <p>Mobile Pouches</p>
                                </Link>
                                <Link to='pendrive'>
                                    <p> pendrive</p>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='tv'>

                        <div class="dropdown">
                            <h6 className='E2'>Mobiles</h6>

                            <div class="dropdown-content">
                                <Link to='/television'>
                                    <p>Televisions</p>
                                </Link>
                                <Link to='men'>
                                    <p>Styles for men </p>
                                </Link>

                                <Link to='saree'>
                                    <p>Styles for women</p>
                                </Link>
                                <Link to='spray'>
                                    <p> Deodrant Sprays</p>
                                </Link>
                                <Link to='/watch'>
                                    <p>watches</p>
                                </Link>
                                <Link to='mobiles'>

                                    <p>Mobiles</p>
                                </Link>
                                <Link to='curten'>
                                    <p>Curtens</p>
                                </Link>
                                <Link to='electronics'>
                                    <p>Electronics</p>
                                </Link>
                                <Link to='pouch'>
                                    <p>Mobile Pouches</p>
                                </Link>
                                <Link to='pendrive'>
                                    <p> pendrive</p>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row3'>
                <div className="row header__set4">
                    <div className='header__deal3'>
                        <img className="header__Today7" src={B1} alt=""/>
                        <h6 className='set4'>mobom Back Cover for Oppo A5 2020 </h6>
                        <h6>(Transparent, Dual Protection, Silicon)</h6>
                        <img className='m4' src={Flip} alt=""/>

                        <h6>₹179   77% off

                            Hurry, Only 3 left!</h6>
                        <div className='but5'>
                            <button className='but3' >Buy Now</button>
                            <button className='but4' onClick={() => dispatch({ type: 'ADD_TO_CART', item: { id: ' Mobile Pouches ', title: 'mobom Back Cover for Oppo A5 2020', price: 179 } })}>Add To Cart</button>
                        </div>
                    </div>

                    <div className='header__deal3'>
                        <img className="header__Today7" src={B2} alt=""/>
                        <h6 className='set4'>mobom Back Cover for Vivo V20 Pro  </h6>
                        <h6>(Multicolor, Dual Protection, Silicon)</h6>

                        <img className='m4' src={Flip} alt=""/>
                        <h6>₹199   77% off

                            Hurry, Only 10 left!</h6>

                        <div className='but5'>
                            <button className='but3'>Buy Now</button>
                            <button className='but4' onClick={() => dispatch({ type: 'ADD_TO_CART', item: { id: '  Mobile Pouches', title: 'mobom Back Cover for Vivo V20 Pro  ', price: 199 } })}>Add To Cart</button>
                        </div>
                    </div>
                    <div className='header__deal3'>
                        <img className="header__Today7" src={B4}alt="" />
                        <h6 className='set4'>mobom Back Cover for Vivo Y19, Vivo U20  </h6>
                        <h6> (Transparent, Dual Protection, Silicon)</h6>
                        <img className='m4' src={Flip}alt="" />
                        <span>Upto 50% off</span>
                        <h6>₹179   77% off

                            Hurry, Only 5 left!</h6>
                        <div className='but5'>
                            <button className='but3'>Buy Now</button>
                            <button className='but4' onClick={() => dispatch({ type: 'ADD_TO_CART', item: { id: ' Mobile Pouches ', title: 'mobom Back Cover for Vivo Y19, Vivo U20  ', price: 179 } })}>Add To Cart</button>
                        </div>


                    </div>

                    <div className='header__deal3'>
                        <img className="header__Today7" src={B6} alt=""/>
                        <h6 className='set4'>mobom Back Cover for Oppo A53</h6>
                        <h6 >(Multicolor, Dual Protection, Silicon)</h6>
                        <img className='m4' src={Flip} alt=""/>
                        <h6>₹149   50% off

                            Hurry, Only 1 left!</h6>
                        <div className='but5'>
                            <button className='but3'>Buy Now</button>
                            <button className='but4' onClick={() => dispatch({ type: 'ADD_TO_CART', item: { id: '  Mobile Pouches ', title: 'mobom Back Cover for Oppo A53', price: 149 } })}>Add To Cart</button>
                        </div>
                    </div>




                    <div className='header__deal3'>
                        <img className="header__Today7" src={B5} alt=""/>
                        <h6 className='set4'>mobom Back Cover for Samsung Galaxy F41</h6>
                        <h6 >(Multicolor, Dual Protection, Silicon)</h6>
                        <img className='m4' src={Flip} alt=""/>
                        <h6>₹179   77% off

                            Hurry, Only 3 left!</h6>
                        <div className='but5'>
                            <button className='but3'>Buy Now</button>
                            <button className='but4' onClick={() => dispatch({ type: 'ADD_TO_CART', item: { id: ' Mobile Pouches ', title: 'mobom Back Cover for Samsung Galaxy F41', price: 179 } })}>Add To Cart</button>
                        </div>
                    </div>
                    <div className='header__deal3'>
                        <img className="header__Today7" src={B3} alt=""/>
                        <h6 className='set4'>mobom Back Cover for Vivo Y50 </h6>
                        <h6 >(Multicolor, Dual Protection, Silicon)</h6>
                        <img className='m4' src={Flip} alt=""/>
                        <h6>₹199   67% off

                            Hurry, Only 3 left!</h6>
                        <div className='but5'>
                            <button className='but3'>Buy Now</button>
                            <button className='but4' onClick={() => dispatch({ type: 'ADD_TO_CART', item: { id: ' Mobile Pouches ', title: 'mobom Back Cover for Vivo Y50 ', price: 199 } })}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}
