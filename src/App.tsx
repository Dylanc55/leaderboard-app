import React, { useState } from "react";

import RangeModel from "./models/Range";

import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import PointsRange from "./components/PointsRange";
import FrequencyRange from "./components/FrequencyRange";

const App: React.FC = () => {
  const [pointsRange, setPointsRange] = useState<RangeModel>({
    min: 10,
    max: 20,
  });
  const [frequencyRange, setFrequencyRange] = useState<{
    min: number;
    max: number;
  }>({
    min: 2,
    max: 8,
  });

  function handlePointsRange(range: RangeModel) {
    setPointsRange(range);
  }

  function handleFrequencyRange(range: RangeModel) {
    setFrequencyRange(range);
  }

  return (
    <>
      <Header />

      <Leaderboard pointsRange={pointsRange} frequencyRange={frequencyRange} />

      <section id="actions">
        <PointsRange range={pointsRange} onSetRange={handlePointsRange} />

        <FrequencyRange
          range={frequencyRange}
          onSetRange={handleFrequencyRange}
        />
      </section>
    </>
  );
};

export default App;
