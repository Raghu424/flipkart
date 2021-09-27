import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import logo3 from '../components/pictures/logo3.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useSelector } from 'react-redux'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import More from '../components/More'
import Log from '../components/Log'
import 'tippy.js/themes/light.css'

export default function Header() {
    let basket=useSelector(state=>state.basket)
  console.log(basket);







  
    return (
        <div className='header'>
             <div clssame='header__main1'>
            
               <div className='header__logopart'>
               <Link to='/'>
               <img className='header__logo' src={logo3} alt='flipkart logo'/>
               </Link>
               <div className="header__main2">
                   
               <input className="header__search" type='text' placeholder="search for product brands and more"/>
               <div className='icon1'>
               <SearchIcon className='header__searchIcon'></SearchIcon>
               </div>
              
               <Link to='./login'>
              <div className='login1'>
              {/* <input className="login2" type='text' placeholder='Login'/> */}
              
              <div  className='login2'>
             <Tippy theme='light'
             
             content={<Log></Log>}interactive={true} >
            <h6>Login</h6>
              </Tippy>
              </div>
             
              </div>
            
             </Link>
             <div>
             <div className='more1'>
             <Tippy theme='light'
             
             content={<More></More>} interactive={true}>
              
                <span>More</span>
                </Tippy>
                <ExpandMoreIcon></ExpandMoreIcon>
              </div>
              </div>
              <Link to='./cart'>
              <div className="header__cart">
              <ShoppingCartIcon className="header__shoppingCartIcon"/>
              
                <span className='cart_count'>{basket.length}</span>
           <div>
                  <span className='cart_count1'>Cart</span>
                  </div>
              </div>
              </Link>
           
             </div>
             </div>
                </div> 

               


              
              
           
             
          
        </div>
    )
}
