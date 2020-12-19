import React from "react";
//import axios from "axios";
function Error(){

    /*async function sendFormData(){
        const data = await axios.get("https://5f1a8228610bde0016fd2a74.mockapi.io/getTestList"); // sign api calling
        console.log(data.data);
        var arrData = data.data;
        arrData.map( function(value, index){
            const sendData = {
               "keyword":value.Keyword,
               "Sno":0,
               "availableAt":value.availableAt,
               "category":value.category,
               "fasting":value.fasting,
               "itemId":value.itemId,
               "itemName":value.itemName,
               "labName":value.labName,
               "minPrice":value.minPrice,
               "objectID":value.objectID,
               "popular":value.popular,
               "testCount":value.testCount,
               "type":value.type,
               "url":value.url
            };
            console.log(sendData);
            async function sendDataFunc(){
              const dataOut = await axios.get("http://localhost:6021/AddData",{ params: sendData}); // sign api calling
              console.log(dataOut.msg);
            }
            sendDataFunc();
        });
       
       
    }
    sendFormData();
    */ 
   return(
       <>
          <h2>Oops, Page not found</h2>
       </>
   );
}
export default Error;