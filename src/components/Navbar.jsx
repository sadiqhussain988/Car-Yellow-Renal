import { useState, useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUserProfile, clearProfile } from "../redux/slices/UserSlice";
import { useLogoutMutation } from "../redux/slices/UserApi";
import { toast } from "react-toastify";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import logo from "../assets/companyLogo.png";
import Button from "./Button";

const serviceLinks = [
  { name: "Corporate Employee Transportation", path: "/city-to-city" },
  { name: "Long Term Fleet Leasing for Businesses", path: "/chauffeur-hailing" },
  { name: "Travel Agency & Hotel Partnerships", path: "/airport-transfer" },
  { name: "Airport Transfers for Corporates & Airlines", path: "/hourly-car-service" },
   { name: "Large-Scale Event Transportation Management", path: "/limousine-service" },
];

const navItemClass = "relative hover:text-[#F5B533] transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#F5B533] after:transition-all after:duration-300 hover:after:w-full";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const userProfile = useSelector(selectUserProfile);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const servicesTimeoutRef = useRef(null);

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

  const userInitial = userProfile?.name?.charAt(0).toUpperCase() || "";

  return (
    <nav className="bg-black px-4 z-50 w-full max-w-[1440px] fixed">
      <div className="container mx-auto py-2 flex justify-between items-center">
        <Link to="/" onClick={closeAll}>
          <img src={logo} alt="Company Logo" className="w-20" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link to="/" className={navItemClass}>Home</Link>
          
          <div className="relative" onMouseEnter={handleServicesMouseEnter} onMouseLeave={handleServicesMouseLeave}>
            <button className={navItemClass}>Services</button>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-white text-black mt-2 rounded-lg shadow-lg z-50 min-w-[220px]">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-4 py-2 hover:bg-[#c0bbbb] hover:text-[#060606] transition-colors"
                    onClick={closeAll}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {["/Blogs", "/About-us", "/Contact"].map((path) => (
            <Link key={path} to={path} className={navItemClass}>
              {path.slice(1).replace("-", " ").replace("us", "Us")}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/services">
            <Button textHover="black" text="Book Now" />
          </Link>

          {!userProfile && (
            <Link to="/login">
              <Button textHover="black" text="Login" />
            </Link>
          )}

          {userProfile && (
            <div className="relative">
              <div
                className="w-10 h-10 flex items-center justify-center bg-[#F5B533] text-black font-bold rounded-full cursor-pointer overflow-hidden border-2 border-white hover:opacity-90 transition"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {userProfile.profilePic ? (
                  <img src={userProfile.profilePic} alt="User Avatar" className="w-full h-full object-cover" />
                ) : (
                  <span>{userInitial}</span>
                )}
              </div>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black border rounded-lg shadow-lg z-50">
                  <ul className="py-2">
                    {userProfile.role === "Admin" && (
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate("/dashboard")}>
                        Dashboard
                      </li>
                    )}
                    {["/my-profile", "/my-orders"].map((path) => (
                      <li
                        key={path}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => navigate(path)}
                      >
                        {path.slice(1).replace("-", " ")}
                      </li>
                    ))}
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <IoMdMenu
          className="md:hidden text-white text-4xl cursor-pointer"
          onClick={() => setShowSidebar(true)}
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed z-50 top-0 right-0 w-[70%] h-full bg-white p-5 shadow-lg transition-transform duration-300 md:hidden ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <IoMdClose className="absolute top-5 right-5 text-2xl cursor-pointer" onClick={closeAll} />
        
        <ul className="flex flex-col gap-4 mt-10">
          {["/", "/blogs", "/about-us", "/contact"].map((path) => (
            <Link key={path} to={path} className="font-bold text-xl" onClick={closeAll}>
              {path === "/" ? "Home" : path.slice(1).replace("-", " ").replace("us", "Us")}
            </Link>
          ))}

          <div>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="font-bold text-xl w-full text-left">
              Services
            </button>
            {servicesOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                {serviceLinks.map((service) => (
                  <Link key={service.name} to={service.path} className="text-base" onClick={closeAll}>
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/services" onClick={closeAll}>
            <Button text="Book Now" />
          </Link>

          {!userProfile ? (
            <>
              <Link to="/sign-up" className="text-[#FAC200] font-bold border border-[#FAC200] text-center py-2 rounded-md hover:bg-[#FAC200] hover:text-white transition" onClick={closeAll}>
                Sign up
              </Link>
              <Link to="/login" className="bg-[#FAC200] font-bold text-black text-center py-2 rounded-md" onClick={closeAll}>
                Login
              </Link>
            </>
          ) : (
            <>
              {["/my-profile", "/my-orders"].map((path) => (
                <Link key={path} to={path} className="text-lg font-semibold" onClick={closeAll}>
                  {path.slice(1).replace("-", " ")}
                </Link>
              ))}
              {userProfile.role === "Admin" && (
                <Link to="/dashboard" className="text-lg font-semibold" onClick={closeAll}>
                  Dashboard
                </Link>
              )}
              <button className="text-left text-red-600 font-semibold mt-4" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;