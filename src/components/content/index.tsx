import Footer from "../Home/Footer";
import Navbar from "../ui/Navbar";
import ScrollToTopButton from "../ui/ScrollToTopButton";
import Sidebar from "../ui/Sidebar";
interface IProps {
  children: React.ReactNode;
}
const Content = ({ children }: IProps) => {
  return (
    <div className='mx-auto'>
      <Navbar />
      <div className='sm:px-16 max-w-7xl m-auto px-4 w-full '>{children}</div>
      <ScrollToTopButton />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Content;
