export interface Heroes {
  id: string;
  tag: Tag;
  title: string;
  images: string[];
  _url: string;
}

export enum Tag {
  Duelist = "DUELIST",
  Empty = "",
  Strategist = "STRATEGIST",
  Vanguard = "VANGUARD",
}
