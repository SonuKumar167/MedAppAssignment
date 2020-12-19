/* eslint-disable */
import { connect } from 'react-redux'
import Dashboard from "../Dashboard/Dashboard"
import {addToCart} from '../Services/Actions/actions'

const mapStateToProps = state =>{
    return {
        data:state.cartItem
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        addToCartHandler:data=>dispatch(addToCart(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
