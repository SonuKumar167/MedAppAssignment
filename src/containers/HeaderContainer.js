/* eslint-disable */
import { connect } from 'react-redux'
import Header from "../Header/Header"

const mapStateToProps = state =>{
    return {
        data:state.cartItem
    }
}
const mapDispatchToProps = dispatch =>{
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)
//export default Dashboard