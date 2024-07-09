import Header from "./components/Header";
import RoutesApp from "./routes/RoutesApp";
import { ContextProvider } from "./context/ContextProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <>
      <ContextProvider>
        <div className="sticky top-0 z-10">
          <Sidebar />
          <Header />
          <Navbar />
        </div>
        <RoutesApp />
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
