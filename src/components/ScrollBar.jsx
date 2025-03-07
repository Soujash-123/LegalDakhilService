import React from 'react'

export default function ScrollBar() {
  return (
    <div className="bg-gray-900 text-white py-2 w-full overflow-hidden">
      <div className="relative w-full">
        <div 
          className="animate-marquee whitespace-nowrap"
          style={{
            animation: 'scroll 30s linear infinite',
          }}
        >
          <div className="inline-flex space-x-12">
            <div className="flex items-center">
              <span className="text-amber-400">📣</span>
              <span className="ml-2">Latest Legal Update: New GST filing regulations effective from April 1st</span>
            </div>
            <div className="flex items-center">
              <span className="text-amber-400">🏆</span>
              <span className="ml-2">Special Offer: 20% discount on Trademark Registration</span>
            </div>
            <div className="flex items-center">
              <span className="text-amber-400">📝</span>
              <span className="ml-2">Now Open: Legal consultancy services in Bangalore, Mumbai, and Delhi</span>
            </div>
            <div className="flex items-center">
              <span className="text-amber-400">⚖️</span>
              <span className="ml-2">New Service Launch: International Trademark Registration assistance now available</span>
            </div>
            <div className="flex items-center">
              <span className="text-amber-400">🔔</span>
              <span className="ml-2">Important: File your ITR before the deadline to avoid penalties</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add the necessary CSS animation keyframes */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}
