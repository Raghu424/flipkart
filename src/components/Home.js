import React from 'react'
import './Home.css'
import Home1 from '../components/pictures/home1.png'
import Home2 from '../components/pictures/home2.png'
import Home3 from '../components/pictures/home3.png'
import Home4 from '../components/pictures/home4.png'
import Home5 from '../components/pictures/home5.png'
import Home6 from '../components/pictures/home6.png'
import Home7 from '../components/pictures/home7.png'
import Home8 from '../components/pictures/home8.png'
import Home9 from '../components/pictures/home9.png'
import Pro1 from '../components/pictures/pro1.png'
import Pro2 from '../components/pictures/pro2.png'
import Pro3 from '../components/pictures/pro3.png'


import Deal1 from '../components/pictures/deal1.png'
import D1 from '../components/pictures/dic1.png'
import D2 from '../components/pictures/dis2.png'
import D3 from '../components/pictures/dis3.png'
import D4 from '../components/pictures/dis6.png'
import D5 from '../components/pictures/dis5.png'
import D6 from '../components/pictures/fur7.png'
import StarIcon from '@material-ui/icons/Star';
import { Link } from 'react-router-dom'
import Deal3 from '../components/pictures/deal3.png'
import Deal4 from '../components/pictures/deal4.png'
import Deal5 from '../components/pictures/tv2.png'
import Deal6 from '../components/pictures/w1.png'
import Deal7 from '../components/pictures/deal7.png'
import Top3 from '../components/pictures/Top3.png'




