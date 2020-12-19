/* eslint-disable */
import { connect } from 'react-redux'
import Cart from "../Cart/Cart"
import {removeToCart,clearToCart} from '../Services/Actions/actions'

const mapStateToProps = state =>{
    return {
        data:state.cartItem
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        removeToCartHandler:data => dispatch(removeToCart(data)),
        clearToCartHandler:data => dispatch(clearToCart(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
//export default Dashboard