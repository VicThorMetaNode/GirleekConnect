import { React, useState, useEffect, useCallback, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// IMPORT INTERNAL COMPONENTS
import { Sidebar, Navbar } from "./components";

//IMPORT MOTION
import { motion } from "framer-motion";

// IMPORT INTERNAL PAGES
import {
  Coaches,
  Connect,
  CreateProject,
  LandingPage,
  Profile,
  ProfileDetails,
  ProjectDetails,
  Projects,
} from "./pages";

//IMPORT INTERNAL LOGOS
import { FiToggleRight, FiToggleLeft } from "./logo";

const App = () => {
  //set mobile query so btn toggle sidebar only appears on mobile phone
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  //toggle sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //set if user is scrolling or not
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const sidebar = useMemo(() => {
    if (isMobile) {
      return (
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 1000,
            bottom: 50,
          }}
        >
          <Sidebar />
        </motion.div>
      );
    } else {
      return <Sidebar />;
    }
  }, [isMobile]);

  const toggleButton = useMemo(() => {
    const icon = isSidebarOpen ? (
      <FiToggleRight className="text-alt-pink text-2xl animate-pulse" />
    ) : (
      <FiToggleLeft className="text-alt-white text-2xl animate-pulse" />
    );
    return (
      <button
        className={`sm:hidden text-white px-4 fixed left-0 top-3 ${
          isScrolled ? "transform translate-y-10" : ""
        }`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {icon}
      </button>
    );
  }, [isScrolled, isSidebarOpen]);

  return (
    <>
      <div className="relative bg-navy flex flex-row ">
        <div
          className={`sm:flex ${
            isSidebarOpen ? "block" : "hidden"
          } fixed top-20 z-40`}
        >
          {sidebar}
        </div>
        <div className="flex-1 max-sm:w-full mx-auto relative z-0 ">
          <Navbar />
          {toggleButton}

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/profile-details" element={<ProfileDetails />} />
            <Route path="/create-project" element={<CreateProject />} />
            <Route path="/project-details" element={<ProjectDetails />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
