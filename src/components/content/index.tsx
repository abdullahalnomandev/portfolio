import Footer from "../Home/Footer";
import Navbar from "../ui/Navbar";
import ScrollToTopButton from "../ui/ScrollToTopButton";
import Sidebar from "../ui/Sidebar";
interface IProps {
  children: React.ReactNode;
}
const Content = ({ children }: IProps) => {
  return (
    <div className='mx-auto '>
      <Navbar />
      <div className='sm:px-16 px-4 w-full bg-[#f4f6ff] dark:bg-[#0f172a] dark:text-white'>
        {children}
      </div>
      <ScrollToTopButton />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Content;
