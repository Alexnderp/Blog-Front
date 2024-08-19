import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./pages/Register/Register";
import ThemesList from "./components/ThemesList/ThemesList";
import FormTheme from "./components/FormTheme/FormTheme";
import DeleteTheme from "./components/DeleteTheme/DeleteTheme";
import CardPost from "./components/CardPost/CardPost";

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
              <Route path="/registerTheme" element={<FormTheme />} />
              <Route path="/editTheme/:id" element={<FormTheme />} />
              <Route path="/deleteTheme/:id" element={<DeleteTheme />} />
              <Route path="/post" element={<CardPost />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
