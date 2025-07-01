import doctorsHome from "@/assets/projects-images/doctors.jpg";
import dreamShopHome from "@/assets/projects-images/dream-shop.png";
import fixomizHome from "@/assets/projects-images/fixomiz-home.jpg";
import hotelHome from "@/assets/projects-images/hotel-home.jpg";
import restoreHome from "@/assets/projects-images/restore.jpg";
export const projects = [
  {
    id: 1,
    name: "Mr Chemist",
    description:
      "A patient management system where patients can purchase medications and schedule consultations with doctors. The system provides comprehensive healthcare management features.",
    technologies: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "schen ui",
      "Stripe",
      "Sembol & RoailMail Api",
      "Node.js",
      "SQL",
      "TanStack Query",
    ],
    lunching_date: "01/10/2000",
    hasShortlist: true,
    frontend_github_link:
      "https://github.com/abdullahalnomandev/mr-chemist-doctors",
    backend_github_link:
      "https://github.com/abdullahalnomandev/mr-chemist-doctors-backend",
    live_link: "https://mr-chemist-doctors.vercel.app/",
    image_url: doctorsHome,
  },
  {
    id: 2,
    name: "Hotel Booking",
    description:
      "A  hotel booking application with responsive design. Features include user authentication, room booking validation to prevent double bookings, and an admin panel for managing hotels, rooms, admins and user bookings. Administrators can perform CRUD operations on hotel inventory and monitor booking status.",
    technologies: [
      "React.js",
      "Ant Design",
      "Custom Hook",
      "Node.js",
      "JWT Token",
      "MongoDB",
      "Express",
      "Mongoose",
    ],
    lunching_date: "01/10/2000",
    hasShortlist: true,
    frontend_github_link:
      "https://github.com/abdullahalnomandev/BOOKING_HOTELL",
    backend_github_link:
      "https://github.com/abdullahalnomandev/BOOKING_HOTEL/tree/master/server",
    live_link: "https://dreambooking.netlify.app/",
    image_url: hotelHome,
  },
  {
    id: 3,
    name: "Restore Repair Service",
    description:
      "A responsive MERN-stack web application for Restore Repair Service. Users can browse and book services, view their booking history, and leave reviews. Features Google authentication for secure access. Includes an admin panel for managing services, user orders, reviews, and admin privileges with full CRUD operations.",
    technologies: [
      "React.js",
      "SASS",
      "Javascript",
      "Firebase Authentication",
      "React Hook Form",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    lunching_date: "01/10/2000",
    hasShortlist: true,
    frontend_github_link:
      "https://github.com/abdullahalnomandev/Restore-repair-service-client",
    backend_github_link:
      "https://github.com/abdullahalnomandev/repair-service-server",
    live_link: "https://restore-repaier-service.web.app",
    image_url: restoreHome,
  },
  {
    id: 4,
    name: "Dream Shop",
    description:
      "A  e-commerce application featuring product management, shopping cart functionality, user authentication, and order processing. Built with React.js frontend and Node.js/MongoDB backend for a complete online shopping experience.",
    technologies: [
      "React.js",
      "React Router",
      "React Bootstrap",
      "Font Awesome",
      "Express",
      "Node.js",
      "MongoDB",
    ],
    lunching_date: "01/10/2000",
    hasShortlist: false,
    frontend_github_link:
      "https://github.com/abdullahalnomandev/ratro-them-blog-client",
    backend_github_link:
      "https://github.com/abdullahalnomandev/-ratro-them-blog-server",
    live_link: "https://dream-shop-d7e59.web.app/",
    image_url: dreamShopHome,
  },
  {
    id: 5,
    name: "Fixmoiz Auto Service",
    description:
      "A comprehensive car repair service platform built with React.js and TypeScript. Features include user authentication, service browsing and booking, dynamic routing with React Router, responsive UI using Ant Design and Bootstrap, and a full backend implementation with Node.js, Express, and MongoDB for service and appointment management.",
    technologies: [
      "React.js",
      "Typescript",
      "Ant Design",
      "React Router",
      "React Bootstrap",
      "Font Awesome",
      "MongoDB",
      "Express",
      "Node.js",
    ],
    lunching_date: "01/10/2000",
    hasShortlist: false,
    frontend_github_link:
      "https://github.com/abdullahalnomandev/fixmoiz-auto-service-client",
    backend_github_link:
      "https://github.com/abdullahalnomandev/fixmiox-auto-service-server",
    live_link: "https://car-repair-service-11880.firebaseapp.com/home",
    image_url: fixomizHome,
  },
];
