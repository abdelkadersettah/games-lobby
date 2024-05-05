export interface GamesMenu {
  type: string;
  id: string;
  platformId: string;
  slug: string;
  image: GameImage;
  gameText: string;
  provider: string;
  provider_slug: string;
  betSize: {
    min: number;
  };
}
interface GameImage {
  alt: string;
  original: {
    src: string;
  };
  small: {
    src: string;
  };
  thumbnail: {
    src: string;
  };
}
export interface GamesDto {
  items: Array<GameItem>;
  count: number;
  previousPage: number | null;
  nextPage: number | null;
}
export interface GameItem {
  type: string;
  id: string;
  platformId: string;
  gameText: string;
  provider: string;
  provider_slug: string;
  image: GameImage;
  slug: string;
}
