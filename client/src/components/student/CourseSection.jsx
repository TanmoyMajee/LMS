import React ,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import {AppContext} from '../../context/AppContext'
import CourseCard from './CourseCard'
function CourseSection() {
  const { allCourses } = useContext(AppContext)
  return (
    <div className="mt-12 px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-800">
        Learn From the best
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.
      </p>

       {/* Responsive grid container for course cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {allCourses.slice(0, 4).map((course, i) => (
          <CourseCard key={i} course={course} />
        ))}
      </div>

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