export default function Home() {
  return (

    <div className='home2'>
      <div className='home1'>

        <div className="row header__set4">

          <div className='header__deal1'>
            <Link to='./top'>
              <img className="header__Today1" src={Home1} />
              <h6 className='set3'>Top offers</h6>
            </Link>
          </div>

          <div className='header__deal2'>
            <Link to='./mobiles'>
              <img className="header__Today2" src={Home2} />
              <h6 className='set3'>Mobiles</h6>
            </Link>
          </div>


          <div className='h-2'>
            <div className='h-3'>
              
              <div class="dropdown">
                <img className="images" src={Home3} />
                <h6 className='set3'>Fashion</h6>
                
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
              <div class="dropdown">
                <img className="images" src={Home9} />
                <h6 className='set3'>Grocery</h6>
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
              <div class="dropdown">
                <img className="images" src={Home4} />
                <h6 className='set3'>Electronics</h6>
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
                    <a href="#"> pendrive</a>_
                  </Link>

                </div>
              </div>
              <div class="dropdown">
                <img className="images" src={Home5} />
                <h6 className='set3'>Home</h6>
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

              <div class="dropdown">
                <img className="images" src={Home6} />
                <h6 className='set3'>Appliances</h6>
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
              <div class="dropdown">
                <img className="images" src={Home8} />
                <h6 className='set3'>Toys</h6>
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

              

              {/* <div className='header__deal2'>
            <img className="header__Today2" src={Home7} />
            <h6 className='set3'>Travel</h6>
          </div> */}


            </div>
          </div>
        </div>
      </div>






      <div className="container-fluid">

        {/* carousel start */}
        <div className="coures" >
          <div id="imageCarousel" class="carousel slide " data-interval="1500" data-ride='carousel'>
            <div class="carousel-inner">

              <div class="carousel-item active">
                <img src={Pro1} class="img-responsive" />

              </div>

              <div class="carousel-item">
                <img src={Pro2} class="img-responsive" />

              </div>
              <div class="carousel-item">
                <img src={Pro3} class="img-responsive" />

              </div>



            </div>


          </div>
        </div>
      </div>



      <div className='h-1'>
        <div className='deal1'>
          <h3>Deals of the day</h3>
          <div className="row header__set4">
            <Link to='./laptop'>
              <div className='header__deal3'>
                <img className="header__1" src={Deal7} />
                <h5 className='set4'>Laptops</h5>
                <span className='set4'>Upto 20% off + 10% extra Off</span>
                <p className='set4'>Great savings</p>
              </div>
            </Link>
            <Link to='/blanket'>
              <div classnmae='r1'>
                <div className='header__deal3'>
                  <img className="header__7" src={Deal3} />
                  <h5 className='set4'>Blankets</h5>
                  <span className='set4'>Upto 70% off</span>
                  <p className='set4'> Super saver deal</p>

                </div>
              </div>
            </Link>

            <Link to='/television'>
              <div className='header__deal3'>
                <img className="header__2" src={Deal5} />
                <h5 className='set4'> Televisions Upto 48 Inches</h5>
                <span className='set4'>Upto 50% off</span>
                <p className='set4'>LG and more</p>

              </div>
            </Link>
            <Link to='/electronics'>
              <div className='header__deal3'>
                <img className="header__1" src={Deal4} />
                <h5 className='set4'>Electronics</h5>
                <span className='set4'>Upto 30% off</span>
                <p className='set4'>Super saver deal</p>
              </div>
            </Link>
            <Link to='/Watch'>
              <div className='header__4'>
                <img className="header__3" src={Deal6} />
                <h5 className='set4'>Watches</h5>
                <span className='set4'>10% Extra off</span>

              </div>
            </Link>
            <Link to='/Saree'>
              <div className='header__deal3'>
                <img className="header__1" src={Deal1} />
                <h5 className='set4'>Sarees</h5>
                <span className='set4'>Under 499</span>
                <p className='set4'>Davatra saree and more</p>
              </div>
            </Link>
            <Link to='/men'>
              <div className='header__deal'>
                <img className="header__Today7" src={Top3} />
                <h5 className='set4'>Styles for men</h5>
                <span className='set4'>Upto 30% off</span>
                <p className='set4'>Super saver deal</p>
              </div>
            </Link>
          </div>
        </div>

      </div>



      <div className='h-1'>
        <div className='deal1'>
          <h3>Discounts of the day</h3>
          <div className="row header__set5">
            <Link to='/pendrive'>
              <div className='home3'>
                <img className="header__1" src={D1} />
                <h5 className='set4'>Pendrives</h5>
                <span className='set4'>Upto 20% off +5%extra</span>
                <p className='set4'>Great savings</p>
              </div>
            </Link>
            <Link to='/pouch'>
              <div classnmae='r1'>
                <div className='home3'>
                  <img className="header__5" src={D3} />
                  <h5 className='set4'>Mobile pouches</h5>
                  <span className='set4'>Upto 70% off</span>
                  <p className='set4'>Super saver deal</p>

                </div>
              </div>
            </Link>

            <Link to='/bottle'>
              <div className='home3'>
                <img className="header__5" src={D5} />
                <h5 className='set4'> thermosteel bottle</h5>
                <span className='set4'>Upto 50% off</span>
                <p className='set4'>4,300 Ratings </p>

              </div>
            </Link>
            <Link to='/curten'>
              <div className='home3'>
                <img className="header__1" src={D4} />
                <h5 className='set4'>curtens for house</h5>
                <span className='set4'>Upto 30% off</span>
                <p className='set4'>Super saver deal</p>
              </div>
            </Link>
            <Link to='/furniture'>
              <div className='home3'>
                <img className="header__7" src={D6} />
                <h5 className='set4'>Furniture </h5>
                {/* <button className='b1'>4.7
                                    <StarIcon /></button> */}
                <span className='set4'>Shop Now</span>
                <p className='set4'>3,300 Ratings</p>

              </div>
            </Link>
            <Link to='/spray'>
              <div className='home3'>
                <img className="header__1" src={D2} />
                <h5 className='set4'>Deodorant Spray</h5>
                <span className='set4'>Under 199</span>
                <p className='set4'>Super saver deal</p>
              </div>

            </Link>


          </div>
        </div>

      </div>


    </div>
  )
}
