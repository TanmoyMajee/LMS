import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

function CourseCard({ course }) {
  const { currency,calAvgCourseRating } = useContext(AppContext)
  return (
    <Link
      to={'/course/' + course._id}
      onClick={() => scrollTo(0, 0)}
      className="block bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl"
    >
      {/* Course Thumbnail */}
      <img
        src={course.courseThumbnail}
        alt={course.courseTitle}
        className="w-full h-40 object-cover md:h-48"
      />
      <div className="p-4">
        {/* Course Title */}
        <h3 className="text-xl font-semibold text-gray-800">{course.courseTitle}</h3>
        {/* Educator Name */}
        <p className="text-sm text-gray-500 mt-1">{course.educator.name}</p>
        {/* Rating */}
        <div className="flex items-center mt-2">
          <p className="text-sm text-yellow-500 font-bold">{calAvgCourseRating(course)}</p>
          {/* Optionally, add star icons here if available */}
          <span className="ml-1 text-sm text-gray-600">Rating</span>
        </div>
        {/* Price Calculation */}
        <p className="mt-2 text-lg font-semibold text-gray-900">
          {currency}
          {(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}
        </p>
      </div>
    </Link>
  )
}

export default CourseCard
