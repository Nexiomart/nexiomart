import { useEffect } from 'react';

const Platform = () => {
  useEffect(() => {
    // Redirect to the external Vercel URL
    window.location.href = 'https://nexio-ecommerce-qbdl.vercel.app/';
  }, []);

  // Optional: Show a loading message while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-50 to-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-lg text-gray-600">Redirecting to platform...</p>
      </div>
    </div>
  );
};

export default Platform;
