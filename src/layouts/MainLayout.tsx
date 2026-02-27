import { Outlet } from "react-router-dom";
import { Header } from "@/layouts/Header";
import { Footer } from "@/layouts/Footer";

export function MainLayout() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 0 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
