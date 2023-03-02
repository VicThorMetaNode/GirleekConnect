import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";

// IMPORT INTERNAL COMPONENTS
import { Sidebar, Navbar } from "./components";

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

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="relative bg-navy flex flex-row ">
      <div
        className={`sm:flex  ${
          isSidebarOpen ? "block" : "hidden"
        } fixed top-20 z-40`}
      >
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full mx-auto relative z-0 ">
        {/* <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto "> */}
        <Navbar />
        <button
          className="sm:hidden text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          Toggle Sidebar
        </button>

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
  );
};

export default App;
