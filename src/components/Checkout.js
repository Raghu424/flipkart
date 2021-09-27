
import './Checkout.css'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { useDispatch } from 'react-redux';
import '../components/Cart'

export default function CheckOut({ id, image, title, price }) {

    let dispatch = useDispatch();
    return (

        <div className='check__A'>

{/* 
            <div className='check__AA'>
               <h6 className='B'>{id}</h6>

            </div> */}
            {/* <span className = 'main__4'> {image}</span><br></br>  */}

            <div className='main__4'>
                <img src={image} />
            </div>

            <div className='check__details'>

                <span className='check__AK'> {title}</span><br></br>
                <div className='check__AA'>
               <h6 className='B'>{id}</h6>

            </div>

                <span className='check__A1'>Price : ₹ {price}</span><br></br>
                Rating
                <div className='check__star'> <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /></div>
                <button className='checkout__product__btn' onClick={() => dispatch({ type: "REMOVE__PRODUCT", id: id })}>Remove from cart</button>



            </div>

        </div>
    )
}