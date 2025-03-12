import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate} from 'react-router-dom'

function SearchBar({data}) {
  const navigate = useNavigate()
  const [input,setInput] = useState(data ? data : '')

  const onSearchHandler = (e)=>{
      e.preventDefault()
      console.log(input)
      navigate('/course-list/' + input)
  }
  return (
    // Adds top margin and centers the form horizontally
    <div className="mt-8 flex justify-center">
      <form onSubmit={onSearchHandler} className="flex items-center w-full max-w-md">
        {/* Search icon with margin-right for spacing */}
        <img src={assets.search_icon} alt="search-icon" className="w-5 h-5 mr-2" />
        {/* Input field styled with border and focus ring */}
        <input
          value={input}
          onChange={e=>setInput(e.target.value)}
          type="text"
          placeholder="Search for courses"
          className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Submit button with hover transition */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
