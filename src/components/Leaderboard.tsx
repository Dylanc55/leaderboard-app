import React, { useState, useCallback } from "react";

import initialLocations from "../leaderboard";
import LocationModel from "../models/Location";
import RangeModel from "../models/Range";

import LocationItem from "./LocationItem";

interface LeaderboardProps {
  pointsRange: RangeModel;
  frequencyRange: RangeModel;
}

const Leaderboard: React.FC<LeaderboardProps> = ({
  pointsRange,
  frequencyRange,
}) => {
  const [items, setItems] = useState<LocationModel[]>(initialLocations);

  const handleUpdateItems = useCallback((item: LocationModel) => {
    setItems((prev) => {
      return prev
        .map((obj) => {
          if (item.id === obj.id) return { ...item };
          else return { ...obj };
        })
        .sort((a, b) => b.points - a.points);
    });
  }, []);

  return (
    <section id="leaderboard">
      <h3>Popular Destinations</h3>

      <ul>
        {items.map((item, index) => (
          <LocationItem
            key={item.id}
            item={item}
            position={index + 1}
            pointsRange={pointsRange}
            frequencyRange={frequencyRange}
            onUpdateItem={handleUpdateItems}
          />
        ))}
      </ul>
    </section>
  );
};

export default Leaderboard;
