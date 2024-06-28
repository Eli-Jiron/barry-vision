import Header from "./components/Header";
import RoutesApp from "./routes/RoutesApp";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <RoutesApp />
      </ContextProvider>
    </>
  );
}

export default App;
