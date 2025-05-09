import React, { useEffect } from 'react';
import qrImage from '../assets/qr-code.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpiPayment = () => {
  const formLink = "https://forms.gle/3dpfsVnL3auSRwaM9";

  useEffect(() => {
    toast.info("Kindly ensure you complete the registration process prior to make the subscription payment !", {
      position: 'top-center',
      autoClose: 30000,
    });
  }, []);

  const handleClick = () => {
    toast.success('Redirecting to payment confirmation form...', {
      position: 'top-center',
      autoClose: 20000,
    });
    window.open(formLink, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-orange-50">
      <ToastContainer />
      <div
        className="bg-white shadow-xl shadow-orange-200 text-orange-900 p-8 rounded-2xl w-full max-w-md border-t-8 border-orange-500"
        onClick={() => toast('You clicked the payment box!', { autoClose: 20000 })}
      >
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
          NexioMart Subscription Payment
        </h2>

        <div className="flex justify-center mb-4">
          <img
            src={qrImage}
            alt="UPI QR Code"
            className="w-48 h-48 border border-orange-200 rounded-xl shadow"
          />
        </div>

        <p className="text-center text-gray-600 mb-1">
          Scan the QR code using any UPI app to pay
        </p>
        <p className="text-center text-sm text-gray-500 mb-4">
          UPI ID: <span className="font-semibold text-orange-700">nexiomart@upi</span>
        </p>

        <p className="text-xl text-gray-950 text-center mb-4">
          After completing the payment, click below to confirm and upload payment proof.
        </p>
        <p className="text-xl text-orange-700 text-center  mb-4">
          Subcription Amount : 1999/- + GST.
        </p>

        <button
          onClick={handleClick}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          I Have Paid
        </button>
      </div>
    </section>
  );
};

export default UpiPayment;


// import React from 'react';
// import qrImage from '../assets/qr-code.png';

// const UpiPayment = () => {
//   const formLink = "https://forms.gle/3dpfsVnL3auSRwaM9"; // Replace with your actual form URL

//   return (
//     <section className="min-h-screen flex items-center justify-center px-4 bg-orange-50">
//       <div className="bg-white shadow-xl shadow-orange-200 text-orange-900 p-8 rounded-2xl w-full max-w-md border-t-8 border-orange-500">
//         <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
//           NexioMart Subscription Payment
//         </h2>

//         <div className="flex justify-center mb-4">
//           <img
//             src={qrImage}
//             alt="UPI QR Code"
//             className="w-48 h-48 border border-orange-200 rounded-xl shadow"
//           />
//         </div>

//         <p className="text-center text-gray-600 mb-1">
//           Scan the QR code using any UPI app to pay
//         </p>
//         <p className="text-center text-sm text-gray-500 mb-4">
//           UPI ID: <span className="font-semibold text-orange-700">nexiomart@upi</span>
//         </p>

//         <p className="text-sm text-gray-600 text-center mb-4">
//           After completing the payment, click below to confirm and upload payment proof.
//         </p>

//         <button
//           onClick={() => window.open(formLink, "_blank")}
//           className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
//         >
//           I Have Paid
//         </button>
//       </div>
//     </section>
//   );
// };

// export default UpiPayment;


// import React from 'react';
// import qrImage from '../assets/qr-code.png';

// const UpiPayment = () => {
//   const formLink = "https://forms.gle/3dpfsVnL3auSRwaM9"; // Replace with actual form URL

//   return (
//     <div className="min-h-screen bg-light flex items-center justify-center p-6">
//       <div className="bg-white shadow-lg rounded-2xl max-w-md w-full p-6 border-t-8 border-primary">
//         <h2 className="text-xl md:text-2xl font-bold text-center text-dark mb-4">
//           NexioMart Subscription Payment
//         </h2>

//         <img
//           src={qrImage}
//           alt="UPI QR Code"
//           className="w-52 mx-auto border border-gray-200 rounded-xl shadow mb-4"
//         />

//         <p className="text-center text-gray-600 mb-1">
//           Scan the code using any UPI app to pay
//         </p>
//         <p className="text-center text-sm text-gray-500">
//           UPI ID: <span className="font-semibold text-dark">nexiomart@upi</span>
//         </p>

//         <p className="text-sm text-gray-600 text-center mt-4 mb-3">
//           Once payment is done, click below to confirm and upload payment proof.
//         </p>

//         <button
//           onClick={() => window.open(formLink, "_blank")}
//           className="w-full bg-primary hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-xl transition"
//         >
//           I Have Paid
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UpiPayment;


