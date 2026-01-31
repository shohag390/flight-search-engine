import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { FlightProvider } from "./context/FlightContext";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import "aos/dist/aos.css";
import AOS from "aos";
import AllLoading from "./components/AllLoading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    // Loader duration
    const timer = setTimeout(() => {
      setLoading(false);

      // small delay for fade-in
      setTimeout(() => {
        setShowApp(true);
      }, 100);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Loader screen
  if (loading) {
    return <AllLoading />;
  }

  return (
    <FlightProvider>
      <ToastContainer position="top-right" autoClose={3000} />
      <div
        className={`min-h-screen flex flex-col transition-opacity duration-700 ease-in-out ${
          showApp ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        <main className="grow">
          <Home />
        </main>
        <Footer />
      </div>
    </FlightProvider>
  );
}

export default App;
