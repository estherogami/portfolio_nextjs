export type category = "web" | "branding" | "CMS";

export interface IProject {
    title: string;
    category: category;
    featured_picture: string;
    link?: string;
  }

