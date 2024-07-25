import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex gap-4 ">
      <Link className="text-blue-700"  href="/">Home</Link>
      <Link className="text-blue-700" href="/about">About</Link>
      <Link className="text-blue-700" href="/portfolio">Portfolio</Link>
      <Link className="text-blue-700" href="/blog">Blog</Link>
      <Link className="text-blue-700" href="/contact">Contact</Link>
      <Link className="text-blue-700" href="/more">More</Link>
    </div>
    
  );
};

export default Navbar;
