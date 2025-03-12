import { createContext, useEffect, useState } from "react";
import {dummyCourses} from '../assets/assets'

 export const AppContext = createContext();

 export const AppContextProvider = (props)=>{

  const currency = import.meta.env.VITE_CURRENCY
  const [allCourses,setallCourses] = useState([])
  const [isEducator,setEducator] = useState(true)

  // Fecth all COurses
  const fecthAllCourses = async()=>{
    setallCourses(dummyCourses)
  }
// cal Avg Ratin of a perticular courses
const calAvgCourseRating = (course)=>{
    if(course.courseRatings.length === 0)
      return 0;
    let totalRating = 0;
    course.courseRatings.forEach(obj => {
      totalRating+=obj.rating;
    });
    return totalRating / course.courseRatings.length
}

  useEffect( ()=>{
    fecthAllCourses()
  },[])
   const value = {
        currency,allCourses,calAvgCourseRating,
        isEducator,setEducator
      }  
  return(
      <AppContext.Provider value={value}>
        {props.children}
      </AppContext.Provider>
    )
 }