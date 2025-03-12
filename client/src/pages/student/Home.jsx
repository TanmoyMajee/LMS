import React from 'react';
import Hero from '../../components/student/Hero'
import SearchBar from '../../components/student/SearchBar'
import CourseSection from '../../components/student/CourseSection'
import Companies from '../../components/student/Companies'

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Hero /> */}
      <SearchBar/> 
      <CourseSection/>
      <Companies/>
    </div>
  );
}

export default Home;
