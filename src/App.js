import React from "react";
import AuhtProvider from "./context/Auth/AuhtProvider";
import AppRoutes from "./routes/App.Routes";

const App = () => {
  return (
    <AuhtProvider>
      <AppRoutes />
    </AuhtProvider>
  );
};

export default App;
