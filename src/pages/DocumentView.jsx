import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function DocumentView() {
  const location = useLocation();
  const navigate = useNavigate();
  const { documentName } = useParams();
  const [activeSection, setActiveSection] = useState(0);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [progress, setProgress] = useState(0);
  const sectionsRef = useRef([]);
  
  const defaultPdfPath = "/docs/Policy/TERMS AND CONDITIONS FOR DAAKHIL NOW SERVICES WEBSITE.pdf";
  const { pdfUrl, title } = location.state || { pdfUrl: defaultPdfPath, title: decodeURIComponent(documentName) };

  // Payment states
  const [isPaid, setIsPaid] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Document details
  const documentDetails = {
    title: title,
    price: 299,
    currency: "₹",
    description:
      `Complete ${title} document with all necessary guidelines and instructions.`,
  };

  const sections = [
    {
      id: 'intro',
      title: 'Introduction',
      content: 'Welcome to Daakhil Now Services. These terms and conditions govern your use of our website and services.',
      icon: '📝'
    },
    {
      id: 'definitions',
      title: 'Definitions',
      items: [
        '"Service" refers to the legal document preparation services provided by Daakhil Now',
        '"User" refers to any individual or entity using our services',
        '"Website" refers to the Daakhil Now website and platform'
      ],
      icon: '📚'
    },
    {
      id: 'usage',
      title: 'Service Usage',
      content: 'By using our services, you agree to comply with these terms and conditions. Our services are intended for legal document preparation and should not be construed as legal advice.',
      icon: '⚖️'
    },
    {
      id: 'payment',
      title: 'Payment Terms',
      content: 'All payments are processed securely through our payment partners. Prices are subject to change without notice.',
      icon: '💳'
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      content: 'We take your privacy seriously. All personal information is handled in accordance with our privacy policy.',
      icon: '🔒'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
      setProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToNextSection = () => {
    if (activeSection < sections.length - 1) {
      setActiveSection(prev => prev + 1);
      sectionsRef.current[activeSection + 1]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPreviousSection = () => {
    if (activeSection > 0) {
      setActiveSection(prev => prev - 1);
      sectionsRef.current[activeSection - 1]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToSection = (index) => {
    setActiveSection(index);
    sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSectionHover = (index) => {
    setHoveredSection(index);
  };

  const handleSectionLeave = () => {
    setHoveredSection(null);
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch('https://synlink-1.onrender.com/create_payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: documentDetails.price.toString(),
          phone: "9876543210",
          razorpay_key_id: "rzp_test_JrKAzmnInWh8vu",
          razorpay_key_secret: "R9wompUtizorFSSDUR5QIq95",
          redirect_url: window.location.href
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
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
          <button
            onClick={goBack}
                className="mr-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 flex items-center"
          >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
            Back to Home
          </button>
          <h2 className="text-xl font-semibold text-gray-800">
            {documentDetails.title}
          </h2>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Progress:</span>
              <span className="text-sm font-semibold text-blue-600">{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Navigation Timeline */}
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 right-0 h-1 bg-gray-200 top-1/2 -translate-y-1/2" />
            {sections.map((section, index) => (
              <div key={section.id} className="relative z-10">
                <button
                  onClick={() => goToSection(index)}
                  onMouseEnter={() => handleSectionHover(index)}
                  onMouseLeave={handleSectionLeave}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    index === activeSection || index === hoveredSection
                      ? 'bg-blue-600 text-white scale-110'
                      : index < activeSection
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
                  {section.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-grow">
        <div className="flex-grow p-8">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="border-b border-gray-200 pb-6 mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{documentDetails.title}</h1>
                <p className="text-gray-600 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
              
              {/* Document Content */}
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    ref={el => sectionsRef.current[index] = el}
                    onMouseEnter={() => handleSectionHover(index)}
                    onMouseLeave={handleSectionLeave}
                    className={`transform transition-all duration-1000 ${
                      index === activeSection || index === hoveredSection
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-50 translate-y-4'
                    }`}
                  >
                    <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-4">{section.icon}</span>
                        <h2 className="text-2xl font-semibold text-gray-800">
                          {index + 1}. {section.title}
                        </h2>
                      </div>
                      
                      {section.content && (
                        <p className="text-gray-700 leading-relaxed pl-12">
                          {section.content}
                        </p>
                      )}
                      
                      {section.items && (
                        <ul className="list-none space-y-3 pl-12">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                                {i + 1}
                              </span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </section>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white rounded-full shadow-lg px-6 py-3">
                <button
                  onClick={goToPreviousSection}
                  disabled={activeSection === 0}
                  className={`p-2 rounded-full ${
                    activeSection === 0
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-gray-600">
                  {activeSection + 1} of {sections.length}
                </span>
                <button
                  onClick={goToNextSection}
                  disabled={activeSection === sections.length - 1}
                  className={`p-2 rounded-full ${
                    activeSection === sections.length - 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar with payment info */}
        <div className="w-full md:w-[20%] bg-white p-6 rounded-xl shadow-lg flex flex-col my-5 mx-2 sticky top-24 h-fit">
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{documentDetails.title}</h3>
            <p className="text-gray-600 text-sm">{documentDetails.description}</p>
          </div>

          <div className="my-4 py-4 border-t border-b border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-600">Price:</span>
              <span className="text-2xl font-bold text-gray-800">
                {documentDetails.currency}
                {documentDetails.price}
              </span>
            </div>
          </div>

          {isPaid ? (
            <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-4">
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
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition duration-300 ${
                isProcessing
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg"
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
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-xl w-full max-w-2xl shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Complete Payment</h3>
              <button 
                onClick={handlePaymentModalClose}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                ✕
              </button>
            </div>
            <iframe
              src={paymentUrl}
              className="w-full h-[600px] border-0 rounded-lg"
              allow="payment"
              onLoad={handleIframeLoad}
            />
          </div>
        </div>
      )}
    </div>
  );
}
