import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import Profile from "../../pages/Profile";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<{name: string, email: string} | null>(null);

  // Close mobile menu completely upon navigating to a new route
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [location.pathname]); // Re-run when navigation happens (e.g. after login/logout)

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  // Listen to window scroll event for dynamic glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scrolling on the body when the mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "bg-white/70 backdrop-blur-lg border-b border-gray-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3 md:py-3.5"
          : "bg-black/85 py-4 md:py-5"
          }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Area */}
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none rounded-lg focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <div className="relative overflow-hidden">
              <img
                src={assets.logo_black}
                className="h-9 md:h-15 object-contain transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 rounded"
                alt="Logo"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-1 py-1.5 text-[15px] font-medium transition-colors duration-300 ease-out group ${isActive ? "text-indigo-100" : "text-gray-600 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {/* Animated bottom border line */}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2.5px] rounded-full bg-indigo-600 transition-all duration-300 ease-out ${isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full opacity-0 group-hover:opacity-100"
                          }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-5">
            <Profile user={user} handleLogout={handleLogout} />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 -mr-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 rounded-full transition-colors focus:outline-none active:scale-95"
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-gray-900/30 backdrop-blur-sm z-60 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white z-70 transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-2xl md:hidden flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <img src={assets.logo_black} className="h-8 object-contain" alt="Logo" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors focus:outline-none active:scale-95 bg-gray-50"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-6">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3.5 rounded-2xl text-[15px] font-semibold transition-all duration-200 ${isActive
                      ? "bg-indigo-50/80 text-indigo-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50/50 space-y-3 pb-8">
          <Profile user={user} handleLogout={() => { setIsOpen(false); handleLogout(); }} />
        </div>
      </aside>
    </>
  );
};

export default Navbar;