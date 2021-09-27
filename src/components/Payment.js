import './Payment.css'
import {db} from '../firebase'
import { v4 as uuidv4 } from 'uuid';
import {useSelector} from 'react-redux'
import CheckOut from '../components/Checkout';
import { Title } from '@material-ui/icons';
import { Link ,useHistory} from 'react-router-dom'



export default function Payment(){
    let basket = useSelector(state=>state.basket);
    let user = useSelector(state=> state.user);
   
    
    let buyProduct = (event) => {

        event.preventDefault();
        // console.log('*******');
        //        console.log(user.uid);
        //      console.log(db);
        //    const users= db.collection('users');
        //  console.log(users);

        let paymentId = uuidv4();
        db.collection('users').doc(user?.uid).collection('orders').doc(paymentId).set({
            basket: basket
            // amout: getBasketTotal(basket) * 100
        })
        console.log("after payment");
        alert('payment is sucessful')
       
    }
  



    

    console.log(basket);

     let checkOutDet = basket.map(item => <CheckOut id = {item.id} title = {item.title} price= {item.price} />)



    return(
        <div className="carthead container">
            <div className="carttop ">
            <div >
           
            </div>
            <div > 
                <div className='cart__pay'>
                   
                
                </div>
                <h4>Your Amazon Cart is empty</h4>
                <p>Shop today's deals</p>
                <button className="cartsignbutton">Sign in your account</button>
                <button className="cartsignbutton">Signup now</button>
            </div>
            </div>
            
            <div>
                <small>The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Shopping CartLearn more

                    Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</small>

                   
            </div>
            
            <button onClick={buyProduct}>click here</button>
            
            <Link to='./home'>
                </Link>
             <div> {checkOutDet}</div> 
  
           
        </div>
        
    )
}