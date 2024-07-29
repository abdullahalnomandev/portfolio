
export interface IPortfolio {
    id: number | string;
    name: string;
    description: string;
    technologies: string[];
    launching_date?: string;
    hasShortlist: boolean;
    frontend_github_link: string;
    backend_github_link: string;
    live_link: string;
    image_url: string;
  }
  