import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CallToDonate from "./CallToDonate";
import BackBar from "./BackBar";
import { useLocation } from "react-router-dom";

const Layout = ({ children, hideDonateCta = false }: { children: ReactNode; hideDonateCta?: boolean }) => {
  const { pathname } = useLocation();
  const showCta = !hideDonateCta && pathname !== "/donate";
  const hideLastTile = pathname === "/about/founders-journey" || pathname === "/why-us";
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <BackBar />
      <main className="flex-1 pt-16 sm:pt-20">
        {children}
        {showCta && <CallToDonate hideLastTile={hideLastTile} />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;