import React from "react";
import { Route, Routes } from "react-router-dom";

// IMPORT INTERNAL COMPONENTS
import { Sidebar, Navbar } from "./components";

// IMPORT INTERNAL PAGES
import {
  Coaches,
  Connect,
  CreateProject,
  Home,
  LandingPage,
  Profile,
  ProfileDetails,
  ProjectDetails,
  Projects,
} from "./pages";

const App = () => {
  return (
    <div className="relative bg-navy flex flex-row ">
      <div className="sm:flex hidden min-h-screen  relative bg-blue w-[5rem]">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full mx-auto ">
        {/* <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto "> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile-details/:id" element={<ProfileDetails />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
