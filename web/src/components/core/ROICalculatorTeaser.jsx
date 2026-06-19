import React, { useState } from "react";
import { Card } from "./Atoms";

const ROICalculatorTeaser = () => {
  const [users, setUsers] = useState(50);

  const savings = users * 120;

  return (
    <Card className="p-6">
      <h3 className="text-white font-bold mb-3">ROI Estimate</h3>

      <input
        type="range"
        min="1"
        max="500"
        value={users}
        onChange={(e) => setUsers(e.target.value)}
        className="w-full accent-emerald-500"
      />

      <p className="text-slate-300 mt-3">
        Estimated savings: <span className="text-emerald-400">${savings}</span>
      </p>
    </Card>
  );
};

export default ROICalculatorTeaser;