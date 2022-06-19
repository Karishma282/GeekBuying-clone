import { useEffect, useState} from "react";
import axios from "axios";
// import "./smartHome.css"
// import React from "react";
// import { Link } from "react-router-dom"

// import { BottomNav } from "../../components/Navbar/BottomNav"


// export const SmartHome = () => {
//   <div>Hello</div>
// console.log(data)
// const [data,setData]=useState([])
//     useEffect(()=>{

//         axios({
//           method:"get",
//           url:"http://localhost:8080/products",
          
//         })
//         .then(res=>{
//           setData(res.data)
//         })
//         .catch(err=>{
//           console.log(err)
//         })
        
//       },[])
       
//       console.log(data)
//   const handlechange = (e) => {
//     if (e.target.value == "low-to-high") {
//       setProducts((product) => [...products.sort((a, b) => (a.price - b.price))])
//     }
//     else if (e.target.value == "high-to-low") {
//       setProducts((product) => [...products.sort((a, b) => (b.price - a.price))])
//     }

//   }
//    console.table(products);
  // return (
  //   <>
  //     <BottomNav data={data} />
  //     <div className="container-main" style={{backgroundColor:"red",width:"200px",height:"200px",border:"1px solid"}}>
  //       <div className="left-side">
         
         
  //       </div>
  //       <div className="list_container">
  //         {products?.map((e) => {
  //           return (
            //   <Link to={`/products/${e.id}`}>
//                 <div className="productcard" key={e.id}>
//                   <img className="product_image" src={e.poster} />
//                   <p className="product_brandName">{e.brand}</p>
//                   <p className="product_name">{e.longTitle}</p>
//                   <h3 className="product_price">€{e.price}</h3>
//                 </div>
//             //   </Link>
//             )
//           })}

//         </div>
//       </div>
//     </>
//   );
// };


import React from "react";
import "./SmartHome.css"
import CaptionCarousel from "./corosal"
import { Link } from "@chakra-ui/react";
const SmartHome=()=>{
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
        <div className="smart-home" style={{border:"1px solid gray",height:"430px"}}>
        <h3 className="smart" >Smart Home</h3>
         <p style={{marginLeft:"15px"}}>- Robot Vaccum Cleners</p>
         <p style={{marginLeft:"15px"}}>- Cordless Vaccum Cleners</p>
         <p style={{marginLeft:"15px"}}>-Fitness</p>
         <p style={{marginLeft:"15px"}}>- Xiaomi Smart Gadgets</p>
         <p style={{marginLeft:"15px"}}>- Smart Lights</p>
         <p style={{marginLeft:"15px"}}>- Air Purifier</p>
         <p style={{marginLeft:"15px"}}>- Others</p>
         <p style={{marginLeft:"15px"}}> Kitchen& Dinning</p>
         <p style={{marginLeft:"15px"}}> Home Decors</p>
         <p style={{marginLeft:"15px"}}> Lighting</p>
         <p style={{marginLeft:"15px"}}> Other Home Gadgets</p>
         <p style={{marginLeft:"15px"}}>- Office Supplies</p>
         <p style={{marginLeft:"15px"}}>- Baby Care</p>
         <p style={{marginLeft:"15px"}}>- Household Appliance</p>
         <p style={{marginLeft:"15px"}}>Home Improvement</p>
         <p style={{marginLeft:"15px"}}>Tools</p>
        
         </div>
         <div className="smart-home" style={{border:"1px solid gray",height:"430px"}}>
        <h3 className="smart" >Smart Home</h3>
         <p style={{marginLeft:"15px"}}>- Robot Vaccum Cleners</p>
         <p style={{marginLeft:"15px"}}>- Cordless Vaccum Cleners</p>
         <p style={{marginLeft:"15px"}}>-Fitness</p>
         <p style={{marginLeft:"15px"}}>- Xiaomi Smart Gadgets</p>
         <p style={{marginLeft:"15px"}}>- Smart Lights</p>
         <p style={{marginLeft:"15px"}}>- Air Purifier</p>
         <p style={{marginLeft:"15px"}}>- Others</p>
         <p style={{marginLeft:"15px"}}> Kitchen& Dinning</p>
         <p style={{marginLeft:"15px"}}> Home Decors</p>
         <p style={{marginLeft:"15px"}}> Lighting</p>
         <p style={{marginLeft:"15px"}}> Other Home Gadgets</p>
         <p style={{marginLeft:"15px"}}>- Office Supplies</p>
         <p style={{marginLeft:"15px"}}>- Baby Care</p>
         <p style={{marginLeft:"15px"}}>- Household Appliance</p>
         <p style={{marginLeft:"15px"}}>Home Improvement</p>
         <p style={{marginLeft:"15px"}}>Tools</p>
        
         </div>
      </div>
      <div className="right-container">
        <div>
        <CaptionCarousel/>
        </div>
        <div className="product-data">
        {data.map((e) => {
            return (
              // <Link to={`/product/women/${e.id}`}>
                <div className="women_card" key={e.id}>
                  <img className="women_image" src={e.image_url} />
                  <p className="women_name">{e.name}</p>
                  <h3 className="women_price">€{e.price}</h3>
                  <p className="women_brandName">{e.strikedoffprice}</p>
                  <p className="women_name">{e.rating}</p>
                
                 
                </div>
              // </Link>
            )
          })}
          </div>
      </div>
    </div>
  </div>
  </div>

)
}
export default SmartHome