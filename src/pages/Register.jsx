

// // import React, { useState, useRef } from 'react';
// // import emailjs from '@emailjs/browser';

// // const Register = () => {
// //   const [role, setRole] = useState('customer');
// //   const [result, setResult] = useState('');
// //   const formRef = useRef(); // For EmailJS

// //   const onSubmit = async (event) => {
// //     event.preventDefault();
// //     setResult('Sending...');

// //     const form = event.target;
// //     const formData = new FormData(form);
// //     formData.append('access_key', '30760a73-2bd3-4c4c-8960-1f1827c2ab3c'); // Web3Forms API Key

// //     // Convert to plain object for Google Sheets
// //     const jsonData = Object.fromEntries(formData.entries());

// //     jsonData.location = jsonData.location || '';
// //     jsonData.pincode = jsonData.pincode || '';


// //     try {
// //       // 1️⃣ Send to Web3Forms (Admin Email)
// //       const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
// //         method: 'POST',
// //         body: formData,
// //       });

// //       const web3formsData = await web3formsResponse.json();

// //       // https://script.google.com/macros/s/AKfycbylVQEWZNMkLJuwhSegK6saz1_ztoZQup0r4rMn7SFH_GObULW7V8kJD5fSDLwoHIuifQ/exec
// //       // 2️⃣ Send to Google Sheets 
// //       await fetch('https://script.google.com/macros/s/AKfycbx0b9MXNmPC_fAjVH2L2ejm-oXpv1jUcuGYlys1_31v_KjAAXlxg0d7_XW0737axLKc_g/exec', {
// //         method: 'POST',
// //         body: JSON.stringify(jsonData),
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         mode: 'no-cors',
// //       });

// //       // 3️⃣ Send confirmation email to user using EmailJS
// //       await emailjs.sendForm(
// //         'service_5mmuavn',     // EmailJS Service ID
// //         'template_b226b71',    // EmailJS Template ID
// //         formRef.current,       // Form reference
// //         'uzFpDMk4Hbc3uyDBj'   // EmailJS Public Key
// //       );

// //       // Check if Web3Forms response is successful
// //       if (web3formsData.success) {
// //         setResult('Form Submitted Successfully!');
// //         form.reset(); // Reset form after successful submission
// //       } else {
// //         setResult('Submission failed. Please try again.');
// //         console.log('Web3Forms error:', web3formsData);
// //       }

// //     } catch (error) {
// //       console.error('Error:', error);
// //       setResult('Error submitting form.');
// //     }
// //   };

// //   const companyInput = (
// //   <input
// //     key="company"
// //     className="w-full border p-2 rounded"
// //     name="company"
// //     placeholder="Firm Name"
// //   />
// // );

// //   return (
// //     <div className="min-h-screen flex items-center justify-center px-4">
// //       <div className="p-10 shadow-xl shadow-orange-200 text-orange-900 bg-orange-50 rounded-2xl w-full max-w-xl">
// //         <h1 className="text-2xl font-bold mb-4 text-center text-orange-600">Register</h1>

// //         {/* Role Selector */}
// //         <div className="mb-4 text-center space-x-4">
// //           <label>
// //             <input
// //               type="radio"
// //               name="role"
// //               value="customer"
// //               className="accent-orange-400 cursor-pointer"
// //               checked={role === 'customer'}
// //               onChange={(e) => setRole(e.target.value)}
// //             />{' '}
// //             Customer
// //           </label>
// //           <label>
// //             <input
// //               type="radio"
// //               name="role"
// //               value="seller"
// //               className="accent-orange-400 cursor-pointer"
// //               checked={role === 'seller'}
// //               onChange={(e) => setRole(e.target.value)}
// //             />{' '}
// //             Seller
// //           </label>
// //           <label>
// //             <input
// //               type="radio"
// //               name="role"
// //               value="manufacturer"
// //               className="accent-orange-400 cursor-pointer"
// //               checked={role === 'manufacturer'}
// //               onChange={(e) => setRole(e.target.value)}
// //             />{' '}
// //             Manufacturer
// //           </label>
// //           <label>
// //             <input
// //               type="radio"
// //               name="role"
// //               value="partner"
// //               className="accent-orange-400 cursor-pointer"
// //               checked={role === 'partner'}
// //               onChange={(e) => setRole(e.target.value)}
// //             />{' '}
// //             Growth Partner
// //           </label>
// //         </div>

