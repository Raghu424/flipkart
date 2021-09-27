import React from 'react'
import './Product.css'

import {useDispatch} from 'react-redux'

function Product({id , image , title , Price }) {
    let dispatch = useDispatch();
    return (
        <div className="pol-3">
            <div className="pol-1">
            <img className="prd__img" src={image}/><br></br>
            </div>
            <div className="pol-2">
            <span>{title}</span><br></br>
            <b><span className="pri">Price:{Price}</span></b><br></br>
            <b><span>{id}</span></b><br></br>
            
            </div>
           
          <button className="but" onClick= {()=> dispatch({type : 'ADD_TO_CART', item :{ image : image , title : title , Price :Price , id:id}})}>Add to Cart</button>
      </div>
    )
}

export default Product
