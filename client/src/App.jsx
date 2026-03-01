import { AuthProvider } from "./context/AuthContext.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreateSpaceModal from "./pages/CreateSpaceModal.jsx";
import SpaceSuccessModal from "./pages/SpaceSuccessModal.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-space" element={<CreateSpaceModal onClose={() => window.history.back()} />} />
          <Route path="/space-success" element={<SpaceSuccessModal onClose={() => window.history.back()} />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App;