// //         {/* Form */}
// //         <form ref={formRef} className="space-y-4" onSubmit={onSubmit}>
// //           {role === 'manufacturer' && companyInput}

// //           {role !== 'manufacturer' && (
// //             <input className="w-full border p-2 rounded" name="name" placeholder="Name" required />
// //           )}

// //           {/* <input className="w-full border p-2 rounded" name="name" placeholder="Name" required /> */}
// //           <input className="w-full border p-2 rounded" name="email" placeholder="Email" type="email" required />
// //           <input className="w-full border p-2 rounded" name="phone" placeholder="Phone" type="tel" required />

// //           <input type="hidden" name="role" value={role} />

// //           {(role === 'seller' || role === 'partner' || role === 'manufacturer') && (
// //           <>
// //             <input
// //               className="w-full border p-2 rounded"
// //               name="location"
// //               placeholder="Location"
// //               required
// //             />
// //             <input
// //               className="w-full border p-2 rounded"
// //               name="pincode"
// //               placeholder="Pincode"
// //               type="text"
// //               required
// //             />
// //           </>
// //           )}


// //           {/* For seller: show Firm Name in original position */}
// //           {role === 'seller' && companyInput}

// //           {/* {role === 'seller' ||role === 'manufacturer' && (
// //             <input className="w-full border p-2 rounded" name="company" placeholder="Firm Name" />
            
// //           )} */}
// //           {role === 'manufacturer' && (
// //                       <input className="w-full border p-2 rounded" name="industry" placeholder="Industry Type" />
          
// //                     )}

// //           {role === 'partner' && (
// //             <input
// //               className="w-full border p-2 rounded"
// //               name="referral"
// //               placeholder="Referral Code (optional)"
// //             />
// //           )}
          

// //           <textarea
// //             className="w-full border p-2 rounded"
// //             name="message"
// //             placeholder="Message (optional)"
// //           ></textarea>

// //           <button
// //             className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
// //             type="submit"
// //           >
// //             Submit
// //           </button>
// //         </form>

// //         {/* Result */}
// //         <p className="mt-4 text-sm text-green-600 text-center">{result}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;













// // import React, { useState } from 'react';

// // const Register = () => {
// //   const [role, setRole] = useState('customer');
// //   const [result, setResult] = useState('');


// //   const onSubmit = async (event) => {
// //     event.preventDefault();
// //     setResult('Sending...');
  
// //     const form = event.target;
// //     const formData = new FormData(form);
// //     formData.append('access_key', '30760a73-2bd3-4c4c-8960-1f1827c2ab3c'); // Web3Forms API Key
  
// //     // Convert to plain object for Google Sheets
// //     const jsonData = Object.fromEntries(formData.entries());
  
// //     try {
// //       // 1. Send to Web3Forms (for email)
// //       const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
// //         method: 'POST',
// //         body: formData,
// //       });
  
// //       const web3formsData = await web3formsResponse.json();
  
// //       // 2. Send to Google Sheets
// //       const googleSheetsResponse = await fetch('https://script.google.com/macros/s/AKfycbylVQEWZNMkLJuwhSegK6saz1_ztoZQup0r4rMn7SFH_GObULW7V8kJD5fSDLwoHIuifQ/exec', {
// //         method: 'POST',
// //         body: JSON.stringify(jsonData),
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         mode: 'no-cors', // <-- workaround for CORS
// //       });
      
// //       if (web3formsData.success) {
// //         setResult('Form Submitted Successfully!');
// //         form.reset();
// //       } else {
// //         setResult('Submission failed. Please try again.');
// //         console.log('Web3Forms:', web3formsData);
// //         console.log('Google Sheets:', googleSheetsData);
// //       }
  
