import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./styles/GlobalStyles.js"; // importa estilos globais.
import { RouterProvider } from "react-router-dom";
import router from './routes.jsx'


//import Home from "./pages/Home"; // importa do modo padrão apenas 1 componente por arquivo " modo default".

// import {App, App2} from './App.jsx' // importa mais de 1 componente por arquivo " modo nomeado".

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <GlobalStyles />
    
    <RouterProvider router={router} />
  
  </StrictMode>
);
