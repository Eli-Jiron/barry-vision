import Header from "./components/Header";
import RoutesApp from "./routes/RoutesApp";
import { ContextProvider } from "./context/ContextProvider";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <Navbar />
        <RoutesApp />
      </ContextProvider>
    </>
  );
}

export default App;
