import React from 'react'
import { assets } from '../../assets/assets'

function Companies() {
  return (
    // Adds top margin and horizontal padding
    <div className="mt-12 px-4">
      {/* Centered title with bottom margin */}
      <p className="text-center text-lg text-gray-700 mb-4">
        Trusted by Learners from
      </p>
      {/* Flex container for logos with wrapping and gap between items */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        <img src={assets.microsoft_logo} alt="Microsoft" className="h-10 object-contain" />
        <img src={assets.walmart_logo} alt="Walmart" className="h-10 object-contain" />
        <img src={assets.accenture_logo} alt="Accenture" className="h-10 object-contain" />
        <img src={assets.adobe_logo} alt="Adobe" className="h-10 object-contain" />
        <img src={assets.paypal_logo} alt="PayPal" className="h-10 object-contain" />
      </div>
    </div>
  )
}

export default Companies
