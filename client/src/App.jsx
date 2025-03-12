import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './pages/student/Loading'
import Educator from './pages/educator/Educator'
import AddCourse from './pages/educator/AddCourse'
import MyCourse from './pages/educator/MyCourses'
import StudentEnrolled from './pages/educator/StudentEnrolled'
import DashBoard from './pages/educator/DashBoard'
import Navbar from './pages/student/Navbar'

// import Educator from './pages/educator/Educator' 
function App() {
  const isEducatorRoute = location.pathname.startsWith('/educator');
  return (
  <div className='text-default min-h-screen bg-white'>
    {
      !isEducatorRoute && <Navbar/>
    }
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course-list' element={<CourseList/>}/>
     <Route path='/course-list/:input' element={<CourseList/>}/>
    <Route path='/course/:id' element={<CourseDetails/>}/>
        <Route path='/my-enrollments' element={<MyEnrollments/>}/>
         <Route path='/player/:courseId' element={<Player/>}/>
          <Route path='/loading/:path' element={<Loading/>}/>
          {/* Nesteds Route for Educator */}
          <Route path='/educator' element={<Educator/>}>
              <Route path='dashboard' element={<DashBoard/>}/>
               <Route path='addcourse' element={<AddCourse/>}/>
                <Route path='student-enrolled' element={<StudentEnrolled/>}/>
                <Route path='mycourses' element={<MyCourse/>}/>
          </Route>
    </Routes> 
  </div>
  )
}

export default App