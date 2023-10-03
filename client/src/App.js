import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Booking from "./pages/booking/Booking";
import Tickets from "./pages/tickets/Tickets";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Admin from "./pages/admin/Admin";
import AdUsers from "./pages/adUsers/adUsers";
import AdTickets from "./pages/adTickets/adTickets";
import NewTicket from "./pages/newTicket/NewTicket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/tickets/:id" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adusers" element={<AdUsers />} />
        <Route path="/adtickets" element={<AdTickets />} />
        <Route path="/newTicket" element={<NewTicket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
