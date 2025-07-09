import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';
import { auth } from '../firebase-config'; // 🔁 Adjust this path
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
} from 'firebase/auth';

const Register = () => {
  const [role, setRole] = useState('customer');
  const [result, setResult] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState(null);

  const formRef = useRef();
  const location = useLocation();

  // Auto set role from hash
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (['customer', 'seller', 'manufacturer', 'partner'].includes(hash)) {
      setRole(hash);
      setTimeout(() => {
        document.getElementById('form-start')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  // Send OTP
  const sendOTP = async () => {
    const phoneInput = document.querySelector('input[name="phone"]');
    const phoneNumber = '+91' + phoneInput.value.trim();

    if (!phoneInput || phoneInput.value.length !== 10) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
          size: 'invisible',
          callback: () => sendOTP(),
        });
      }

      const appVerifier = window.recaptchaVerifier;

      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setVerificationId(confirmation.verificationId);
      setOtpSent(true);
      alert('OTP sent to your phone');
    } catch (error) {
      console.error(error);
      // alert('Failed to send OTP. Try again later.');
    }
  };

  // Verify OTP and submit
  const verifyOTPAndSubmit = async () => {
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithCredential(auth, credential);
      handleFinalSubmit(); // ✅ Call actual form submit
    } catch (error) {
      console.error(error);
      alert('Invalid OTP');
    }
  };

  // Final submission logic
  const handleFinalSubmit = async () => {
    setResult('Sending...');

    const form = formRef.current;
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
          headers: { 'Content-Type': 'application/json' },
          mode: 'no-cors',
        }
      );

      await emailjs.sendForm('service_5mmuavn', 'template_b226b71', formRef.current, 'uzFpDMk4Hbc3uyDBj');

      if (web3formsData.success) {
        setResult('Form Submitted Successfully!');
        setShowPopup(true);
        form.reset();
        setOtp('');
        setOtpSent(false);
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
    <input key="company" className="w-full border p-2 rounded" name="company" placeholder="Firm Name" />
  );

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="p-10 shadow-xl shadow-orange-200 text-orange-900 bg-orange-50 rounded-2xl w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-center text-orange-600">Register</h1>

        <div className="mb-4 text-center space-x-4">
          {['customer', 'seller', 'manufacturer', 'partner'].map((r) => (
            <label key={r}>
              <input
                type="radio"
                name="role"
                value={r}
                className="accent-orange-400 cursor-pointer"
                checked={role === r}
                onChange={(e) => setRole(e.target.value)}
              />{' '}
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </label>
          ))}
        </div>

        {/* ✅ Form */}
        <form ref={formRef} id="form-start" className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {role === 'manufacturer' && companyInput}
          {role !== 'manufacturer' && (
            <input className="w-full border p-2 rounded" name="name" placeholder="Name" required />
          )}
          <input className="w-full border p-2 rounded" name="email" placeholder="Email" type="email" required />
          <input className="w-full border p-2 rounded" name="phone" placeholder="Phone" type="tel" required />

          <input type="hidden" name="role" value={role} />

          {(role === 'seller' || role === 'partner' || role === 'manufacturer') && (
            <>
              <input className="w-full border p-2 rounded" name="location" placeholder="Location" required />
              <input className="w-full border p-2 rounded" name="pincode" placeholder="Pincode" type="text" required />
            </>
          )}

          {role === 'seller' && companyInput}

          {role === 'manufacturer' && (
            <input className="w-full border p-2 rounded" name="industry" placeholder="Industry Type" />
          )}

          {role === 'partner' && (
            <input className="w-full border p-2 rounded" name="referral" placeholder="Referral Code (optional)" />
          )}

          <textarea
            className="w-full border p-2 rounded"
            name="message"
            placeholder="Message (optional)"
          ></textarea>

          {!otpSent ? (
            <button
              type="button"
              onClick={sendOTP}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
            >
              Send OTP
            </button>
          ) : (
            <>
              <input
                className="w-full border p-2 rounded"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                type="button"
                onClick={verifyOTPAndSubmit}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Verify OTP & Submit
              </button>
            </>
          )}
        </form>

        {/* Recaptcha */}
        <div id="recaptcha-container"></div>

        <p className="mt-4 text-sm text-green-600 text-center">{result}</p>
      </div>

      {/* Success Modal */}
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


// import React, { useState, useRef, useEffect } from 'react';
// import emailjs from '@emailjs/browser';
// import { useLocation } from 'react-router-dom';

