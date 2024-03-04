export interface CardsType {
  id: string;
  title: string;
  url?: string;
  imageurl?: string;
  tools: string[];
  live_demo?: string;
  demo?: string;
  source_code: string;
}

export interface DSACardsType {
  id: string;
  title: string;
  url?: string;
  imageurl?: string;
  explanation: string;
  source_code: string;
}
export interface IdeasType {
  id: number;
  title: string;
  ideas: string[];
  url: string;
}
export interface CSSToolkitDataType {
  id: number;
  title: string;
  imgurl?:string;
  videourl?:string;
  url: string;
}
