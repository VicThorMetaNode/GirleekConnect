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
    <div className="relative sm:-8 p-4 bg-main-navy min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
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

/* <div x-data="{ open: false }" class="fixed left-0 transform translate-x-full transition-transform duration-300 ease-in-out bg-gray-200 w-64 h-screen">
  <!-- sidebar content -->
</div>

<script>
  // add swipe event listener to body
  document.querySelector('body').addEventListener('touchstart', handleTouchStart, false);        
  document.querySelector('body').addEventListener('touchmove', handleTouchMove, false);

  let startX;

  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    if (startX - event.touches[0].clientX > 50) {
      // user has swiped from left to right
      document.querySelector('.fixed').classList.add('open');
    }
  }
</script>

<style>
  .open {
    @apply frame-inset-x-0;
  }
</style> */