// const Register = () => {
//   const [role, setRole] = useState('customer');
//   const [result, setResult] = useState('');
//   const [showPopup, setShowPopup] = useState(false);
//   const formRef = useRef();
//   const location = useLocation();

//   // ✅ Set role based on URL hash (e.g., #seller)
//   useEffect(() => {
//     const hash = location.hash.replace('#', '');
//     if (['customer', 'seller', 'manufacturer', 'partner'].includes(hash)) {
//       setRole(hash);
//       setTimeout(() => {
//         document.getElementById('form-start')?.scrollIntoView({ behavior: 'smooth' });
//       }, 100);
//     }
//   }, [location]);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult('Sending...');

//     const form = event.target;
//     const formData = new FormData(form);
//     formData.append('access_key', '30760a73-2bd3-4c4c-8960-1f1827c2ab3c');

//     const jsonData = Object.fromEntries(formData.entries());

//     jsonData.location = jsonData.location || '';
//     jsonData.pincode = jsonData.pincode || '';

//     try {
//       const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         body: formData,
//       });

//       const web3formsData = await web3formsResponse.json();

//       await fetch(
//         'https://script.google.com/macros/s/AKfycbx0b9MXNmPC_fAjVH2L2ejm-oXpv1jUcuGYlys1_31v_KjAAXlxg0d7_XW0737axLKc_g/exec',
//         {
//           method: 'POST',
//           body: JSON.stringify(jsonData),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           mode: 'no-cors',
//         }
//       );

//       await emailjs.sendForm(
//         'service_5mmuavn',
//         'template_b226b71',
//         formRef.current,
//         'uzFpDMk4Hbc3uyDBj'
//       );

//       if (web3formsData.success) {
//         setResult('Form Submitted Successfully!');
//         setShowPopup(true);
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
//         <form ref={formRef} id="form-start" className="space-y-4" onSubmit={onSubmit}>
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

//       {/* Success Popup Modal */}
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



// import React, { useState, useRef, useEffect } from 'react';
// import emailjs from '@emailjs/browser';
// import { useLocation } from 'react-router-dom';

// /* 🔥  Firebase */
// import { auth } from './firebase-config';                   // ← your config file
// import {
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
// } from 'firebase/auth';

// const Register = () => {
//   /* ─────────────────────────── state ─────────────────────────── */
//   const [role, setRole]           = useState('customer');
//   const [result, setResult]       = useState('');
//   const [showPopup, setShowPopup] = useState(false);

//   /* OTP‑related */
//   const [phone, setPhone]               = useState('');
//   const [otp, setOtp]                   = useState('');
//   const [confirmation, setConfirmation] = useState(null);
//   const [otpVerified, setOtpVerified]   = useState(false);

//   const formRef  = useRef();
//   const location = useLocation();

//   /* ─────────────────────────── URL → role ────────────────────── */
//   useEffect(() => {
//     const hash = location.hash.replace('#', '');
//     if (['customer', 'seller', 'manufacturer', 'partner'].includes(hash)) {
//       setRole(hash);
//       setTimeout(() => {
//         document.getElementById('form-start')
//           ?.scrollIntoView({ behavior: 'smooth' });
//       }, 100);
//     }
//   }, [location]);

//   /* ─────────────────────────── OTP helpers ───────────────────── */
//   const sendOtp = async () => {
//     if (!phone.match(/^\+\d{10,15}$/)) {
//       alert('Use international format, e.g. +919876543210');
//       return;
//     }

//     try {
//       /* invisible reCAPTCHA */
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         auth,
//         'send‑otp',                                   // any DOM id will do
//         { size: 'invisible' }
//       );

//       const confirmationResult = await signInWithPhoneNumber(
//         auth,
//         phone,
//         window.recaptchaVerifier
//       );

//       setConfirmation(confirmationResult);
//       alert('OTP sent!');
//     } catch (err) {
//       console.error(err);
//       alert('Failed to send OTP, try again later.');
//     }
//   };

//   const verifyOtp = async () => {
//     if (!confirmation) return;

//     try {
//       await confirmation.confirm(otp);
//       setOtpVerified(true);
//       alert('✅ Phone verified!');
//     } catch {
//       alert('❌ Invalid OTP');
//     }
//   };

//   /* ─────────────────────────── submit form ───────────────────── */
//   const onSubmit = async (e) => {
//     e.preventDefault();

//     if (!otpVerified) {
//       alert('Please verify your phone number first.');
//       return;
//     }

