import FaEmail from "@/assets/images/email.png";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const socialLinks = () => {
  return [
    {
      id: 1,
      href: "https://www.linkedin.com/in/abdullahalnoman1",
      icon: FaLinkedin,
      textColor: "text-blue-600",
    },
    {
      id: 2,
      href: "https://www.github.com/abdullahalnomandev",
      icon: FaGithub,
      textColor: "text-gray-700",
    },
    {
      id: 3,
      href: "mailto:abdullahalnoman1512@gmail.com",
      icon: () => {
        return <Image alt='email' src={FaEmail} width={22} height={20} />;
      },
      textColor: "text-blue-500",
    },
    {
      id: 4,
      href: "https://wa.me/+8801706960271",
      icon: BsWhatsapp,
      textColor: "!text-green-500",
    },
    {
      id: 5,
      href: "https://www.facebook.com/profile.php?id=61556503866195",
      icon: FaFacebook,
      textColor: "text-blue-600",
    },
    {
      id: 6,
      href: "https://www.youtube.com/@abdullaalnoman2962",
      icon: FaYoutube,
      textColor: "text-red-600",
    },
  ];
};

export default socialLinks;
