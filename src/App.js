import {
    createBrowserRouter,
   Route, 
    
   createRoutesFromElements,
   RouterProvider} from "react-router-dom";
import HelpLayout from "./layouts/HelpLayout";

   //layouts
import RootLayout from "./layouts/RootLayout";

//pages
import About from "./pages/About";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
    <Route index element={ <Home />} />
    <Route path="about" element={ <About />} />
    <Route path="help" element={<HelpLayout />}>
      <Route path="faq" element={<Faq />}/>
      <Route path="contact" element={<Contact />}/>
    </Route>
  </Route>
  )
)

function App() {
  return (
   
   <RouterProvider router={router} />
  
  );
}

export default App
