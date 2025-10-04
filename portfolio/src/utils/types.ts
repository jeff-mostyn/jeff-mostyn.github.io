import { LocalizedContent } from "src/components/Util/util";

export type PortfolioItemData = {
  banner: {
    image: string;
    label: LocalizedContent;
    tagline: LocalizedContent;
  }
  content: {
    title: LocalizedContent;
    roles: string[];
    summary?: LocalizedContent;
    steamEmbed?: string;
    hyperlinks: {
      text: string;
      url: string;
    }[];
    keyImage?: string;
    keyVideo?: string;
    involvement: string[];
    accomplishments: string[];
    skills: string[];
    sections: {
      title: string;
      image?: string;
      video?: string;
      description?: string[];
      imageLeft: boolean;
    }[]
  };
  icons: string[];
  path: string;
}

export type ProjectData = {
  image: string;
  icons: string[];
  roles: string[];
  label: LocalizedContent;
  description: LocalizedContent[];
}