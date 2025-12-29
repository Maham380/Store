// import React from 'react'

// function Success() {
//   return (
//       <div className="success-page">
//       <div className="success-card">
//         <div className="checkmark-wrapper">
//           <svg
//             className="checkmark"
//             viewBox="0 0 52 52"
//           >
//             <circle
//               className="checkmark-circle"
//               cx="26"
//               cy="26"
//               r="25"
//               fill="none"
//             />
//             <path
//               className="checkmark-check"
//               fill="none"
//               d="M14 27l7 7 17-17"
//             />
//           </svg>
//         </div>

//         <h1>Payment Successful</h1>
//         <p>
//           Thank you for your purchase! Your transaction has been completed
//           successfully.
//         </p>

//         <div className="details">
//           <div>
//             <span>Amount Paid</span>
//             <strong>$149.00</strong>
//           </div>
//           <div>
//             <span>Transaction ID</span>
//             <strong>#TXN982347</strong>
//           </div>
//         </div>

//         <div className="actions">
//           <button className="primary-btn">Go to Dashboard</button>
//           <button className="secondary-btn">Download Receipt</button>
//         </div>
//       </div>
//     </div>
//   );
// };
  
// export default Success





import React from "react";

function Success() {
  return (
    <div className="success-page">
      <div className="success-card">
        <div className="checkmark-wrapper">
          <svg className="checkmark" viewBox="0 0 52 52">
            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="checkmark-check" fill="none" d="M14 27l7 7 17-17"/>
          </svg>
        </div>
        <h1>Payment Successful</h1>
        <p>Thank you for your purchase! Your transaction has been completed successfully.</p>
        <div className="details">
          <div>
            <span>Amount Paid</span>
            <strong>$149.00</strong>
          </div>
          <div>
            <span>Transaction ID</span>
            <strong>#TXN982347</strong>
          </div>
        </div>
        <div className="actions">
          <button className="primary-btn">Go to Dashboard</button>
          <button className="secondary-btn">Download Receipt</button>
        </div>
      </div>
    </div>
  );
}

export default Success;
