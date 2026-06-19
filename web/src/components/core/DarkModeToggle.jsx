import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="text-white px-3 py-1 rounded"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkModeToggle;