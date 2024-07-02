import Header from "./components/Header";
import RoutesApp from "./routes/RoutesApp";
import { ContextProvider } from "./context/ContextProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <Navbar />
        <RoutesApp />
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
