import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Navbar></Navbar>
      <div className="flex-1 p-6 bg-gray-50">{children}</div>
      <Footer></Footer>
    </div>
  );
};
export default AdminLayout;
