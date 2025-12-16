import { useState, useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUserProfile, clearProfile } from "../redux/slices/UserSlice";
import { useLogoutMutation } from "../redux/slices/UserApi";
import { toast } from "react-toastify";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import logo from "../assets/logo01.png";
import Button from "./Button";

const serviceLinks = [
  { name: "Corporate Employee Transportation", path: "/city-to-city" },
  { name: "Long Term Fleet Leasing for Businesses", path: "/chauffeur-hailing" },
  { name: "Travel Agency & Hotel Partnerships", path: "/airport-transfer" },
  { name: "Airport Transfers for Corporates & Airlines", path: "/hourly-car-service" },
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
    <nav className="fixed  top-0 w-full max-w-[1440px] z-50 bg-white/80 backdrop-blur-lg shadow-md border-b border-gray-200">
      <div className="mx-auto px-8  flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={closeAll}>
          <img src={logo} alt="Company Logo" className="w-20 transition" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center ml-auto gap-6">
          <Link to="/" className={navItemClass}>Home</Link>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button className={navItemClass}>Services</button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-3 bg-white rounded-xl shadow-xl border border-gray-100 min-w-[260px] overflow-hidden animate-fade-in">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#FFF4DB] hover:text-black transition"
                    onClick={closeAll}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {["/About-us", "/Contact"].map((path) => (
            <Link key={path} to={path} className={navItemClass}>
              {path.slice(1).replace("-", " ").replace("us", "Us")}
            </Link>
          ))}

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Link to="/services">
              <Button text="Book Now"   paddingY="py-1.5" className="shadow-md hover:shadow-lg transition" />
            </Link>

            {!userProfile && (
              <Link to="/login">
                <Button text="Login"   paddingY="py-1.5" className="shadow-md hover:shadow-lg transition" />
              </Link>
            )}

            {userProfile && (
              <div className="relative">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#F5B533] to-[#D68F00] text-black font-bold shadow-md cursor-pointer hover:scale-105 transition"
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

                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-xl border border-gray-100 animate-fade-in">
                    <ul className="py-2 text-sm">
                      {userProfile.role === "Admin" && (
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => navigate("/dashboard")}
                        >
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
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <IoMdMenu
          className="md:hidden text-3xl text-gray-800 cursor-pointer"
          onClick={() => setShowSidebar(true)}
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[75%] h-full bg-white shadow-2xl p-6 transition-transform duration-300 md:hidden ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <IoMdClose
          className="absolute top-5 right-5 text-3xl text-gray-700 hover:rotate-90 transition cursor-pointer"
          onClick={closeAll}
        />

        <ul className="flex flex-col gap-4 mt-10 text-lg font-semibold">
          {["/", "/about-us", "/contact"].map((path) => (
            <Link key={path} to={path} onClick={closeAll}>
              {path === "/" ? "Home" : path.slice(1).replace("-", " ")}
            </Link>
          ))}

          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="text-left"
          >
            Services
          </button>

          {servicesOpen && (
            <div className="ml-4 flex flex-col gap-2 text-sm">
              {serviceLinks.map((service) => (
                <Link key={service.name} to={service.path} onClick={closeAll}>
                  {service.name}
                </Link>
              ))}
            </div>
          )}

          <Link to="/services" onClick={closeAll}>
            <Button text="Book Now" />
          </Link>

          {!userProfile ? (
            <>
              <Link to="/login" onClick={closeAll}>Login</Link>
            </>
          ) : (
            <>
              <button className="text-red-500 text-left mt-4" onClick={handleLogout}>
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
