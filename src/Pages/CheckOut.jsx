import React from "react";
import styles from "./CheckOut.css";
import { Navigate, useNavigate } from "react-router-dom";

const CheckOut = () => {
  const [showcredit, setShowCredit] = React.useState(false);
  const [card, setCard] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [cvv, setCvv] = React.useState("");

  const seeChange = (e) => {
    setShowCredit(true);
  };
  const handleChange = (e) => {
    setShowCredit(false);
  };
  const navigate= useNavigate();

  const showMessage = () => {
    if (card === "123456789" && month === "01/24" && cvv === "257") {
      alert("Order Successful");
    } else {
      alert("Invalid Credentials");
    }
    setTimeout(() => {
      // <Navigate to="home" />;
        navigate("/home")
    }, 1000);
  };

  return (
   
    <div style={{marginLeft:"400px",marginTop:"30px",marginBottom:"30px"}}>
     <img src="https://cdn.dribbble.com/users/13543/screenshots/1523277/success.gif" alt="" />
      </div>
  );
};
export default CheckOut


