import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function DocumentView() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  
  const defaultPdfPath = "/docs/Policy/TERMS AND CONDITIONS FOR DAAKHIL NOW SERVICES WEBSITE.pdf";
  const { pdfUrl, title } = location.state || { pdfUrl: defaultPdfPath, title: "TERMS AND CONDITIONS FOR DAAKHIL NOW SERVICES WEBSITE" };

  // Payment states
  const [isPaid, setIsPaid] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Document details - you can pass these as state or fetch from an API
  const documentDetails = {
    title: title,
    price: 299,
    currency: "₹",
    description:
      `Complete ${title} document with all necessary guidelines and instructions.`,
  };

  const handlePayment = () => {
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
    }, 1500);

  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl px-4 py-4 flex items-center">
          <button
            onClick={goBack}
            className="mr-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 cursor-pointer"
          >
            Back to Home
          </button>
          <h2 className="text-xl font-semibold text-gray-800">
            {documentDetails.title}
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-grow">
        <div className="flex-grow flex flex-col items-center p-4">
          <iframe
            src={pdfUrl}
            className="w-full h-full border-0 rounded shadow-lg bg-white"
            title="PDF Viewer"
          />
        </div>

        {/* Sidebar with payment info */}
        <div className="w-full md:w-[20%] bg-white p-6 rounded-lg shadow-lg flex flex-col my-5 mx-2">
          <h3 className="text-xl font-bold mb-2">{documentDetails.title}</h3>

          <div className="mb-4">
            <p className="text-gray-600">{documentDetails.description}</p>
          </div>

          <div className="my-4 py-4 border-t border-b border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-medium">Price:</span>
              <span className="text-2xl font-bold text-gray-800">
                {documentDetails.currency}
                {documentDetails.price}
              </span>
            </div>
          </div>

          {isPaid ? (
            <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Payment Successful</span>
              </div>
              <p className="mt-2 text-sm">
                You now have full access to this service.
              </p>
            </div>
          ) : (
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className={`w-full py-3 px-4 rounded-md font-medium text-white transition duration-300 ${
                isProcessing
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isProcessing ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                `Buy Now for ${documentDetails.currency}${documentDetails.price}`
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
