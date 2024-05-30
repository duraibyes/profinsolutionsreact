import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import NavBar from "./components/layouts/Navbar";
import GlobalStylesComponent from "./styles/GlobalStylesComponent ";

import Footer from "./components/layouts/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f5f5f5",
    },
  },
});

const loading = true;

function App() {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    console.log(' entering into efferct')
    let timer1 = setTimeout(() => setLoader(false),1000);
    return () => {
      console.log(' enterring itn o unmout')
      clearTimeout(timer1);
    };
  }, [])
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStylesComponent />
      <section style={{ minHeight: '100vh'}}>
        {loader ? (
          <Loader />
        ) : (
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
            <Footer />
          </Router>
        )}
      </section>
    </ThemeProvider>
  );
}

export default App;
