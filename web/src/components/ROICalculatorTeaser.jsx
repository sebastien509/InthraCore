// src/components/ROICalculatorTeaser.jsx
import { useState } from "react";

const ROICalculatorTeaser = () => {
  const [nodes, setNodes] = useState(100);
  const [cloudCost, setCloudCost] = useState(5000);

  const edgeSavings = nodes * 12 * 300; // Simplified: $300 saved per node per month
  const totalCloudCost = cloudCost * 12;
  const percentSaved = ((edgeSavings / totalCloudCost) * 100).toFixed(0);

  return (
    <div className="rounded-2xl border border-indigo-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-indigo-800 dark:bg-slate-900">
      <div className="mb-4 text-4xl">💰</div>
      <h3 className="text-xl font-semibold dark:text-white">ROI Calculator</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        Estimate savings with edge-first AI.
      </p>
      <div className="mt-4 space-y-3">
        <div>
          <label className="text-sm font-medium">Edge nodes</label>
          <input
            type="range"
            min="10"
            max="1000"
            step="10"
            value={nodes}
            onChange={(e) => setNodes(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-xs text-slate-500">{nodes} nodes</p>
        </div>
        <div>
          <label className="text-sm font-medium">Annual cloud cost ($)</label>
          <input
            type="number"
            value={cloudCost}
            onChange={(e) => setCloudCost(Number(e.target.value))}
            className="w-full rounded-lg border p-1 text-sm dark:border-slate-700 dark:bg-slate-800"
          />
        </div>
        <div className="rounded-lg bg-indigo-50 p-3 dark:bg-indigo-950/50">
          <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-300">
            Estimated savings: ${edgeSavings.toLocaleString()}/year
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {percentSaved}% reduction vs cloud-only
          </p>
        </div>
      </div>
      <button className="mt-4 w-full rounded-lg bg-indigo-600 py-2 text-sm font-medium text-white hover:bg-indigo-700">
        Calculate full ROI →
      </button>
    </div>
  );
};

export default ROICalculatorTeaser;