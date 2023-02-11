import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from './components/layout'
import { Homepage } from "./pages";
import './assets/styles/tailwind.css';
import { AppContextProvider } from "./context/store";
import PrivateRoute from "./PrivateRoute";
import { Login } from "./pages/login";

function App() {

  return (
    <AppContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PrivateRoute><Homepage /></PrivateRoute>} />
          <Route path="login" element={<Login />}>
        </Route>

        </Route>
      </Routes>
    </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
