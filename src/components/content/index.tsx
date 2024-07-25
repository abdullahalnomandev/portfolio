import Footer from "../Home/Footer";
import Navbar from "../ui/Navbar";
import Sidebar from "../ui/Sidebar";

interface IProps {
  children: React.ReactNode;
}
const Content = ({ children }: IProps) => {
  return (
    <>
      <div className=" px-12 w-full ">
        <Navbar />
        {children}
      </div>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Content;
