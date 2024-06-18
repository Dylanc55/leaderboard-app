import React, { useRef } from "react";

import RangeModel from "../models/Range";

const FrequencyRange: React.FC<{
  range: RangeModel;
  onSetRange: (range: RangeModel) => void;
}> = ({ range, onSetRange }) => {
  const minRangeInput = useRef<HTMLInputElement>(null);
  const maxRangeInput = useRef<HTMLInputElement>(null);

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    const range = {
      min: +minRangeInput.current!.value,
      max: +maxRangeInput.current!.value,
    };

    if (range.min && range.max && range.min < range.max) {
      onSetRange(range);
    } else {
      return;
    }
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <h3>Frequency Range (seconds)</h3>

      <p>
        <label htmlFor="frequencyRangeMin">Min</label>
        <input
          ref={minRangeInput}
          type="number"
          id="frequencyRangeMin"
          defaultValue={range.min}
        />
      </p>

      <p>
        <label htmlFor="frequencyRangeMax">Max</label>
        <input
          ref={maxRangeInput}
          type="number"
          id="frequencyRangeMax"
          defaultValue={range.max}
        />
      </p>

      <button>Set</button>
    </form>
  );
};

export default FrequencyRange;
