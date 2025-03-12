import React from 'react'
import { Link } from 'react-router-dom'

function CourseSection() {
  return (
    <div className="mt-12 px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-800">
        Learn From the best
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.
      </p>
      <Link 
        to="/course-list" 
        className="inline-block mt-6 text-blue-600 hover:underline"
      >
        Show all the Courses
      </Link>
    </div>
  )
}

export default CourseSection
