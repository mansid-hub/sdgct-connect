import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackBar from "./BackBar";

const Layout = ({ children }: { children: ReactNode }) => {
  const isHome = useLocation().pathname === "/";
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <BackBar />
      <main className={`flex-1 ${isHome ? "pt-16 sm:pt-20" : ""}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
