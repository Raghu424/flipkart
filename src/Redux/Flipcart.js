import { createStore } from 'redux'

let initialState={
    basket :[],
    user :null
}

function reducer( state=initialState , action ){
    switch(action.type){
        case 'ADD_TO_CART' :
            return {...state , basket : [...state.basket,action.item] } 
            case 'EMPTY_BASKET' :

                    return {

                        ...state,

                        basket : []

                    }
        case"REMOVE__PRODUCT":
        let newBasket=[...state.basket]
        let index=newBasket.findIndex(item=>item.id===action.id)
        newBasket.splice(index,1);
        if(index>=0){
            newBasket.splice(index,1);
        }
        else{
            console.warn(`can't remove product id ${action.id} as it is not in baskets!`)
        }
        return {...state,basket:newBasket } 
        case'SET_USER':
        return{...state,user:action.user}
        default : 
          return state;
    }
}

let azStore=createStore(reducer);

export default azStore;
