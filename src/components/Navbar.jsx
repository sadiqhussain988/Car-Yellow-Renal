import { useState, useCallback, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUserProfile, clearProfile } from "../redux/slices/UserSlice";
import { useLogoutMutation } from "../redux/slices/UserApi";
import { toast } from "react-toastify";
import {
  IoMdMenu,
  IoMdClose,
  IoMdArrowDown,
  IoMdArrowUp,
} from "react-icons/io";
import { FiUser, FiSettings, FiLogOut, FiBriefcase } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
import logo from "../assets/logo01.png";
import Button from "./Button";

const serviceLinks = [
  { name: "Corporate Employee Transportation", path: "/city-to-city" },
  {
    name: "Long Term Fleet Leasing for Businesses",
    path: "/chauffeur-hailing",
  },
  { name: "Travel Agency & Hotel Partnerships", path: "/airport-transfer" },
  {
    name: "Airport Transfers for Corporates & Airlines",
    path: "/hourly-car-service",
  },
  { name: "Large-Scale Event Management", path: "/limousine-service" },
];

const navItemClass =
  "relative font-medium text-gray-800 hover:text-[#D68F00] transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#F5B533] after:transition-all after:duration-300 hover:after:w-full";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const userProfile = useSelector(selectUserProfile);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const servicesTimeoutRef = useRef(null);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeAll();
      }
    };

    if (showSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [showSidebar]);

  const handleLogout = async () => {
    const response = await logout();
    if (response.error) {
      toast.error(response.error.data?.message || "Logout failed!");
    } else {
      toast.success(response.data?.message || "Logout successful!");
    }
    dispatch(clearProfile());
    setDropdownOpen(false);
    setShowSidebar(false);
    navigate("/login");
  };

  const handleServicesMouseEnter = useCallback(() => {
    clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
  }, []);

  const handleServicesMouseLeave = useCallback(() => {
    servicesTimeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  }, []);

  const closeAll = useCallback(() => {
    setShowSidebar(false);
    setServicesOpen(false);
    setDropdownOpen(false);
  }, []);

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const userInitial = userProfile?.name?.charAt(0).toUpperCase() || "";

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-md border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" onClick={closeAll} className="flex-shrink-0">
            <img
              src={logo}
              alt="Company Logo"
              className="w-16 sm:w-20 transition"
            />
          </Link>

          {/* Desktop Navigation */}
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center ml-auto gap-6">
            <Link to="/" className={navItemClass}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button className={`${navItemClass} flex items-center gap-1`}>
                Services
               
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 bg-white rounded-xl shadow-xl border border-gray-100 min-w-[300px] overflow-hidden animate-fade-in z-50">
                  <div className="py-2">
                   
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block px-4 py-3 text-base text-gray-700 hover:bg-[#FFF4DB] hover:text-black transition hover:text-base"
                        onClick={closeAll}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link to="/about-us" className={navItemClass}>
              About Us
            </Link>

            {/* Contact */}
            <Link to="/contact" className={navItemClass}>
              Contact
            </Link>

            {/* Buttons Section */}
            <div className="flex items-center gap-4">
              {/* Book Now Button */}
              <Link to="/services">
                <Button
                  text="Book Now"
                  paddingY="py-2"
                  className="shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 px-6"
                />
              </Link>

              {/* Login/User Section */}
              {!userProfile ? (
                <Link to="/login">
                  <Button
                    text="Login"
                    paddingY="py-2"
                    className="shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 px-6 bg-gray-100 text-gray-800 hover:bg-gray-200"
                  />
                </Link>
              ) : (
                <div className="relative">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#F5B533] to-[#D68F00] text-black font-bold shadow-md cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-lg"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {userProfile.profilePic ? (
                      <img
                        src={userProfile.profilePic}
                        alt="Avatar"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span>{userInitial}</span>
                    )}
                  </div>

                  {/* User Dropdown */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl border border-gray-100 animate-fade-in z-50">
                      <div className="py-2">
                        {/* User Info */}
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="font-semibold text-gray-800 truncate">
                            {userProfile.name}
                          </p>
                          <p className="text-xs text-gray-500 capitalize">
                            {userProfile.role}
                          </p>
                        </div>

                        {/* Dropdown Menu */}
                        <ul className="py-2">
                          {userProfile.role === "Admin" && (
                            <li
                              className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer flex items-center gap-3 text-gray-700 transition"
                              onClick={() => {
                                navigate("/dashboard");
                                setDropdownOpen(false);
                              }}
                            >
                              <FiBriefcase className="text-gray-500" />
                              Dashboard
                            </li>
                          )}
                          <li
                            className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer flex items-center gap-3 text-gray-700 transition"
                            onClick={() => {
                              navigate("/my-profile");
                              setDropdownOpen(false);
                            }}
                          >
                            <FiUser className="text-gray-500" />
                            My Profile
                          </li>
                          <li
                            className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer flex items-center gap-3 text-gray-700 transition"
                            onClick={() => {
                              navigate("/my-orders");
                              setDropdownOpen(false);
                            }}
                          >
                            <HiOutlineClipboardList className="text-gray-500" />
                            My Orders
                          </li>

                          <hr className="my-2 border-gray-100" />

                          <li
                            className="px-4 py-2.5 hover:bg-red-50 cursor-pointer flex items-center gap-3 text-red-600 transition"
                            onClick={handleLogout}
                          >
                            <FiLogOut />
                            Logout
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button & User Avatar */}
          <div className="md:hidden flex items-center gap-3">
            {/* Book Now Button - Always Visible */}
            <Link to="/services" className="hidden sm:block">
              <Button
                text="Book Now"
                paddingY="py-1.5"
                className="shadow-md hover:shadow-lg transition text-sm px-3"
              />
            </Link>

            {/* User Avatar for Mobile */}
            {userProfile && (
              <div className="relative">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-[#F5B533] to-[#D68F00] text-black font-bold shadow-md cursor-pointer hover:scale-105 transition"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {userProfile.profilePic ? (
                    <img
                      src={userProfile.profilePic}
                      alt="Avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-sm">{userInitial}</span>
                  )}
                </div>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 animate-fade-in z-50">
                    <ul className="py-2">
                      {userProfile.role === "Admin" && (
                        <li
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 text-gray-700"
                          onClick={() => {
                            navigate("/dashboard");
                            setDropdownOpen(false);
                          }}
                        >
                          <FiBriefcase className="text-gray-500" />
                          Dashboard
                        </li>
                      )}
                      <li
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 text-gray-700"
                        onClick={() => {
                          navigate("/my-profile");
                          setDropdownOpen(false);
                        }}
                      >
                        <FiUser className="text-gray-500" />
                        My Profile
                      </li>
                      <li
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 text-gray-700"
                        onClick={() => {
                          navigate("/my-orders");
                          setDropdownOpen(false);
                        }}
                      >
                        <HiOutlineClipboardList className="text-gray-500" />
                        My Orders
                      </li>
                      <hr className="my-2" />
                      <li
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 text-red-500"
                        onClick={handleLogout}
                      >
                        <FiLogOut />
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu Button */}
            <IoMdMenu
              className="text-2xl sm:text-3xl text-gray-800 cursor-pointer hover:text-[#D68F00] transition"
              onClick={() => setShowSidebar(true)}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden"
          onClick={closeAll}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl z-50 transition-transform duration-300 ease-out md:hidden ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            {userProfile ? (
              <>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#F5B533] to-[#D68F00] text-black font-bold shadow">
                  {userProfile.profilePic ? (
                    <img
                      src={userProfile.profilePic}
                      alt="Avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span>{userInitial}</span>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    {userProfile.name}
                  </p>
                  <p className="text-xs text-gray-500">{userProfile.role}</p>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                onClick={closeAll}
                className="font-bold text-gray-800"
              >
                Welcome To Link Way Ride              </Link>
            )}
          </div>
          <IoMdClose
            className="text-2xl text-gray-500 hover:text-gray-800 hover:rotate-90 transition cursor-pointer"
            onClick={closeAll}
          />
        </div>

        {/* Sidebar Content */}
        <div className="h-[calc(100%-80px)] overflow-y-auto px-5 py-6">
          {/* Main Navigation */}
          <ul className="space-y-1">
            {["/", "/About-us", "/Contact"].map((path) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={closeAll}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#FFF4DB] text-gray-800 font-medium transition"
                >
                  {path === "/" ? "Home" : path.slice(1).replace("-", " ")}
                </Link>
              </li>
            ))}

            {/* Services Accordion */}
            <li className="mt-2">
              <button
                onClick={toggleServices}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-[#FFF4DB] text-gray-800 font-medium transition"
              >
                <span>Services</span>
                {servicesOpen ? (
                  <IoMdArrowUp className="text-gray-500" />
                ) : (
                  <IoMdArrowDown className="text-gray-500" />
                )}
              </button>

              {servicesOpen && (
                <div className="ml-4 mt-1 space-y-1 animate-slide-down">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      onClick={closeAll}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-[#FFF9ED] rounded-lg transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* Quick Actions */}
            <li className="mt-6">
              <Link to="/services" onClick={closeAll} className="block w-full">
                <Button
                  text="Book Now"
                  className="w-full justify-center shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5"
                />
              </Link>
            </li>

            {userProfile ? (
              <>
                <hr className="my-6 border-gray-200" />
                <li>
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Account
                  </div>
                </li>
                {userProfile.role === "Admin" && (
                  <li>
                    <button
                      onClick={() => {
                        navigate("/dashboard");
                        closeAll();
                      }}
                      className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 transition"
                    >
                      <FiBriefcase />
                      Dashboard
                    </button>
                  </li>
                )}
                <li>
                  <button
                    onClick={() => {
                      navigate("/my-profile");
                      closeAll();
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 transition"
                  >
                    <FiUser />
                    My Profile
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/my-orders");
                      closeAll();
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 transition"
                  >
                    <HiOutlineClipboardList />
                    My Orders
                  </button>
                </li>
                <hr className="my-4 border-gray-200" />
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-red-50 text-red-600 transition"
                  >
                    <FiLogOut />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <hr className="my-6 border-gray-200" />
                <li>
                  <Link
                    to="/login"
                    onClick={closeAll}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium transition"
                  >
                    <FiUser />
                    Login / Register
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Contact Info Footer */}
          {/* <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Need help? Call us at{" "}
              <a
                href="tel:+1234567890"
                className="text-[#D68F00] font-semibold"
              >
                +1 (234) 567-890
              </a>
            </p>
          </div> */}
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;
