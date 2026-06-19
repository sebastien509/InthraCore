import { useState } from "react";
import {
  MessageCircle,

  Mail,
  MapPinned,
} from "lucide-react";

export default function FloatingMovementCTA() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-3">
        {open && (
          <>
            <a
              href="#"
              className="rounded-2xl border border-white/10 bg-[#0B1120] p-4 text-white shadow-2xl"
            >
              <Mail className="h-5 w-5" />
            </a>

            <a
              href="#"
              className="rounded-2xl border border-white/10 bg-[#0B1120] p-4 text-white shadow-2xl"
            >
              <Mail className="h-5 w-5" />
            </a>

            <a
              href="#"
              className="rounded-2xl border border-white/10 bg-[#0B1120] p-4 text-white shadow-2xl"
            >
              <MessageCircle className="h-5 w-5" />
            </a>

            <a
              href="#"
              className="rounded-2xl border border-white/10 bg-[#0B1120] p-4 text-white shadow-2xl"
            >
              <MapPinned className="h-5 w-5" />
            </a>
          </>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-2xl bg-indigo-600 px-6 py-4 font-semibold text-white shadow-2xl shadow-indigo-500/30"
        >
          Join the Movement
        </button>
      </div>
    </div>
  );
}