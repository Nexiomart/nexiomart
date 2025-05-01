import React, { useState } from 'react';

const ContactUs = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const form = event.target;
    const formData = new FormData(form);

    formData.append('access_key', '30760a73-2bd3-4c4c-8960-1f1827c2ab3c'); // Web3Forms

    // Convert to JSON for Google Sheets
    const jsonData = Object.fromEntries(formData.entries());

    try {
      // Send to Web3Forms (email)
      const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const web3formsData = await web3formsResponse.json();

      // Send to Google Sheets (spreadsheet)
      await fetch('https://script.google.com/macros/s/AKfycbylVQEWZNMkLJuwhSegK6saz1_ztoZQup0r4rMn7SFH_GObULW7V8kJD5fSDLwoHIuifQ/exec', {
        method: 'POST',
        body: JSON.stringify(jsonData),
        headers: {
          'Content-Type': 'text/plain', // prevent preflight (CORS workaround)
        },
        mode: 'no-cors', // allow sending without blocking
      });

      if (web3formsData.success) {
        setResult('Form Submitted Successfully');
        form.reset();
      } else {
        console.error('Error:', web3formsData);
        setResult(web3formsData.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setResult('Error submitting form.');
    }
  };


  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-orange-50 shadow-xl shadow-orange-200/100 text-orange-900 p-8 rounded-2xl w-full max-w-xl">
        <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">Contact Us</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="4"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>
        {result && <p className="mt-4 text-center text-sm text-orange-600">{result}</p>}
      </div>
    </section>
  );
};

export default ContactUs;