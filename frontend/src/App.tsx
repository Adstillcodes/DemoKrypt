import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import AuthProvider from "./contexts/Auth";
import CustomRoutes from "./components/CustomRoutes";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CustomRoutes />
      </AuthProvider>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
