import './Footer1.css'
import React from 'react'
import {Link} from 'react-router-dom';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GetAppIcon from '@material-ui/icons/GetApp';
function Footer1(){
    return(
        <div className='Footer_main'>
            <Link to = 'Foot'><h5 className = 'Footer'>Back to top</h5><br></br></Link> 
         <div className = 'Footer__1'>
        
             <p className = 'Footer__p1'>Get to Know Us <br></br>
                About Us<br></br>
                Careers<br></br>
                Press Releases<br></br>
                Amazon Cares<br></br>
                Gift a Smile</p>

                <p className = 'Footer__p2'>
                Connect with Us<br></br>
                Facebook<br></br>
                Twitter<br></br>
                Instagram

                </p>
                <p className = 'Footer__p3'>
                Make Money with Us<br></br>
                Sell on Amazon<br></br>
                Sell under Amazon Accelerator<br></br>
                Amazon Global Selling<br></br>
                Become an Affiliate<br></br>
                Fulfilment by Amazon<br></br>
                Advertise Your Products<br></br>
                Amazon Pay on Merchants<br></br>
                </p>
                <p className = 'Footer__p4'>
                Let Us Help You<br></br>
                COVID-19 and Amazon<br></br>
                Your Account<br></br>
                Returns Centre<br></br>
                100% Purchase Protection<br></br>
                Amazon App Download<br></br>
                Amazon Assistant Download<br></br>
                Help<br></br>

                </p>
         </div>
         <hr className='f1'></hr>
         <div className='f3'>
         <div className='f2'>
                <NotificationsIcon className='f4'/>
                <p className='f5'>Notitification</p>
               
            </div>
            <hr></hr>
            <div className='f2'>
                <MonetizationOnIcon className='f4'/>
                <p className='f5'>Sell on Flipcart</p>
            </div>
            <hr></hr>
            <div className='f2'>
                <LiveHelpIcon className='f4'/>
                <p className='f5'>24*7 Customer Care</p>

            </div>
            <hr></hr>
            <div className='f2'>
                <TrendingUpIcon className='f4'/>
                <p className='f5'>Advertise</p>

            </div>
            <hr></hr>
            <div className='f2'>
                <GetAppIcon className='f4'/>
                <p className='f5'>Download App</p>
            </div>
            </div>
        </div>

    )
} 
export default Footer1;