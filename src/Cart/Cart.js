import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import HeaderContainer from "../containers/HeaderContainer";
import '../Dashboard/Dashboard.css';
const customStyles = {
    content : {
      top                   : '30%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')
function Cart(props){
    const history = useHistory();
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
      setIsOpen(false);
      props.clearToCartHandler();
      history.push("/Dashboard");
    }
    const cartList = props.data;
    const totalPayAmount = cartList.reduce((amount, cartList) => amount + cartList.cartData.minPrice, 0);
    //const userID = sessionStorage.getItem("userID");
    const [msg,setMsg] = useState("");
   
    return(
        <>
             <HeaderContainer /> 
             <p className="NoData">{msg}</p> 
             <div className="container-fluid">
                 <h4 className="title">Dashboard / Your Cart</h4>
                <div className="row">
                    <div className="col-sm-8">
                        <div className="prd_border">
                           <h5 className="title text-center">Cart List</h5>
                           <table className="table table-table-responsive">
                             <thead>
                              <tr>
                                <th>Test Name</th>
                                <th>Test Type</th>
                                <th>Price</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                            {props.data?props.data.map(((item, index) => (
                              <tr key={index}>
                                  <td>{item.cartData.itemName}</td>
                                  <td>{item.cartData.keyword}</td>
                                  <td>{item.cartData.minPrice}</td>
                                  <td><button type="button" className="btn btn-sm btn-default btn_css" onClick={ () => props.removeToCartHandler({"index":index,"id":item})}>Remove to Cart</button></td>
                               </tr>
                             ))):""}
                            </tbody>
                          </table>
                        </div>
                    </div>
                    <div className="col-sm-4">
                       <div className="prd_border text-center">
                         <h5 className="title">Cart Details</h5>
                         <h6 className="title">Total Item : {props.data.length}</h6>
                         <h6>Total Amount : {totalPayAmount}</h6>
                         <h6>GST 2% : 50</h6>
                         <h6>Delivery Charge : 45</h6>
                         <hr className="line" />
                         <h6>Total Pay Amount : {totalPayAmount + 95}</h6>
                         <button className="btn btn-sm btn-default btn_css" onClick={openModal}>Proceed to checkout</button>
                        </div>
                    </div>
                </div>
             </div>
             <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
               <h6 className="title text-center modal_title"> Your Order Successfully Placed</h6>
               <div className="text-center">
               <table className="table table-condensed table-responsive">
                             <thead>
                              <tr>
                                <th>Test Name</th>
                                <th>Price</th>
                              </tr>
                            </thead>
                            <tbody>
                            {props.data?props.data.map(((item, index) => (
                              <tr key={index}>
                                  <td>{item.cartData.itemName}</td>
                                  <td>{item.cartData.minPrice}</td>
                               </tr>
                             ))):""}
                            </tbody>
                          </table>
                          <hr className="line" />
                         <h6>Total Paid Amount : {totalPayAmount + 95}</h6>
                  <button className="btn btn-sm btn-default btn_css" onClick={closeModal}>close</button>
               </div> 
            </Modal>
        </>
    );
}
export default Cart;