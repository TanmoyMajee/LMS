import React from 'react';
import Hero from './Hero';
import Companies from './Companies';
import SearchBar from './SearchBar'
import CourseSection from './CourseSection';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SearchBar/> 
      <CourseSection/>
      <Companies/>
    </div>
  );
}

export default Home;
