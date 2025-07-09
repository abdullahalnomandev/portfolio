import { StaticImageData } from "next/image";

export interface IPortfolio {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  lunching_date: string;
  hasShortlist: boolean;
  frontend_github_link: string;
  backend_github_link: string;
  live_link: string;
  image_url: string | StaticImageData; // ✅ Fix is here
  images: string[];
}
