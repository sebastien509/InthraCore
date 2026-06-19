import { ShieldCheck } from "lucide-react";

export default function TrustBar() {
  return (
    <div className="sticky top-[72px] z-40 border-b border-white/10 bg-[#0B1120]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 py-3 text-sm text-slate-300">
        {[
          "GDPR Ready",
          "EU AI Act Alignment",
          "SOC2 Roadmap",
          "ISO 27001",
          "Offline-First AI",
        ].map((item) => (
          <div
            key={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
          >
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}