// //     } catch (error) {
// //       console.error('Error:', error);
// //       setResult('Error submitting form.');
// //     }
// //   };
  
 
// //   return (
// //     <div className="min-h-screen flex items-center justify-center px-4">
// //       <div className="p-10 shadow-xl shadow-orange-200 text-orange-900 bg-orange-50 rounded-2xl w-full max-w-xl">
// //         <h1 className="text-2xl font-bold mb-4 text-center text-orange-600">Register</h1>

// //         {/* Role Selector */}
// //         <div className="mb-4 text-center space-x-4">
// //           <label>
// //             <input
// //               type="radio"
// //               name="role"
// //               value="customer"
// //               className="accent-orange-400 cursor-pointer"
// //               checked={role === 'customer'}
// //               onChange={(e) => setRole(e.target.value)}
// //             />{' '}
// //             Customer
// //           </label>
// //           <label>
// //             <input
// //               type="radio"
// //               name="role"
// //               value="seller"
// //               className="accent-orange-400 cursor-pointer"
// //               checked={role === 'seller'}
// //               onChange={(e) => setRole(e.target.value)}
// //             />{' '}
// //             Seller
// //           </label>
// //           <label>
// //             <input
// //               type="radio"
// //               name="role"
// //               value="partner"
// //               className="accent-orange-400 cursor-pointer"
// //               checked={role === 'partner'}
// //               onChange={(e) => setRole(e.target.value)}
// //             />{' '}
// //             Growth Partner
// //           </label>
// //         </div>

// //         {/* Form */}
// //         <form className="space-y-4" onSubmit={onSubmit}>
// //           <input className="w-full border p-2 rounded" name="name" placeholder="Name" required />
// //           <input className="w-full border p-2 rounded" name="email" placeholder="Email" type="email" required />
// //           <input className="w-full border p-2 rounded" name="phone" placeholder="Phone" type="tel" required />

// //           <input type="hidden" name="role" value={role} />

// //           {role === 'seller' && (
// //             <input className="w-full border p-2 rounded" name="company" placeholder="Firm Name" />
// //           )}

// //           {role === 'partner' && (
// //             <input
// //               className="w-full border p-2 rounded"
// //               name="referral"
// //               placeholder="Referral Code (optional)"
// //             />
// //           )}

// //           <textarea
// //             className="w-full border p-2 rounded"
// //             name="message"
// //             placeholder="Message (optional)"
// //           ></textarea>

// //           <button
// //             className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
// //             type="submit"
// //           >
// //             Submit
// //           </button>
// //         </form>

// //         {/* Result */}
// //         <p className="mt-4 text-sm text-green-600 text-center">{result}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;

// import React, { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const Register = () => {
//   const [role, setRole] = useState('customer');
//   const [result, setResult] = useState('');
//   const [showPopup, setShowPopup] = useState(false); // ✅ New state for modal
//   const formRef = useRef(); // For EmailJS

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult('Sending...');

//     const form = event.target;
//     const formData = new FormData(form);
//     formData.append('access_key', '30760a73-2bd3-4c4c-8960-1f1827c2ab3c'); // Web3Forms API Key

//     const jsonData = Object.fromEntries(formData.entries());

//     jsonData.location = jsonData.location || '';
//     jsonData.pincode = jsonData.pincode || '';

//     try {
//       const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         body: formData,
//       });

//       const web3formsData = await web3formsResponse.json();

//       await fetch('https://script.google.com/macros/s/AKfycbx0b9MXNmPC_fAjVH2L2ejm-oXpv1jUcuGYlys1_31v_KjAAXlxg0d7_XW0737axLKc_g/exec', {
//         method: 'POST',
//         body: JSON.stringify(jsonData),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         mode: 'no-cors',
//       });

//       await emailjs.sendForm(
//         'service_5mmuavn',
//         'template_b226b71',
//         formRef.current,
//         'uzFpDMk4Hbc3uyDBj'
//       );

//       if (web3formsData.success) {
//         setResult('Form Submitted Successfully!');
//         setShowPopup(true); // ✅ Show popup on success
//         form.reset();
//       } else {
//         setResult('Submission failed. Please try again.');
//         console.log('Web3Forms error:', web3formsData);
//       }

