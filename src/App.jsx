import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import Home from "./pages/homePage/Home";
import JobDetails from "./pages/jobDetails/JobDetails";
import PageNotFound from "./pages/PageNotFound";

// components
import Header from "./components/header/Header";

// using context
import { useAppContext } from "./context/appContext";

export default function App() {
  const { theme } = useAppContext();

  return (
    <div className={`app ${theme ? "dark" : "light"}`}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:id" element={<JobDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