//     setResult('Sending…');

//     const form       = e.target;
//     const formData   = new FormData(form);
//     formData.append('access_key', '30760a73-2bd3-4c4c-8960-1f1827c2ab3c');

//     const jsonData = Object.fromEntries(formData.entries());
//     jsonData.location = jsonData.location || '';
//     jsonData.pincode  = jsonData.pincode  || '';

//     try {
//       /* ➊ Web3Forms */
//       const web3formsRes  = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST', body: formData,
//       }).then(r => r.json());

//       /* ➋ Google Sheet */
//       await fetch(
//         'https://script.google.com/macros/s/AKfycbx0b9MXNmPC_fAjVH2L2ejm-oXpv1jUcuGYlys1_31v_KjAAXlxg0d7_XW0737axLKc_g/exec',
//         { method: 'POST', body: JSON.stringify(jsonData),
//           headers: { 'Content-Type': 'application/json' }, mode: 'no-cors' });

//       /* ➌ EmailJS */
//       await emailjs.sendForm(
//         'service_5mmuavn',
//         'template_b226b71',
//         formRef.current,
//         'uzFpDMk4Hbc3uyDBj'
//       );

//       if (web3formsRes.success) {
//         setResult('Form Submitted Successfully!');
//         setShowPopup(true);
//         form.reset();
//         setOtpVerified(false);
//         setConfirmation(null);
//       } else {
//         setResult('Submission failed. Please try again.');
//         console.log('Web3Forms error:', web3formsRes);
//       }
//     } catch (error) {
//       console.error(error);
//       setResult('Error submitting form.');
//     }
//   };

//   /* ─────────────────────────── UI ────────────────────────────── */
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
//         <h1 className="text-2xl font-bold mb-4 text-center text-orange-600">
//           Register
//         </h1>

//         {/* Role Selector */}
//         <div className="mb-4 text-center space-x-4">
//           {['customer','seller','manufacturer','partner'].map(r => (
//             <label key={r} className="capitalize">
//               <input
//                 type="radio"
//                 name="role"
//                 value={r}
//                 className="accent-orange-400 cursor-pointer"
//                 checked={role === r}
//                 onChange={(e) => setRole(e.target.value)}
//               />{' '}
//               {r === 'partner' ? 'Growth Partner' : r}
//             </label>
//           ))}
//         </div>

//         {/* Form */}
//         <form ref={formRef} id="form-start" className="space-y-4" onSubmit={onSubmit}>
//           {role === 'manufacturer' && companyInput}

//           {role !== 'manufacturer' && (
//             <input
//               className="w-full border p-2 rounded"
//               name="name"
//               placeholder="Name"
//               required
//             />
//           )}

//           <input
//             className="w-full border p-2 rounded"
//             name="email"
//             placeholder="Email"
//             type="email"
//             required
//           />

//           {/* PHONE + OTP */}
//           <div className="flex gap-2">
//             <input
//               className="flex-1 border p-2 rounded"
//               name="phone"
//               placeholder="+91XXXXXXXXXX"
//               type="tel"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               id="send‑otp"
//               onClick={sendOtp}
//               className="bg-orange-500 hover:bg-orange-600 text-white px-3 rounded"
//             >
//               Send OTP
//             </button>
//           </div>

//           {confirmation && !otpVerified && (
//             <div className="flex gap-2">
//               <input
//                 className="flex-1 border p-2 rounded"
//                 placeholder="Enter OTP"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//               />
//               <button
//                 type="button"
//                 onClick={verifyOtp}
//                 className="bg-orange-500 hover:bg-orange-600 text-white px-3 rounded"
//               >
//                 Verify
//               </button>
//             </div>
//           )}

//           {otpVerified && (
//             <p className="text-green-600 text-sm">Phone number verified ✅</p>
//           )}

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
//             <input
//               className="w-full border p-2 rounded"
//               name="industry"
//               placeholder="Industry Type"
//             />
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
//             className={`w-full ${
//               otpVerified
//                 ? 'bg-orange-500 hover:bg-orange-600'
//                 : 'bg-gray-400 cursor-not-allowed'
//             } text-white px-4 py-2 rounded transition-colors`}
//             type="submit"
//             disabled={!otpVerified}
//           >
//             Submit
//           </button>
//         </form>

//         <p className="mt-4 text-sm text-green-600 text-center">{result}</p>
//       </div>

//       {/* Success Popup */}
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