//     } catch (error) {
//       console.error('Error:', error);
//       setResult('Error submitting form.');
//     }
//   };

//   const companyInput = (
//     <input
//       key="company"
//       className="w-full border p-2 rounded"
//       name="company"
//       placeholder="Firm Name"
//     />
//   );

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <div className="p-10 shadow-xl shadow-orange-200 text-orange-900 bg-orange-50 rounded-2xl w-full max-w-xl">
//         <h1 className="text-2xl font-bold mb-4 text-center text-orange-600">Register</h1>

//         {/* Role Selector */}
//         <div className="mb-4 text-center space-x-4">
//           <label>
//             <input
//               type="radio"
//               name="role"
//               value="customer"
//               className="accent-orange-400 cursor-pointer"
//               checked={role === 'customer'}
//               onChange={(e) => setRole(e.target.value)}
//             />{' '}
//             Customer
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="role"
//               value="seller"
//               className="accent-orange-400 cursor-pointer"
//               checked={role === 'seller'}
//               onChange={(e) => setRole(e.target.value)}
//             />{' '}
//             Seller
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="role"
//               value="manufacturer"
//               className="accent-orange-400 cursor-pointer"
//               checked={role === 'manufacturer'}
//               onChange={(e) => setRole(e.target.value)}
//             />{' '}
//             Manufacturer
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="role"
//               value="partner"
//               className="accent-orange-400 cursor-pointer"
//               checked={role === 'partner'}
//               onChange={(e) => setRole(e.target.value)}
//             />{' '}
//             Growth Partner
//           </label>
//         </div>

//         {/* Form */}
//         <form ref={formRef} className="space-y-4" onSubmit={onSubmit}>
//           {role === 'manufacturer' && companyInput}

//           {role !== 'manufacturer' && (
//             <input className="w-full border p-2 rounded" name="name" placeholder="Name" required />
//           )}

//           <input className="w-full border p-2 rounded" name="email" placeholder="Email" type="email" required />
//           <input className="w-full border p-2 rounded" name="phone" placeholder="Phone" type="tel" required />

//           <input type="hidden" name="role" value={role} />

//           {(role === 'seller' || role === 'partner' || role === 'manufacturer') && (
//             <>
//               <input
//                 className="w-full border p-2 rounded"
//                 name="location"
//                 placeholder="Location"
//                 required
//               />
//               <input
//                 className="w-full border p-2 rounded"
//                 name="pincode"
//                 placeholder="Pincode"
//                 type="text"
//                 required
//               />
//             </>
//           )}

//           {role === 'seller' && companyInput}

//           {role === 'manufacturer' && (
//             <input className="w-full border p-2 rounded" name="industry" placeholder="Industry Type" />
//           )}

//           {role === 'partner' && (
//             <input
//               className="w-full border p-2 rounded"
//               name="referral"
//               placeholder="Referral Code (optional)"
//             />
//           )}

//           <textarea
//             className="w-full border p-2 rounded"
//             name="message"
//             placeholder="Message (optional)"
//           ></textarea>

//           <button
//             className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
//             type="submit"
//           >
//             Submit
//           </button>
//         </form>

//         {/* Result */}
//         <p className="mt-4 text-sm text-green-600 text-center">{result}</p>
//       </div>

//       {/* ✅ Success Popup Modal */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
//             <h2 className="text-xl font-bold text-green-600 mb-2">Success!</h2>
//             <p className="text-gray-800">Your form has been submitted successfully.</p>
//             <button
//               onClick={() => setShowPopup(false)}
//               className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Register;




import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';

