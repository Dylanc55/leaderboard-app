export default interface LocationModel {
  id: number;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  points: number;
}
