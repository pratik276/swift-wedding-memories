
export interface Milestone {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  position: {
    x: number; // percentage position from left
    y: number; // percentage position from top
  };
}
