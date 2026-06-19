// src/components/AuditChecklist.jsx
import { useState } from "react";

const AuditChecklist = () => {
  const [checks, setChecks] = useState({
    gdpr: false,
    euaiact: false,
    privacyReceipts: false,
    localInference: false,
    dataMinimization: false,
  });

  const toggle = (key) => {
    setChecks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const items = [
    { key: "gdpr", label: "GDPR Article 25 (Data Protection by Design)", required: true },
    { key: "euaiact", label: "EU AI Act Risk Management (High-risk systems)", required: true },
    { key: "privacyReceipts", label: "Privacy Receipts Implementation", required: true },
    { key: "localInference", label: "Local Inference Only – No Cloud Telemetry", required: true },
    { key: "dataMinimization", label: "Data Minimization & Retention Policies", required: false },
  ];

  const progress = Object.values(checks).filter(Boolean).length;
  const total = items.length;

  return (
    <div className="rounded-2xl border border-indigo-200 bg-white p-6 dark:border-indigo-800 dark:bg-slate-900">
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-semibold dark:text-white">Audit Readiness Checklist</h3>
        <span className="text-sm text-indigo-600">{progress}/{total} completed</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-indigo-100 dark:bg-indigo-900">
        <div className="h-2 rounded-full bg-indigo-600 transition-all" style={{ width: `${(progress / total) * 100}%` }} />
      </div>
      <div className="mt-4 space-y-2">
        {items.map(item => (
          <label key={item.key} className="flex cursor-pointer items-start gap-3 rounded-lg p-2 hover:bg-indigo-50 dark:hover:bg-indigo-950/30">
            <input
              type="checkbox"
              checked={checks[item.key]}
              onChange={() => toggle(item.key)}
              className="mt-0.5 h-4 w-4 rounded border-indigo-300 text-indigo-600 focus:ring-indigo-500"
            />
            <div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.label}</p>
              {item.required && <span className="text-xs text-red-500">Required for enterprise tier</span>}
            </div>
          </label>
        ))}
      </div>
      <button className="mt-4 w-full rounded-lg border border-indigo-200 py-2 text-sm font-medium text-indigo-600 transition hover:bg-indigo-50 dark:border-indigo-800 dark:text-indigo-400 dark:hover:bg-indigo-950">
        Download full audit template →
      </button>
    </div>
  );
};

export default AuditChecklist;