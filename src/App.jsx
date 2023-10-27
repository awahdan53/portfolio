import "@mantine/core/styles.css";
import "./App.module.css";
import { Box, MantineProvider, createTheme } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const theme = createTheme({
  fontFamily: "Roboto, sans-serif",
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/portfolio" element={<Home />} />
        </Routes>
        <Footer />
      </Box>
    </MantineProvider>
  );
}

export default App;
