import { Outlet } from "react-router-dom";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";


const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
