// import React, { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const Register = () => {
//   const [role, setRole] = useState('customer');
//   const [result, setResult] = useState('');
//   const formRef = useRef();

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult('Sending...');

//     const form = event.target;
//     const formData = new FormData(form);
//     formData.append('access_key', '30760a73-2bd3-4c4c-8960-1f1827c2ab3c');

//     const jsonData = Object.fromEntries(formData.entries());

//     try {
//       const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         body: formData,
//       });

//       const web3formsData = await web3formsResponse.json();

//       await fetch('https://script.google.com/macros/s/AKfycbylVQEWZNMkLJuwhSegK6saz1_ztoZQup0r4rMn7SFH_GObULW7V8kJD5fSDLwoHIuifQ/exec', {
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
//           <input className="w-full border p-2 rounded" name="name" placeholder="Name" required />
//           <input className="w-full border p-2 rounded" name="email" placeholder="Email" type="email" required />
//           <input className="w-full border p-2 rounded" name="phone" placeholder="Phone" type="tel" required />
//           {(role === 'seller' || role === 'partner') && (
//   <>
//     <input
//       className="w-full border p-2 rounded"
//       name="location"
//       placeholder="Location"
//       required
//     />
//     <input
//       className="w-full border p-2 rounded"
//       name="pincode"
//       placeholder="Pincode"
//       required
//     />
//   </>
// )}


//           <input type="hidden" name="role" value={role} />

//           {/* // { Only show for seller and partner
//           // {(role === 'seller' || role === 'partner') && (
//           //   <>
//           //     <input className="w-full border p-2 rounded" name="location" placeholder="Location" required />
//           //     <input className="w-full border p-2 rounded" name="pincode" placeholder="Pincode" type="number" required />
//           //   </>
//           // )} } */}

//           {role === 'seller' && (
//             <input className="w-full border p-2 rounded" name="company" placeholder="Firm Name" />
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

//         <p className="mt-4 text-sm text-green-600 text-center">{result}</p>
//       </div>
//     </div>
//   );
// };

// export default Register;



import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Register = () => {
  const [role, setRole] = useState('customer');
  const [result, setResult] = useState('');
  const formRef = useRef(); // For EmailJS

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    const form = event.target;
    const formData = new FormData(form);
    formData.append('access_key', '30760a73-2bd3-4c4c-8960-1f1827c2ab3c'); // Web3Forms API Key

    // Convert to plain object for Google Sheets
    const jsonData = Object.fromEntries(formData.entries());

    jsonData.location = jsonData.location || '';
jsonData.pincode = jsonData.pincode || '';


    try {
      // 1️⃣ Send to Web3Forms (Admin Email)
      const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const web3formsData = await web3formsResponse.json();

      // https://script.google.com/macros/s/AKfycbylVQEWZNMkLJuwhSegK6saz1_ztoZQup0r4rMn7SFH_GObULW7V8kJD5fSDLwoHIuifQ/exec
      // 2️⃣ Send to Google Sheets 
      await fetch('https://script.google.com/macros/s/AKfycbwWICpzrKSM-sRa8vGh0RWvmd1Oe6JtikJC4Y12-njl5stqpn2v-EbCLvq3vMs6BSmtMw/exec', {
        method: 'POST',
        body: JSON.stringify(jsonData),
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
      });

      // 3️⃣ Send confirmation email to user using EmailJS
      await emailjs.sendForm(
        'service_5mmuavn',     // EmailJS Service ID
        'template_b226b71',    // EmailJS Template ID
        formRef.current,       // Form reference
        'uzFpDMk4Hbc3uyDBj'   // EmailJS Public Key
      );

      // Check if Web3Forms response is successful
      if (web3formsData.success) {
        setResult('Form Submitted Successfully!');
        form.reset(); // Reset form after successful submission
      } else {
        setResult('Submission failed. Please try again.');
        console.log('Web3Forms error:', web3formsData);
      }

    } catch (error) {
      console.error('Error:', error);
      setResult('Error submitting form.');
    }
  };

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
              value="partner"
              className="accent-orange-400 cursor-pointer"
              checked={role === 'partner'}
              onChange={(e) => setRole(e.target.value)}
            />{' '}
            Growth Partner
          </label>
        </div>

        {/* Form */}
        <form ref={formRef} className="space-y-4" onSubmit={onSubmit}>
          <input className="w-full border p-2 rounded" name="name" placeholder="Name" required />
          <input className="w-full border p-2 rounded" name="email" placeholder="Email" type="email" required />
          <input className="w-full border p-2 rounded" name="phone" placeholder="Phone" type="tel" required />

          <input type="hidden" name="role" value={role} />

          {(role === 'seller' || role === 'partner') && (
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


          {role === 'seller' && (
            <input className="w-full border p-2 rounded" name="company" placeholder="Firm Name" />

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
    </div>
  );
};

export default Register;













// import React, { useState } from 'react';

// const Register = () => {
//   const [role, setRole] = useState('customer');
//   const [result, setResult] = useState('');


//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult('Sending...');
  
//     const form = event.target;
//     const formData = new FormData(form);
//     formData.append('access_key', '30760a73-2bd3-4c4c-8960-1f1827c2ab3c'); // Web3Forms API Key
  
//     // Convert to plain object for Google Sheets
//     const jsonData = Object.fromEntries(formData.entries());
  
//     try {
//       // 1. Send to Web3Forms (for email)
//       const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         body: formData,
//       });
  
//       const web3formsData = await web3formsResponse.json();
  
//       // 2. Send to Google Sheets
//       const googleSheetsResponse = await fetch('https://script.google.com/macros/s/AKfycbylVQEWZNMkLJuwhSegK6saz1_ztoZQup0r4rMn7SFH_GObULW7V8kJD5fSDLwoHIuifQ/exec', {
//         method: 'POST',
//         body: JSON.stringify(jsonData),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         mode: 'no-cors', // <-- workaround for CORS
//       });
      
//       if (web3formsData.success) {
//         setResult('Form Submitted Successfully!');
//         form.reset();
//       } else {
//         setResult('Submission failed. Please try again.');
//         console.log('Web3Forms:', web3formsData);
//         console.log('Google Sheets:', googleSheetsData);
//       }
  
//     } catch (error) {
//       console.error('Error:', error);
//       setResult('Error submitting form.');
//     }
//   };
  
 
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
//               value="partner"
//               className="accent-orange-400 cursor-pointer"
//               checked={role === 'partner'}
//               onChange={(e) => setRole(e.target.value)}
//             />{' '}
//             Growth Partner
//           </label>
//         </div>

//         {/* Form */}
//         <form className="space-y-4" onSubmit={onSubmit}>
//           <input className="w-full border p-2 rounded" name="name" placeholder="Name" required />
//           <input className="w-full border p-2 rounded" name="email" placeholder="Email" type="email" required />
//           <input className="w-full border p-2 rounded" name="phone" placeholder="Phone" type="tel" required />

//           <input type="hidden" name="role" value={role} />

//           {role === 'seller' && (
//             <input className="w-full border p-2 rounded" name="company" placeholder="Firm Name" />
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
//     </div>
//   );
// };

// export default Register;

