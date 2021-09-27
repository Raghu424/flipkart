import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import StoreIcon from '@material-ui/icons/Store';
import { Link } from 'react-router-dom'
export default function Log() {
    return (
        <div className='log5'>
            
            <div className='log6'>
<Link to='/create'>
         <h6>New Customer?   Sign Up</h6>
         </Link>
            </div>
            <div className='log6'>
                <AccountCircleIcon className='more3'/>
                <p>My Profile</p>
                </div>
                <hr></hr>
                <div className='log6'>
                <StoreIcon className='more3'/>
                <p>Orders</p>
                </div>
                <hr></hr>
                <div className='log6'>
                <FavoriteIcon className='more3'/>
                <p>Withlist</p>
                </div>
                <hr></hr>
                <div className='log6'>
                <ConfirmationNumberIcon className='more3'/>
                <p>Rewads</p>
                </div>
                <hr></hr>
                <div className='log6'>
                <CardGiftcardIcon className='more3'/>
                <p>Gift Cards</p>
                </div>
        </div>
    )
}
