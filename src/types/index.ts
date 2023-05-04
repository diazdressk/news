export interface IComment {
  by: string;
  id: number;
  kids?: number[];
  parent: number
  text: string;
  time: number;
  type: string;
}

export interface INewsCard extends Omit<IComment, 'parent'> {
  descendants: number;
  score: number;
  title: string;
  url: URL;
}