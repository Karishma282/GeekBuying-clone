import React from "react";
import axios from "axios";
import { useEffect, useState} from "react";

const ProductDetail=()=>{
    const [data, setData] = useState([]);


    useEffect(()=>{
        axios({
          method:"GET",
          url:`http://localhost:8080/products/${id}`, 
        })
        .then(res=>{
                   setData(res.data)
          console.log(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
       },[id])
       console.log(data)
    
    return(
<div>
    {/* <div className="product-datail"> 
    {data?.map((products) => (
        <Link to={`/products/${products.id}`}>
          <div key={products.id}>
            <h2>{products.name}</h2> */}
            {/* <img src={product.src} alt="images" />
            <h6> Ratings - {product.rating}</h6>
            <h6> Reviews - {product.reviews} </h6>
            <h5>price: {product.price}</h5> */}
            {/* <button>Add to Wishlist</button>
          </div>
          <br />
        </Link>
      ))}
    </div> */}
</div>
    )
}
export default ProductDetail



// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./Home.css";
// // import { Footer } from "./Footer";
// import { useSearchParams } from "react-router-dom";

// export const Products = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [searchParams, setSearchParams] = useSearchParams();  //*URL CHNAGE
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(Number(searchParams.get("page") || 1));
//   // const [q, setQ] = useState("");
//   const [rating, setRating] = useState(searchParams.get("asc") || "asc");
//   const [price, setPrice] = useState("asc");
//   const [reviews, setReviews] = useState("asc");
//   const [filterRating, setFilterRating] = useState(0);
//   const [q, setQ] = useState("");                        
//   const [text, setText] = useState(""); 

//   useEffect(() => {
//     fetchData({ page, rating, price, filterRating, reviews,q, text });
//   }, [page, rating, price, filterRating, reviews,q, text]);

//   // useEffect(() => {
//   //   setSearchParams({
//   //     page,
//   //     rating,
//   //     reviews,
//   //   });
//   // }, []);
  
//   const fetchData = async ({ page, rating, price, filterRating, reviews,q }) => {
//     setLoading(true);
//     await axios({
//       method: "GET",
//       url: "http://localhost:8080/data",
//       params: {
//         _page: page,
//         _limit: 5,
//         _sort: "rating",
//         _order: `${rating}, ${price}, ${reviews}`,
//         rating_gte: filterRating,
//         q : q
//       },
//     })
//       .then((res) => {
//         setData(res.data);
//         console.log(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(true);
//         setLoading(false);
//         console.log(err);
//       });
//   };

//   return (
//     <div className="productsDiv">
//       {loading && <img src="https://i.gifer.com/4V0b.gif" alt="loading" />}
//       {/* filter */}
//       <div>
//         <button onClick={() => setFilterRating(4)}>GT 4</button> {"  "}
//         <button onClick={() => setFilterRating(3)}>GT 3</button> {"  "}
//         <button onClick={() => setFilterRating(2)}>GT 2</button> {"  "}
//         <button onClick={() => setFilterRating(1)}>GT 1</button> {"  "}
//         <button onClick={() => setFilterRating(0)}>ALL</button> {"  "}
//       </div>
//       <br />
//       {/* Rating sort */}
//       <select>
//         <option value="asc" onClick={() => setRating("asc")}>
//           Ratings by Asc
//         </option>
//         <option value="desc" onClick={() => setRating("desc")}>
//           Ratings by Desc
//         </option>
//       </select>
//       {/* Search for item */}
//         <div> 
//           <input value={text} onChange = {(e) => setText(e.target.value)} placeholder="search item"/>
//           <button onClick={() => setQ(text)}>Search</button>
//         </div>
//       {data?.map((product) => (
//         <Link to={`/product/${product.id}`}>
//           <div key={product.id}>
//             <h2>{product.name}</h2>
//             <img src={product.src} alt="images" />
//             <h6> Ratings - {product.rating}</h6>
//             <h6> Reviews - {product.reviews} </h6>
//             <h5>price: {product.price}</h5>
//             <button>Add to Wishlist</button>
//           </div>
//           <br />
//         </Link>
//       ))}
//       <PaginationComponent
//         currentPage={page}
//         lastPage={5}
//         onPageChange={setPage}
//       />
//       <br />
//       <Footer />
//     </div>
//   );
// };

// const PaginationComponent = ({ currentPage, lastPage, onPageChange }) => {
//   const arr = new Array(lastPage).fill(0);
//   return (
//     <div>
//       {arr.map((item, page) => (
//         <div key={item.id}>
//           <button
//             style={{
//               padding: "15px",
//               borderRadius: "30%",
//               backgroundColor: "lightgrey",
//               margin: "4px",
//               textAlign : "center"
//             }}
//             onClick={() => onPageChange(page + 1)} disabled={page + 1 === currentPage} > {page + 1}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };