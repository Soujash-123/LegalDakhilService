import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function DocumentView() {
    const location = useLocation();
  const navigate = useNavigate();
  
  const defaultPdfPath = "/docs/GST/GSTR-10.pdf";
  const { pdfUrl } = location.state || { pdfUrl: defaultPdfPath };
  
  const goBack = () => {
    navigate('/');
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          <button 
            onClick={goBack} 
            className="mr-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
          >
            Back to Home
          </button>
          <h2 className="text-xl font-semibold text-gray-800">PDF Document Viewer</h2>
        </div>
      </div>
      
      <div className="flex-grow flex flex-col items-center p-4">
        <iframe 
          src={pdfUrl}
          className="w-full h-[80vh] border-0 rounded shadow-lg bg-white"
          title="PDF Viewer"
        />
      </div>
    </div>
  )
}
