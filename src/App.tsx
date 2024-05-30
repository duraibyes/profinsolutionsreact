import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import NavBar from "./components/layouts/Navbar";
import GlobalStylesComponent from "./styles/GlobalStylesComponent ";
import Footer from "./components/layouts/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f5f5f5",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStylesComponent />
      <section className="p-20">
        <NavBar />
        <Footer />
      </section>
    </ThemeProvider>
  );
}

export default App;
