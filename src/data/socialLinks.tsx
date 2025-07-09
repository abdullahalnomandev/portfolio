import FaEmail from "@/assets/images/Gmail_icon_(2020).svg.webp";
import FaWhatsapp from "@/assets/images/pngimg.com - whatsapp_PNG21.png";
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const socialLinks = () => {
  return [
    {
      id: 1,
      href: "https://www.linkedin.com/in/abdullahalnoman1",
      icon: FaLinkedin,
      textColor: "blue",
      text: "LinkedIn",
    },
    {
      id: 2,
      href: "https://www.github.com/abdullahalnomandev",
      icon: FaGithub,
      textColor: "gray",
      text: "GitHub",
    },
    {
      id: 3,
      href: "mailto:abdullahalnoman1512@gmail.com",
      icon: () => {
        return (
          <Image
            data-tooltip-id='tooltip-id'
            data-tooltip-content='Email'
            alt='email'
            className='transition hover:scale-125 duration-300 ease-in-out'
            src={FaEmail}
            width={22}
            height={20}
          />
        );
      },
      textColor: "",
      text: "Email",
    },
    {
      id: 4,
      href: "https://wa.me/+8801706960271",
      icon: () => {
        return (
          <Image
            alt='whatsapp'
            data-tooltip-id='tooltip-id'
            data-tooltip-content='Whatsapp'
            className='transition hover:scale-125 duration-300 ease-in-out'
            src={FaWhatsapp}
            width={25}
            height={20}
          />
        );
      },
      textColor: "",
      text: "WhatsApp",
    },
    {
      id: 5,
      href: "https://www.facebook.com/profile.php?id=61556503866195",
      icon: FaFacebook,
      textColor: "blue",
      text: "Facebook",
    },
    {
      id: 6,
      href: "https://www.youtube.com/@abdullaalnoman2962",
      icon: FaYoutube,
      textColor: "red",
      text: "YouTube",
    },
  ];
};

export default socialLinks;
