import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { HomePage } from "@/pages/Home/HomePage";
import { AboutPage } from "@/pages/About/AboutPage";
import { TeamPage } from "@/pages/Team/TeamPage";
import { ServicesPage } from "@/pages/Services/ServicesPage";
import { ContactPage } from "@/pages/Contact/ContactPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
