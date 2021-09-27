import React from 'react'
import './Electronics.css'
import Flip from '../components/pictures/flip.png'
import E1 from '../components/pictures/e1.png'
import E2 from '../components/pictures/e2.png'
import E3 from '../components/pictures/e5.png'
import E4 from '../components/pictures/e4.png'
import { Link } from 'react-router-dom'
import E6 from '../components/pictures/e6.png'
import {useDispatch} from 'react-redux';
export default function Electronics(id,price,title) {
    let dispatch=useDispatch()
    return (
        <div className='home2'>
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
            <div className='row1'>
                <div className='.col1'>
                    <div className='mob1'>

                        <img className='e1' src={E1} />


                        <div className='l1'>
                            <h6>Butterfly Rapid Plus 750 W Mixer Grinder (5 Jars, Ink Blue)</h6>
                            
                            <li> Centrifugal Juicer : Easy and quick juicing, fruits and veggies</li>
                            <li> 750 W : Higher the Wattage, tougher the Juicing/Grinding</li>
                            <li>  1 Mixer Grinder, 3 Jars with Blades </li>
                            <li> Lid, Spatula, User Manual, Warranty Card</li>
                            <li> Power Required:AC 230 V, 50 Hz</li>

                        </div>
                        <div className='m3'>
                            <img className='m4' src={Flip} />
                            <h4>₹2,999 </h4>
                            <h6>  ₹3,799 20% </h6>
                            <span>Upto 700 off on Exchange</span>
                            <div>
                                <button className='but1' onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' Latest mixer grinder',title: 'Butterfly Rapid Plus 750 W Mixer Grinder',price:2999}})}>Add To Cart</button>
                            </div>
                            <div>
                                <button className='but2'>Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='row2'>
                <div className='.col1'>
                    <div className='mob1'>
                        <img className='e2' src={E2} />


                        <div className='l2'>
                            <h6>NKZ HT 2021 Hair Beard and Moustache Hair Cutting</h6>
                         

                            <li>  1 shaver with attachment,oil bottle,brush</li>
                            <li>   HT 2021 Hair Beard and Moustache Hair Cutting </li>
                            <li>   Pop Up Trimmer</li>
                            <li>    Waterproof</li>

                        </div>
                        <div className='m3'>
                            <img className='m4' src={Flip} />
                            <h4>₹999 </h4>
                            <h6>  ₹1499 27% </h6>
                            <span>Upto 2,000 off on Exchange</span>
                            <div>
                                <button className='but1' onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' Latest Shaving kit for men',title: 'NKZ HT 2021 Hair Beard and Moustache Hair Cutting',price:999}})}>Add To Cart</button>
                            </div>
                            <div>
                                <button className='but2'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='row2'>
                <div className='.col1'>
                    <div className='mob1'>
                        <img className='e3' src={E3} />


                        <div className='l4'>
                            <h6>SAMSUNG 198 L Direct Cool Single Door 4 Star Refrigerator</h6>
                           
                            <li>198 L : Good for couples and small families</li>
                            <li>  Digital Inverter Compressor</li>
                            <li>      4 Star : For Energy savings up to 45%</li>
                            <li>  Direct Cool : Economical, consumes less electricity</li>
                            <li> Base Stand with Drawer : For storing items  (Onion, Potato etc.)</li>

                        </div>
                        <div className='m3'>
                            <img className='m4' src={Flip} />
                            <h4>₹17,999 </h4>
                            <h6>  ₹20,999 17% </h6>
                            <span>Upto 2,000 off on Exchange</span>
                            <div>
                                <button className='but1'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' Latest Refrigeretor for house hold',title:'SAMSUNG 198 L Direct Cool Single Door 4 Star Refrigerator',price:17999}})}>Add To Cart</button>
                            </div>
                            <div>
                                <button className='but2'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row2'>
                <div className='.col1'>
                    <div className='mob1'>
                        <img className='e6' src={E6} />


                        <div className='l3'>
                            <h6>Hindware 85 L Desert Air Cooler </h6>
                           
                            <li> Cooling Area: 450 sqft</li>
                            <li>  Air Throw: 40 ft</li>
                            <li> Height: 1100 mm</li>
                            <li>  Tank Capacity: 85 L</li>
                            <li>  Power Consumption - Cooling: 200 W</li>

                            <li>  Type: Desert</li>
                        </div>
                        <div className='m3'>
                            <img className='m4' src={Flip} />
                            <h4>₹7,999 </h4>
                            <h6>  ₹10,999 17% </h6>
                            <span>Upto 2,000 off on Exchange</span>
                            <div>
                                <button className='but1'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:'House Hold coolers',title:'Hindware 85 L Desert Air Cooler',price:7999}})}>Add To Cart</button>
                            </div>
                      <div>
                                <button className='but2'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row2'>
                <div className='.col1'>
                    <div className='mob1'>
                        <img className='e4' src={E4} />


                        <div className='l3'>
                            <h6>IFB 30 L Convection Microwave Oven  (30FRC2, Black)</h6>
                          <li> 30 L : Great for Large families</li> 
                          <li> Convection : Can be used for baking 
                            
                              and cooking</li> 
                             <li>   Touch Key Pad (Membrane) is sensitive </li> 
                            <li>  Child Lock : Ensures complete safety 
                              </li> 

                        </div>
                        <div className='m3'>
                            <img className='m4' src={Flip} />
                            <h4>₹12,999 </h4>
                            <h6>  ₹15,999 27% </h6>
                            <span>Upto 5,000 off on Exchange</span>
                            <div>
                                <button className='but1'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' Latest Microwave oven',title:'IFB 30 L Convection Microwave Oven  (30FRC2, Black)',price:12999}})}>Add To Cart</button>
                            </div>
                            <div>
                                <button className='but2'>Buy Now</button>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    )
}
