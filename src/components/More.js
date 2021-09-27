import React from 'react'
import './More.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GetAppIcon from '@material-ui/icons/GetApp';
export default function More() {
    return (
        <div className='more'>
            <div className='more2'>
                <NotificationsIcon className='more3'/>
                <p>Notitification prefarences</p>
               
            </div>
            <hr></hr>
            <div className='more2'>
                <MonetizationOnIcon className='more3'/>
                <p>Sell on Flipcart</p>
            </div>
            <hr></hr>
            <div className='more2'>
                <LiveHelpIcon className='more3'/>
                <p>24*7 Customer Care</p>

            </div>
            <hr></hr>
            <div className='more2'>
                <TrendingUpIcon className='more3'/>
                <p>Advertise</p>

            </div>
            <hr></hr>
            <div className='more2'>
                <GetAppIcon className='more3'/>
                <p>Download App</p>
            </div>
            <hr></hr>
        </div>
    )
}
