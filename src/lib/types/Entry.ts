export interface Entry {
  title: string;
  author: string;
  date: string;
  path: string;
  placement: string;
  linktitle: string;
  tags?: string[];
  readingTime: number;
  category: string;
  series?: string;
  seriesSequence?: string;
  podcastUrl?: string;
}
