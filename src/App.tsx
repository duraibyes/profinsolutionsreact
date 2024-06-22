import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import NavBar from "./components/layouts/Navbar";
import GlobalStylesComponent from "./styles/GlobalStylesComponent ";

import Footer from "./components/layouts/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import Loans from "./components/pages/Loan/Loans";
import ContactInfo from "./components/layouts/ContactInfo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./services/ProtectedRoute";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f5f5f5",
    },
  },
});

const loading = true;
const queryClient = new QueryClient();

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    console.log(" entering into efferct");
    let timer1 = setTimeout(() => setLoader(false), 1000);
    return () => {
      console.log(" enterring itn o unmout");
      clearTimeout(timer1);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStylesComponent />
        <section style={{ minHeight: "100vh" }}>
          {loader ? (
            <Loader />
          ) : (
            <Router>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/loans" element={<ProtectedRoute element={Loans} />}></Route>
              </Routes>
              <ContactInfo />
              <Footer />
            </Router>
          )}
        </section>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
