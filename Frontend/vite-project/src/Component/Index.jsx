// import React from 'react'
// import axios from 'axios'
// function Index({product}) {
// const handleCheckout = async()=>{
//     try{
//       const response = await axios.post('http://localhost:4000/create-checkout-session',{
//         product,
//       })
//       window.location.href = response.data.url;
//     }catch(error){
//       console.error("Check out: ", error)
//     }
// }
//   return (
   
//         <div className="product-card">
//       <div className="image-wrapper">
//         <img
//           src={product.img}
//           alt="Product"
//         />
//       </div>

//       <div className="card-content">
//         <h3 className="product-name">{product.name}</h3>
//         <p className="product-price">{product.price}</p>

//         <button className="buy-btn" onClick={handleCheckout}>Buy Now</button>
//       </div>
 
//     </div>
//   )
// }

// export default Index





import React from "react";
import axios from "axios";

function Index({ product }) {
  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/create-checkout-session",
        { product }
      );
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Payment failed! Please try again.");
    }
  };

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="card-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="buy-btn" onClick={handleCheckout}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Index;
