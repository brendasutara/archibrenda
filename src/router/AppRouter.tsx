import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Home } from "../pages/Home.js";
import { Tutorials } from "../pages/Tutorials.js";
import { Classes } from "../pages/Classes.js";
import { AboutMe } from "../pages/AboutMe.js";
import { Links } from "../pages/Links.js";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutoriales" element={<Tutorials />} />
          <Route path="/clases" element={<Classes />} />
          <Route path="/sobre-mi" element={<AboutMe />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
