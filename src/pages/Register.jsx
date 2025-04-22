import React, { useState } from 'react';

const Register = () => {
  const [role, setRole] = useState('customer');
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);

    // Append your Web3Forms access key here
    formData.append('access_key', 'd5ca068f-e178-4b40-8d0a-412c2b8d0eae');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully!');
      event.target.reset();
    } else {
      console.log('Error:', data);
      setResult(data.message || 'Something went wrong.');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Register</h1>

      {/* Role Selector */}
      <div className="mb-4">
        <label className="mr-4 ">
          <input
            type="radio"
            name="role"
            value="customer"
            className="accent-orange-400 cursor-pointer transition duration-200"
            checked={role === 'customer'}
            onChange={(e) => setRole(e.target.value)}
          />{' '}
          Customer
        </label>
        <label className="mr-4">
          <input
            type="radio"
            name="role"
            value="supplier"
            className="accent-orange-400 cursor-pointer transition duration-100"
            checked={role === 'supplier'}
            onChange={(e) => setRole(e.target.value)}
          />{' '}
          Supplier
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="partner"
            className="accent-orange-400 cursor-pointer transition duration-100"
            checked={role === 'partner'}
            onChange={(e) => setRole(e.target.value)}
          />{' '}
          Growth Partner
        </label>
      </div>

      {/* Form */}
      <form className="space-y-4 max-w-md" onSubmit={onSubmit}>
        <input className="w-full border p-2" name="name" placeholder="Name" required />
        <input className="w-full border p-2" name="email" placeholder="Email" type="email" required />
        <input className="w-full border p-2" name="phone" placeholder="Phone" type="tel" required />

        <input type="hidden" name="role" value={role} />

        {role === 'supplier' && (
          <input className="w-full border p-2" name="company" placeholder="Company Name" />
        )}

        {role === 'partner' && (
          <input
            className="w-full border p-2"
            name="referral"
            placeholder="Referral Code (optional)"
          />
        )}

        <textarea
          className="w-full border p-2"
          name="message"
          placeholder="Message (optional)"
        ></textarea>

        <button className="bg-orange-500 text-white px-4 py-2 rounded" type="submit">
          Submit
        </button>
      </form>

      {/* Result */}
      <p className="mt-4 text-sm text-green-600">{result}</p>
    </div>
  );
};

export default Register;


// import React, { useState } from 'react';

// const Register = () => {
//   const [role, setRole] = useState('customer');
//   return (

//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Register</h1>
//       <div className="mb-4">
//         <label className="mr-4">
//           <input type="radio" name="role" value="customer" checked={role === 'customer'} onChange={(e) => setRole(e.target.value)} /> Customer
//         </label>
//         <label className="mr-4">
//           <input type="radio" name="role" value="supplier" checked={role === 'supplier'} onChange={(e) => setRole(e.target.value)} /> Supplier
//         </label>
//         <label>
//           <input type="radio" name="role" value="partner" checked={role === 'partner'} onChange={(e) => setRole(e.target.value)} /> Growth Partner
//         </label>
//       </div>
//       <form className="space-y-4 max-w-md">
//         <input className="w-full border p-2" placeholder="Name" required />
//         <input className="w-full border p-2" placeholder="Email" type="email" required />
//         <input className="w-full border p-2" placeholder="Phone" type="tel" required />
//         {role === 'supplier' && <input className="w-full border p-2" placeholder="Company Name" />} 
//         {role === 'partner' && <input className="w-full border p-2" placeholder="Referral Code (optional)" />} 
//         <button className="bg-orange-500 text-white px-4 py-2 rounded">Submit</button>
//       </form>
//     </div>
//   );
// };




// export default function Register() {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "d5ca068f-e178-4b40-8d0a-412c2b8d0eae");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input type="text" name="name" required/>
//         <input type="email" name="email" required/>
//         <textarea name="message" required></textarea>

//         <button type="submit">Submit Form</button>

//       </form>
//       <span>{result}</span>

//     </div>
//   );
// }


// export default Register;