import Home from "./pages/Home";
import { FlightProvider } from "./context/FlightContext";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <FlightProvider>
      <div className="min-h-screen flex flex-col">
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
