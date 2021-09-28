// import React,{useState } from 'react'

import './Login.css';
import pro4 from '../components/pictures/pro4.png'
import { Link} from 'react-router-dom'
// import {auth} from '../firebase'
export default function Login() {
//     let [email, setEmail] = useState('')

//     let [password, setPassword] = useState('')

//     const history = useHistory();




//     let register = (event) => {

//         event.preventDefault();

//         // alert(email +" "+password);

    //     auth.createUserWithEmailAndPassword(email, password)

    //         .then((authResponce) => {

    //             if (authResponce) {

    //                 history.push('/');

    //             }

    //         })

    //         .catch((errorresponse) => {

    //             alert('Error');

    //             console.log(errorresponse);

    //         })

    // }
    return (
        <div>
            <div className='log1'>
                <h3>Login</h3>
                <h6>
                    Get access to your
                    Orders, Wishlist and
                    Recommendations
                </h6>
                <div className='log3' >
                    <img className='log4' src={pro4} alt=""/>
                </div>
            </div>


            <div className='log2'>


                <div class="a1">
                    <div class="card-body">
                        <p className="a_1">Sign-In</p>
                        {/* <p class="card-text"><b className='mx-auto d-block account__toptext'>Enter email or mobile number</b></p>

                    <input type='text' className='a2'/>

                    <div>
                    <p class="card-text"><b className='a3'>Password</b></p>

                    <input type='text' className='a4'/>

                    </div> */}
                        <form class="w3-container">


                            <input class="w3-input" type="text"/><br></br>
                            <input class="w3-input" type="text"  placeholder="Enter your Password" />
                        </form>
                        <p className='account__text'>By continuing, you agree to Term's <p>Conditions of Use</p> and <p>Privacy Notice</p></p>
                        <summary className='account__text1'><p>Need help?</p></summary>
                        <div >

                            <button className="a5">Login</button>
                            <button >Create new account</button>
                        </div>
                        <span>OR</span>
                        <div>


                            <button className='c6'>Request OTP</button>
                        </div>
                        <div className="a7">
                            <Link to='create'>
                                <span>New to flipcart?create an account</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
