import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Workout from "./pages/Workout/Workout";
import Admin from "./pages/Admin/Admin";
import Exercises from "./pages/Exercises/Exercises";
import Routines from "./pages/Routines/Routines";
import Students from "./pages/Students/Students";
import Home from "./pages/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/students" element={<Students />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;