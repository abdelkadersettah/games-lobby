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
