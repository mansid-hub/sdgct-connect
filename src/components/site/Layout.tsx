import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BreadcrumbsBar from "./BreadcrumbsBar";
import CallToDonate from "./CallToDonate";
import { useLocation } from "react-router-dom";

const Layout = ({ children, hideDonateCta = false }: { children: ReactNode; hideDonateCta?: boolean }) => {
  const { pathname } = useLocation();
  const showCta = !hideDonateCta && pathname !== "/donate";
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16 sm:pt-20">
        <BreadcrumbsBar />
        {children}
        {showCta && <CallToDonate />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;