

import { useEffect, useState} from "react";
import axios from "axios";
import React from "react";
import "./Mobile.css"
// import CaptionCarousel from "./corosal"
import { Link } from "react-router-dom";

const Mobile=()=>{
  const [data,setData]=useState([])
 useEffect(()=>{
  axios({
    method:"GET",
    url:"http://localhost:8080/products", 
  })
  .then(res=>{
             setData(res.data)
    console.log(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[])
return(
  <div >
    <div className="base-container">
    <div className="main-container">
      <div className="left-container">
        <div className="mobile" style={{border:"1px solid #EEEEEE",height:"170px"}}>
        <h3 className="smart" style={{marginTop:"20px"}} >Phone & Accessries:</h3>
         <p style={{margin:"10px"}}>Cell Phones</p>
         <p style={{margin:"10px"}}>Phone Accessories</p>
         <p style={{margin:"10px"}}>Apple Accessories</p>
         
         </div>
         <div className="smart-home" style={{border:"1px solid  #EEEEEE",height:"200px",marginTop:"20px"}}>
        <h3 className="smart" >Operating System:</h3>
         <p style={{margin:"10px"}}>Android 10</p>
         <p style={{margin:"10px"}}>Android 9.0</p>
         <p style={{margin:"10px"}}>Android 11</p>
         
         </div>
         <div className="smart-home" style={{border:"1px solid  #EEEEEE",height:"180px",marginTop:"20px"}}>
        <h3 className="smart" >Ram:</h3>
         <p style={{margin:"10px"}}>8GB</p>
         <p style={{margin:"10px"}}>6GB</p>
         <p style={{margin:"10px"}}>4GB</p>
         
         </div>

         <div className="smart-home" style={{border:"1px solid  #EEEEEE",height:"180px",marginTop:"20px"}}>
        <h3 className="smart" >ROM:</h3>
         <p style={{margin:"10px"}}>64GB</p>
         <p style={{margin:"10px"}}>128GB</p>
         <p style={{margin:"10px"}}>256GB</p>
         
         </div>

         <div className="smart-home" style={{border:"1px solid  #EEEEEE",height:"130px",marginTop:"20px"}}>
        <h3 className="smart" >CPU Cores:</h3>
         <p style={{margin:"10px"}}>Octa Core</p>
        
         
         </div>
      </div>
      <div className="right-container">
        <div>
        {/* <CaptionCarousel/> */}
        </div>
        <div className="product-data">
        {data.map((e) => (
         
               <Link to={`/products/${e.id}`}>
                <div className="product_card"  key={e.id}>
                  <img className="product_image"  style={{ height:"200px"}} src={e.image_url} />
                  <p className="product_name" style={{ marginLeft:"7px"}}  >{e.name}</p>
                  <h3 className="product_price" style={{fontWeight:"bold",marginLeft:"7px"}}>₹{e.price}</h3>
                  <p className="product_strickeprice" style={{textDecoration: "line-through",color:"#999" , marginLeft:"7px"}}>₹{e.strikedoffprice}</p>
                  <p className="product_name" style={{ marginLeft:"7px",color:"#FEBB05"}}>{e.rating}</p>
                
                 
                </div>
              </Link>
            
          ))}
          </div>
      </div>
    </div>
  </div>
  </div>

)
}
export default Mobile