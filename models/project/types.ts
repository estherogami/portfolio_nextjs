
export type category = "web" | "branding" | "CMS";

export interface IProject{
    _id: string;
    title: string;
    category: category;
    featured_picture: string;
    link?: string;
  }

