// import React from 'react'

// function Cancel() {
//   return (
//         <div className="cancel-page">
//       <div className="cancel-card">
//         <div className="icon-wrapper">
//           <svg className="cross" viewBox="0 0 52 52">
//             <circle
//               className="cross-circle"
//               cx="26"
//               cy="26"
//               r="25"
//               fill="none"
//             />
//             <path
//               className="cross-line"
//               fill="none"
//               d="M16 16 36 36"
//             />
//             <path
//               className="cross-line"
//               fill="none"
//               d="M36 16 16 36"
//             />
//           </svg>
//         </div>

//         <h1>Payment Cancelled</h1>
//         <p>
//           Your payment was not completed. No charges were made to your account.
//         </p>

//         <div className="details">
//           <div>
//             <span>Reason</span>
//             <strong>User Cancelled</strong>
//           </div>
//           <div>
//             <span>Reference</span>
//             <strong>#PAY124578</strong>
//           </div>
//         </div>

//         <div className="actions">
//           <button className="primary-btn">Try Again</button>
//           <button className="secondary-btn">Go Back Home</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cancel






import React from "react";

function Cancel() {
  return (
    <div className="cancel-page">
      <div className="cancel-card">
        <div className="icon-wrapper">
          <svg className="cross" viewBox="0 0 52 52">
            <circle className="cross-circle" cx="26" cy="26" r="25" fill="none" />
            <path className="cross-line" fill="none" d="M16 16 36 36" />
            <path className="cross-line" fill="none" d="M36 16 16 36" />
          </svg>
        </div>
        <h1>Payment Cancelled</h1>
        <p>Your payment was not completed. No charges were made to your account.</p>
        <div className="details">
          <div>
            <span>Reason</span>
            <strong>User Cancelled</strong>
          </div>
          <div>
            <span>Reference</span>
            <strong>#PAY124578</strong>
          </div>
        </div>
        <div className="actions">
          <button className="primary-btn">Try Again</button>
          <button className="secondary-btn">Go Back Home</button>
        </div>
      </div>
    </div>
  );
}

export default Cancel;