const Register = () => {
  const [role, setRole] = useState('customer');
  const [result, setResult] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef();
  const location = useLocation();

  // ✅ Set role based on URL hash (e.g., #seller)
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (['customer', 'seller', 'manufacturer', 'partner'].includes(hash)) {
      setRole(hash);
      setTimeout(() => {
        document.getElementById('form-start')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    const form = event.target;
    const formData = new FormData(form);
    formData.append('access_key', '30760a73-2bd3-4c4c-8960-1f1827c2ab3c');

    const jsonData = Object.fromEntries(formData.entries());

    jsonData.location = jsonData.location || '';
    jsonData.pincode = jsonData.pincode || '';

    try {
      const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const web3formsData = await web3formsResponse.json();

      await fetch(
        'https://script.google.com/macros/s/AKfycbx0b9MXNmPC_fAjVH2L2ejm-oXpv1jUcuGYlys1_31v_KjAAXlxg0d7_XW0737axLKc_g/exec',
        {
          method: 'POST',
          body: JSON.stringify(jsonData),
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors',
        }
      );

      await emailjs.sendForm(
        'service_5mmuavn',
        'template_b226b71',
        formRef.current,
        'uzFpDMk4Hbc3uyDBj'
      );

      if (web3formsData.success) {
        setResult('Form Submitted Successfully!');
        setShowPopup(true);
        form.reset();
      } else {
        setResult('Submission failed. Please try again.');
        console.log('Web3Forms error:', web3formsData);
      }
    } catch (error) {
      console.error('Error:', error);
      setResult('Error submitting form.');
    }
  };

  const companyInput = (
    <input
      key="company"
      className="w-full border p-2 rounded"
      name="company"
      placeholder="Firm Name"
    />
  );

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="p-10 shadow-xl shadow-orange-200 text-orange-900 bg-orange-50 rounded-2xl w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-center text-orange-600">Register</h1>

        {/* Role Selector */}
        <div className="mb-4 text-center space-x-4">
          <label>
            <input
              type="radio"
              name="role"
              value="customer"
              className="accent-orange-400 cursor-pointer"
              checked={role === 'customer'}
              onChange={(e) => setRole(e.target.value)}
            />{' '}
            Customer
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="seller"
              className="accent-orange-400 cursor-pointer"
              checked={role === 'seller'}
              onChange={(e) => setRole(e.target.value)}
            />{' '}
            Seller
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="manufacturer"
              className="accent-orange-400 cursor-pointer"
              checked={role === 'manufacturer'}
              onChange={(e) => setRole(e.target.value)}
            />{' '}
            Manufacturer
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="partner"
              className="accent-orange-400 cursor-pointer"
              checked={role === 'partner'}
              onChange={(e) => setRole(e.target.value)}
            />{' '}
            Growth Partner
          </label>
        </div>

        {/* Form */}
        <form ref={formRef} id="form-start" className="space-y-4" onSubmit={onSubmit}>
          {role === 'manufacturer' && companyInput}

          {role !== 'manufacturer' && (
            <input className="w-full border p-2 rounded" name="name" placeholder="Name" required />
          )}

          <input className="w-full border p-2 rounded" name="email" placeholder="Email" type="email" required />
          <input className="w-full border p-2 rounded" name="phone" placeholder="Phone" type="tel" required />

          <input type="hidden" name="role" value={role} />

          {(role === 'seller' || role === 'partner' || role === 'manufacturer') && (
            <>
              <input
                className="w-full border p-2 rounded"
                name="location"
                placeholder="Location"
                required
              />
              <input
                className="w-full border p-2 rounded"
                name="pincode"
                placeholder="Pincode"
                type="text"
                required
              />
            </>
          )}

          {role === 'seller' && companyInput}

          {role === 'manufacturer' && (
            <input className="w-full border p-2 rounded" name="industry" placeholder="Industry Type" />
          )}

          {role === 'partner' && (
            <input
              className="w-full border p-2 rounded"
              name="referral"
              placeholder="Referral Code (optional)"
            />
          )}

          <textarea
            className="w-full border p-2 rounded"
            name="message"
            placeholder="Message (optional)"
          ></textarea>

          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
            type="submit"
          >
            Submit
          </button>
        </form>

        {/* Result */}
        <p className="mt-4 text-sm text-green-600 text-center">{result}</p>
      </div>

      {/* Success Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-xl font-bold text-green-600 mb-2">Success!</h2>
            <p className="text-gray-800">Your form has been submitted successfully.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
