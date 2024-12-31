type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Service = {
  id: string;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};

export type ServiceDetail = {
  id: string;
  title: string;
  paragraph: string;
  image: string;
  description: string;
  words: string;
  conclusion?: string;
};
