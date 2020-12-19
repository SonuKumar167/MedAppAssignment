import { act } from 'react-dom/test-utils';
import { ADD_TO_CART, REMOVE_TO_CART, CLEAR_TO_CART} from '../constants'
const initialState = {
  cartData :[]
}
export default function cartItem(state = [], action){
   switch (action.type) {
       case ADD_TO_CART:
           fetch('http://localhost:6021/AddToCart?itemId='+action.data.id+'&userId='+sessionStorage.getItem('userID')).then(res => res.json());
           return [
               ...state,
               {cartData: action.data}
            ]
        case REMOVE_TO_CART:
            fetch('http://localhost:6021/RemoveToCart?itemId='+action.data.id.cartData.id+'&userId='+sessionStorage.getItem('userID')).then(res => res.json());
            state.splice(action.data.index,1)
            return [
                ...state
            ]
        case CLEAR_TO_CART:
            state = [];
            return [
                ...state
            ]
       default:
           return state
          
   }
}