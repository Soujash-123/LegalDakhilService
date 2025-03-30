import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function DocumentView() {
  const location = useLocation();
  const navigate = useNavigate();
  const { documentName } = useParams();
  console.log(location.state);
  
  const defaultPdfPath = "/docs/Policy/TERMS AND CONDITIONS FOR DAAKHIL NOW SERVICES WEBSITE.pdf";
  const { pdfUrl, title } = location.state || { pdfUrl: defaultPdfPath, title: decodeURIComponent(documentName) };

  // Payment states
  const [isPaid, setIsPaid] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Document details - you can pass these as state or fetch from an API
  const documentDetails = {
    title: title,
    price: 299,
    currency: "₹",
    description:
      `Complete ${title} document with all necessary guidelines and instructions.`,
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch('http://ec2-43-204-215-114.ap-south-1.compute.amazonaws.com:5001/create_payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        mode: 'cors',
        body: JSON.stringify({
          razorpay_key_id: "rzp_test_JrKAzmnInWh8vu",
          razorpay_key_secret: "R9wompUtizorFSSDUR5QIq95",
          amount: documentDetails.price,
          phone: "9876543210"
        }),
      });

      const data = await response.json();
      if (data.payment_url) {
        setPaymentUrl(data.payment_url);
        setShowPaymentModal(true);
      } else {
        throw new Error('Payment URL not received');
      }
    } catch (error) {
      console.error('Payment creation failed:', error);
      alert('Failed to initiate payment');
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaymentModalClose = () => {
    setShowPaymentModal(false);
    setPaymentUrl(null);
  };

  const goBack = () => {
    navigate(-1);
  };

  // Add this function to monitor iframe URL changes
  const handleIframeLoad = (event) => {
    try {
      const iframeUrl = event.target.contentWindow.location.href;
      console.log("Current iframe URL:", iframeUrl);
      
      // Close modal if URL is not from razorpay.com
      if (!iframeUrl.includes('razorpay.com')) {
        console.log("Closing modal because URL is not from razorpay.com");
        handlePaymentModalClose();
        setIsPaid(true);
      }
    } catch (error) {
      // Log more detailed error information
      console.log("Cannot access iframe URL due to cross-origin policy");
      console.log("Error details:", error);
    }
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
        <div className="flex-grow p-8">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-100">
            <div className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">
                {documentDetails.title}
              </h1>
              
              {/* Document Content */}
              <div className="space-y-8">
                <section className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-900">1. Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to Daakhil Now Services. These terms and conditions govern your use of our website and services.
                  </p>
                </section>

                <section className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-900">2. Definitions</h2>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                      <span className="font-medium">"Service"</span> refers to the legal document preparation services provided by Daakhil Now
                    </li>
                    <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                      <span className="font-medium">"User"</span> refers to any individual or entity using our services
                    </li>
                    <li className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                      <span className="font-medium">"Website"</span> refers to the Daakhil Now website and platform
                    </li>
                  </ul>
                </section>

                <section className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-900">3. Service Usage</h2>
                  <p className="text-gray-700 leading-relaxed">
                    By using our services, you agree to comply with these terms and conditions. Our services are intended for legal document preparation and should not be construed as legal advice.
                  </p>
                </section>

                <section className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-900">4. Payment Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    All payments are processed securely through our payment partners. Prices are subject to change without notice.
                  </p>
                </section>

                <section className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-900">5. Privacy Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We take your privacy seriously. All personal information is handled in accordance with our privacy policy.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar with payment info */}
        <div className="w-full md:w-[20%] bg-white p-6 rounded-xl shadow-xl flex flex-col my-5 mx-2 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900">{documentDetails.title}</h3>

          <div className="mb-6">
            <p className="text-gray-600 leading-relaxed">{documentDetails.description}</p>
          </div>

          <div className="my-6 py-6 border-t border-b border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">Price:</span>
              <span className="text-3xl font-bold text-blue-900">
                {documentDetails.currency}
                {documentDetails.price}
              </span>
            </div>
          </div>

          {isPaid ? (
            <div className="bg-green-50 text-green-800 p-6 rounded-lg mb-4 border border-green-200">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3"
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
              <p className="mt-3 text-sm">
                You now have full access to this service.
              </p>
            </div>
          ) : (
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className={`w-full py-4 px-6 rounded-lg font-medium text-white transition duration-300 transform hover:scale-105 ${
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

      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Complete Payment</h3>
              <button 
                onClick={handlePaymentModalClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <iframe
              src={paymentUrl}
              className="w-full h-[600px] border-0"
              allow="payment"
              onLoad={handleIframeLoad}
            />
          </div>
        </div>
      )}
    </div>
  );
}
