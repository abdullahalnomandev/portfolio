import Footer from "../Home/Footer";
import Navbar from "../ui/Navbar";
import Sidebar from "../ui/Sidebar";

interface IProps {
  children: React.ReactNode;
}
const Content = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      <div className="px-16 w-full ">
        {children}
      </div>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Content;
