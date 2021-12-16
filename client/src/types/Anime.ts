export default interface Anime {
  node: {
    id: number;
    title: string;
    main_picture: {
      medium: string;
      large: string;
    };
  };
  ranking: {
    rank: number;
  };
}
