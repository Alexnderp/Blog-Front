import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./pages/Register/Register";
import ThemesList from "./components/ThemesList/ThemesList";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <div className="min-h-[80vh] bg-gradient-to-r from-slate-900 to-slate-700">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/themes" element={<ThemesList />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
