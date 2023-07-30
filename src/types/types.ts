/**
 * All the interfaces
 */

export interface Home {
  data: Post[];
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  date: string;
}

export interface AppState {
  posts: Post[];
  theme: "dark" | "light";
}
