import React from "react";
import axios from "axios";
import { useEffect, useState} from "react";
import { useParams}  from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
// import "./Product.css"
const Product=()=>{
    const params=useParams()
    const [data, setData] = useState([]);
    const HandelCart = (data) => {
      console.log(data);
      const cart = JSON.parse(localStorage.getItem("FraazoCart")) || [];
      cart.push(data);
      localStorage.setItem("FraazoCart", JSON.stringify(cart));
    };
  


    useEffect(()=>{
        const {id}=params
        axios({
          method:"GET",
          url:`http://localhost:8080/products/${id}`, 
         
        })
        .then(res=>{
                   setData(res.data)
        //   console.log(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
       },[])
       console.log(data)
       
    return(
        
             <div className="productMiddle" style={{border:"1px solid red"}}>
        <div key={data?.id}  className="productDet" >
        <Link to={`/products/${data?.id}`} >
          <div style={{display:"flex", alignItems:"center"}}>
        <div style={{width:"500px",marginTop:"30px"}}>
        <img  src={data?.image_url} alt=""  className="imgproduct" />
        </div>
         <div>
         <h3>{data?.description} </h3><br/>
         <h3 className="brand" style={{fontWeight:"bold"}}>Brand:--{data?.brand}</h3>
         <h2 className="price"style={{fontWeight:"bold"}} >{data?.price}</h2> <span className="sprice" style={{textDecoration:"lineThrough",color:"gray"}}>-{data?.strikedoffprice}</span>
        <div>
       <Link to="/cart"><Button onClick={HandelCart(data)}>Add TO Cart</Button></Link> 
       <Link to="/checkout">  <Button >Buy Now</Button></Link>
        </div>
         </div>
         </div>
        
       
         </Link>
         
   </div> 
  </div>
  
    )
}
// useEffect(()=> {
//   localStorage.setItem("cartItems", JSON.stringify(carts))
// }, [carts])
export default Product