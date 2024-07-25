import Image from "next/image";
import abdullah_al_noman from "@/assets/images/Abdullah_Al_Noman.jpg";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="mb-6 mt-14">
      <div className="grid grid-cols-12">
        {/* Content  */}
        <div className="sm:col-span-7 col-span-full">
          <h1 className="font-bold text-4xl pb-2">Abdullah Al Noman</h1>
          <h1 className="font-bold text-2xl ">A Full-Stack Web Developer</h1>
          <p className=" py-8 text-justify text-gray-500 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            labore error autem exercitationem quaerat ullam, odio fugiat ea
            inventore cum tempora mollitia enim voluptatem hic modi esse! Et
            eveniet cupiditate aperiam molestias vel fuga consequatur libero
            voluptates voluptate maiores at quisquam amet non, hic totam facere,
            debitis placeat numquam quibusdam!
          </p>
          <div className="buttons flex gap-2 items-center">
            <Link href="/about">
              <button className=" font-sans px-4 py-2 border rounded-lg w-24  border-blue-700  bg-blue-600 transition text-white hover:text-blue-600 hover:bg-white scale-100 hover:scale-105 duration-300 ">
                About
              </button>
            </Link>
            <Link href="/contact">
              <button className=" font-sans px-4 py-2 border rounded-lg w-24 text-blue-600 border-blue-700  hover:bg-blue-600 transition hover:text-white scale-100 hover:scale-105  duration-300">
                Contact
              </button>
            </Link>
          </div>
        </div>
        {/* Image  */}
        <div className=" mt-3 md:mt-0 col-span-full sm:col-span-5 text-justify flex justify-start md:justify-end">
          <div>
            <Image
              src={abdullah_al_noman}
              width={350}
              height={350}
              alt="Abdullah Al Noman"
              title="Abdullah Al Noman"
              className="rounded-full right-0 ring-2 p-[3px] ring-blue-400 object-cover 
              transition scale-100 hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
