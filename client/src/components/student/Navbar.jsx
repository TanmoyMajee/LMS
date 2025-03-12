
import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

function Navbar() {
  const location = useLocation();
  const isCourseLisPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const { isEducator } = useContext(AppContext);

  return (
    <div
      className={`flex items-center justify-between 
      px-4 sm:px-10 md:px-14 lg:px-15 
      h-16 border-b border-gray-500 
      py-4 md:py-0 
      ${isCourseLisPage ? "bg-white" : "bg-cyan-100/70"}`}
    >
      {/* Logo (clickable) */}
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-center gap-5 text-gray-500">
        <div className="flex items-center justify-center gap-5">
          {user && (
            <>
              <button onClick={() => navigate("/educator")}>
                {isEducator ? "Educator Dashboard" : "Become Educator"}
              </button>
              |
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-3 py-2 mx-1 rounded-full cursor-pointer"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile View (smaller text & spacing) */}
      <div className="md:hidden w-full px-2 relative text-[11px] leading-tight">
        {/* If the user is not signed in, show the icon in top-right */}
        {!user && (
          <div className="absolute top-2 right-2">
            <button onClick={() => openSignIn()} className="p-1">
              <img
                src={assets.user_icon}
                alt="User Icon"
                className="w-4 h-4"
              />
            </button>
          </div>
        )}
        {/* If the user is signed in, show the Clerk UserButton in top-right */}
        {user && (
          <div className="absolute top-2 right-2">
            <UserButton />
          </div>
        )}

        {/* Bottom Row: Educator / My Enrollments (only if user is logged in) */}
        {user && (
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1 text-gray-700">
            <button
              onClick={() => navigate("/educator")}
              className="border border-gray-300 px-2 py-0.5 rounded"
            >
              {isEducator ? "Educator Dashboard" : "Become Educator"}
            </button>
            <span className="text-gray-400">|</span>
            <Link
              to="/my-enrollments"
              className="border border-gray-300 px-2 py-0.5 rounded"
            >
              My Enrollments
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
