import { Route, Routes } from "react-router-dom";
import routes from "@/routes";
import { useEffect, useState } from "react";
import { Header } from "@/layouts/header";
import { Footer } from "@/layouts/footer";
import { HomeAPI } from "./services/homeService.js";

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const getUserByAddress = async () => {
    try {
      const data = await HomeAPI.getUserByAddress("minhthang");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    // console.log("-1")
    // getUserByAddress();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
