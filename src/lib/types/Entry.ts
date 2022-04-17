export interface Entry {
  title: string;
  author: string;
  date: string;
  path: string;
  thumbnail: string;
  placement: string;
  linktitle: string;
  draft: boolean;
  tags?: string[];
  readingTime: number;
}
