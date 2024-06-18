import RangeModel from "../models/Range";

export default function getRandomWithinRange(range: RangeModel) {
  const { min, max } = range;
  return Math.floor(Math.random() * (max - min + 1) + min);
}
