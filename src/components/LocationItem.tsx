import React, { useEffect } from "react";

import LocationModel from "../models/Location";
import RangeModel from "../models/Range";

import getRandomWithinRange from "../helpers/getRandomWithinRange";

interface LocationItemProps {
  item: LocationModel;
  position: number;
  pointsRange: RangeModel;
  frequencyRange: RangeModel;
  onUpdateItem: (item: LocationModel) => void;
}

const LocationItem: React.FC<LocationItemProps> = ({
  item,
  position,
  pointsRange,
  frequencyRange,
  onUpdateItem,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      onUpdateItem({
        ...item,
        points: item.points + getRandomWithinRange(pointsRange),
      });
    }, getRandomWithinRange(frequencyRange) * 1000);

    return () => clearInterval(interval);
  }, [item, pointsRange, frequencyRange, onUpdateItem]);

  return (
    <li className="location-item" style={{ top: `${(position - 1) * 64}px` }}>
      <span className="item-position">{position}</span>
      <img src={item.image.src} alt={item.image.alt} />
      <span className="item-title">{item.title}</span>
      <span>{item.points} pts</span>
    </li>
  );
};
export default LocationItem;
