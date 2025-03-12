import React from 'react';
import { assets } from '../../assets/assets';

function Hero() {
  return (
    <div className="bg-gray-50 py-16 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-900">
        Empower your future with the courses designed to{' '}
        <span className="text-blue-600">fit your choice.</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        We bring together world-class instructors to help you achieve your professional goals.
      </p>
     
    </div>
  );
}

export default Hero;
