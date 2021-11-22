export type About = {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
}

export type Project = {
  name: string;
  description: string;
  photos: Photo[];
}

export type Photo = {
  url: string;
  width: number;
  height: number;
}
