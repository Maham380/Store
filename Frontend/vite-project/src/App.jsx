// import React from 'react'
// import { Route, Routes } from 'react-router'
// import Success from './Component/Success'
// import Cancel from './Component/Cancel'
// import Product from './Component/Product'
// import Index from './Component/Index'
// function App() {
//   return (
//     <div>
// <Routes>
// <Route path='/' element={
// <div> 
//   <h1 className='hed'>Ecoomerce With Stripe Store</h1>
//   <div className='crdminn'> 
//     { Product.map((product,index)=>(
//       <Index key={index} product={product} />
//     ))
//     }
//   </div>
// </div>
// } />
//   <Route path='/success' element={<Success />}/>
//     <Route path='/cancel' element={<Cancel />}/>
// </Routes>







//     </div>
//   )
// }

// export default App


import React from "react";
import { Route, Routes } from "react-router-dom";
import Success from "./Component/Success";
import Cancel from "./Component/Cancel";
import Product from "./Component/Product";
import Index from "./Component/Index";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container">
            <h1 className="header">E-commerce With Stripe Store</h1>
            <div className="product-grid">
              {Product.map((product, index) => (
                <Index key={index} product={product} />
              ))}
            </div>
          </div>
        }
      />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
    </Routes>
  );
}

export default App;  // ✅ Must be default export
