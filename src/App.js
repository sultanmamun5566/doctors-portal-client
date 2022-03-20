
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProider/AuthProvider";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivetRoute from "./pages/Login/PrivetRoute/PrivetRoute";
import Register from "./pages/Login/Register/Register";

function App() {
  return(
  <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/appointment" element={<PrivetRoute><Appointment></Appointment></PrivetRoute>}></Route>
            <Route path="/dashboard" element={<PrivetRoute><Dashboard></Dashboard></PrivetRoute>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </BrowserRouter>
     </AuthProvider>
    </div>
  )
}

export default App;
