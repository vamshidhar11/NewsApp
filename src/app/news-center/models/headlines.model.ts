export class Headlines {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}
export class HeadlinesQuery {
  country: string;
  category: string;
  sources: string;
  q: string;
}

export interface HeadlinesResponse {
  articles: Headlines;
  status: string;
  totalResults: number;
}
