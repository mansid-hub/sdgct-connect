import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BreadcrumbsBar from "./BreadcrumbsBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16 sm:pt-20">
        <BreadcrumbsBar />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;