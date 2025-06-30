import Navbar from "../ui/Navbar";
import Sidebar from "../ui/Sidebar";

interface IProps {
  children: React.ReactNode;
}
const Content = ({ children }: IProps) => {
  return (
    <div className='mx-auto '>
      <Navbar />
      <div className='sm:px-16 px-4 w-full bg-[#f9f9f9]'>{children}</div>
      <Sidebar />
      {/* <Footer /> */}
    </div>
  );
};

export default Content;
