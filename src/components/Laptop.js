import React from 'react'
import './Laptop.css'
import Flip from '../components/pictures/flip.png'
import Lap1 from '../components/pictures/lap1.png'
import Lap2 from '../components/pictures/lap2.png'
import Lap3 from '../components/pictures/lap3.png'
import Lap4 from '../components/pictures/lap4.png'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux';
export default function Laptop(id,price,title) {
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

                        <img className='m10' src={Lap1} />


                        <div className='l1'>
                            <h6>acer Aspire 7 Ryzen 5 Quad Core 3550H   </h6>
                            <h6>(8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics)</h6>
                            <li>   NVIDIA GeForce GTX 1650</li>
                            <li>  15.6 inch Full HD LED Backlit IPS ComfyView  </li>
                            <li>   Display 16:9 Aspect Ratio</li>
                            <li> Light Laptop without Optical Disk Drive</li>
                            <li>   Pre-installed Genuine Windows 10 OS</li>
                        </div>
                        <div className='m3'>
                            <img className='m4' src={Flip} />
                            <h4>₹56,999 </h4>
                            <h6>  ₹61,999 22% </h6>
                            <span>Upto 15,000 off on Exchange</span>
                            <div>
                                <button className='but1' onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' Acer Laptop ',title: 'acer Aspire 7 Ryzen 5 Quad Core 3550H   ',price:56999}})}>Add To Cart</button>
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
                        <img className='m1' src={Lap2} />


                        <div className='l1'>
                            <h6>ASUS VivoBook 14 Ryzen 5 Hexa Core</h6>
                            <h6>(8 GB/512 GB SSD/Windows 10 Home)</h6>

                            <li>   Stylish & Portable Thin and Light Laptop</li>
                            <li>    14 inch Full HD LED Backlit Anti-glare Display </li>
                            <li>    Finger Print Sensor for Faster System Access</li>
                            <li>    Light Laptop without Optical Disk Drive</li>

                        </div>
                        <div className='m3'>
                            <img className='m4' src={Flip} />
                            <h4>₹49,999 </h4>
                            <h6>  ₹54,999 27% </h6>
                            <span>Upto 5,000 off on Exchange</span>
                            <div>
                                <button className='but1'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' ASUS  vivobook Laptop ',title: 'ASUS VivoBook 14 Ryzen 5 Hexa Core 4500U   ',price:49999}})}>Add To Cart</button>
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
                        <img className='m1' src={Lap3} />


                        <div className='l1'>
                            <h6>HP 14s Core i3 11th Gen(256 GB SSD)</h6>
                            <h6>   (14 inch, Natural Silver, 1.46 kg)</h6>
                            <li>  Stylish & Portable Thin and Light Laptop</li>
                            <li>   14 inch Full HD WLED Backlit, IPS BrightView   </li>
                            <li>   250 nits Brightness, 45% NTSC Color Gamut, 157 PPI</li>
                            <li>   Light Laptop without Optical Disk Drive</li>

                        </div>
                        <div className='m3'>
                            <img className='m4' src={Flip} />
                            <h4>₹47,999 </h4>
                            <h6>  ₹50,999 17% </h6>
                            <span>Upto 2,000 off on Exchange</span>
                            <div>
                                <button className='but1'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' HP Laptop ',title: 'HP 14s Core i3 11th Gen(8 GB/256 GB SSD/Windows 10 Home)   ',price:47999}})}>Add To Cart</button>
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
                        <img className='m1' src={Lap4} />


                        <div className='l1'>
                            <h6> Lenovo IdeaPad Core i3 10th Gen</h6>
                            <h6>   (8 GB/256 GB SSD/Windows 10 Home) </h6>
                          
                          <li>  Stylish & Portable Thin and Light Laptop</li> 
                          <li>  14 Inch Full HD LED Backlit, Anti-Glare </li> 
                          <li> Display (220 nits Brightness)</li> 
                           
                          <li>  Light Laptop without Optical Disk Drive</li> 

                        </div>
                        <div className='m3'>
                            <img className='m4' src={Flip} />
                            <h4>₹58,999 </h4>
                            <h6>  ₹63,999 27% </h6>
                            <span>Upto 5,000 off on Exchange</span>
                            <div>
                                <button className='but1'onClick={()=>dispatch({type:'ADD_TO_CART',item:{id:' Lenovo Laptop ',title: 'Lenovo IdeaPad Core i3 10th Gen',price:58999}})}>Add To Cart</button>
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
