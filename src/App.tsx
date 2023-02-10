import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from './components/layout'
import { Homepage } from "./pages";
import './assets/styles/tailwind.css';
import { AppContextProvider } from "./context/store";

function App() {

  return (
    <AppContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
