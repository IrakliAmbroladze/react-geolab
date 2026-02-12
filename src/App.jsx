import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Billing from "./pages/settings/Billing";
import ChangePassword from "./pages/settings/ChangePassword";
import SettingsHome from "./pages/settings/SettingsHome";
import SettingsLayout from "./layouts/SettingsLayout";
import Products from "./pages/Products";
import { Post } from "./pages/Post";
import Posts from "./pages/Posts";
import Register from "./pages/Register";
import WeatherPage from "./pages/Weahter";
import Login from "./pages/Login";

function App() {
  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/products" element={<Products />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<SettingsLayout />}>
            <Route index element={<SettingsHome />} />
            <Route path="billing" element={<Billing />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
