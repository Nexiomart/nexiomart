import React from "react";

export const Card = ({ children }) => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 max-w-sm text-center hover:shadow-xl transition">
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="text-gray-600 mt-3">{children}</div>
);
