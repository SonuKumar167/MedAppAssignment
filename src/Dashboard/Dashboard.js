import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import HeaderContainer from "../containers/HeaderContainer";
import './Dashboard.css';
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
function Dashboard(props){
    const history = useHistory();
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
      setIsOpen(false);
      history.push("/Dashboard");
    }
    const [dataSetArr,setData] = useState();
    const getItems = () => fetch('http://localhost:6021/GetData').then(res => res.json());
    getItems().then(data => setData(data.data));
return(
       <>
           <HeaderContainer />
            <div className="container-fluid">
               <div className="row topAlign">
               {dataSetArr?dataSetArr.map(((item, index) => (
                   <div className="col-sm-3 text-center" key={index}>
                     <div className="prd_border">
                      <h4 className="title content">{item.itemName}</h4>
                      <p>{item.keyword}</p>
                      <p>Rs. {item.minPrice}</p>
                      <button type="button" className="btn btn-sm btn-default btn_css" onClick={ () => { props.addToCartHandler(item);openModal();}}>Add to Cart</button>
                     </div>
                   </div>
                   ))):""}
               </div>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
               <div className="text-center">
                   <p className="modal_title title">Added in cart</p>
                   <button className="btn btn-sm btn-default btn_css" onClick={closeModal}>ok</button>
               </div> 
            </Modal>
       </>
   );
}
export default Dashboard;