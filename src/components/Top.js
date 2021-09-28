import React from 'react'
import './Top.css'
import Top1 from '../components/pictures/Top1.png'
import Top2 from '../components/pictures/Top2.png'
import Top3 from '../components/pictures/Top3.png'
import Top4 from '../components/pictures/top4.png'
import Top5 from '../components/pictures/top5.png'
import Top6 from '../components/pictures/top7.png'
import W1 from '../components/pictures/wash1.png'
import W2 from '../components/pictures/wash2.png'
import W3 from '../components/pictures/wash3.png'
import W4 from '../components/pictures/wash4.png'
import W5 from '../components/pictures/wash5.png'
import W6 from '../components/pictures/wash6.png'
export default function Top() {
    return (
        <div>
          <div className='deal1'>
        <h4>Fashion Top Deals</h4>
        <div className="row header__set4">
          <div className='header__deal3'>
            <img className="header__Today2" src={Top1} alt=""/>
            <h5 className='set4'>Half tee shirts</h5>
            <span>Upto 20% off + 10% extra Off</span>
            <p>Great savings</p>
          </div>
          <div className='header__deal3'>
            <img className="header__Today2" src={Top2} alt=""/>
            <h5 className='set4'>Full tee shirts</h5>
            <span>Upto 70% off</span>
            <p>Super saver deal</p>

          </div>

          <div className='header__deal3'>
            <img className="header__Today2" src={Top3} alt=""/>
            <h5 className='set4'>Model tee shirts</h5>
            <span>Upto 30% off</span>
            <p>Super saver deal</p>
          </div>
          <div className='header__deal3'>
            <img className="header__Today2" src={Top4} alt=""/>
            <h5 className='set4'> Modern bags</h5>
            <span>Upto 50% off</span>
            <p>Dell and more</p>

          </div>
          <div className='header__deal3'>
            <img className="header__Today2" src={Top5} alt=""/>
            <h5 className='set4'>Hand bags</h5>
            <span>10% Extra off</span>
            <p>@mind blowing discounts</p>
          </div>
          <div className='header__deal3'>
            <img className="header__Today2" src={Top6} alt=""/>
            <h5 className='set4'>Special Watches</h5>
            <span>Under 499</span>
            <p>Davatra saree and more</p>
          </div>


        </div>
        </div>
        <div className='deal1'>
        <h4>Deals On Washing Machines</h4>
        <div className="row header__set4">
          <div className='header__deal3'>
            <img className="header__Today2" src={W1} alt=""/>
            <h5 className='set4'>From 21999</h5>
            <span>Upto 20% off + 10% extra Off</span>
            <p>Great savings</p>
          </div>
          <div className='header__deal3'>
            <img className="header__Today2" src={W2}alt="" />
            <h5 className='set4'>From 23999</h5>
            <span>Upto 70% off</span>
            <p>Super saver deal</p>

          </div>

          <div className='header__deal3'>
            <img className="header__Today2" src={W3}alt="" />
            <h5 className='set4'>From 19998</h5>
            <span>Upto 30% off</span>
            <p>Super saver deal</p>
          </div>
          <div className='header__deal3'>
            <img className="header__Today2" src={W4}alt="" />
            <h5 className='set4'> From 25999</h5>
            <span>Upto 50% off</span>
            <p>Dell and more</p>

          </div>
          <div className='header__deal3'>
            <img className="header__Today2" src={W5} alt=""/>
            <h5 className='set4'>From 17999</h5>
            <span>10% Extra off</span>
            <p>@mind blowing discounts</p>
          </div>
          <div className='header__deal3'>
            <img className="header__Today2" src={W6} alt=""/>
            <h5 className='set4'>From 19999</h5>
            <span>Under 499</span>
            <p>Davatra saree and more</p>
          </div>


        </div>
        </div>
        </div>
    )
}
