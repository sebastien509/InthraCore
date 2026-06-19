// src/components/HeadTags.jsx
import { useEffect } from "react";

export function HeadTags({ title, metas=[], links=[] }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    const created = [];

    metas.forEach((m) => {
      const el = document.createElement("meta");
      Object.entries(m).forEach(([k,v]) => el.setAttribute(k, v));
      document.head.appendChild(el); created.push(el);
    });

    links.forEach((l) => {
      const el = document.createElement("link");
      Object.entries(l).forEach(([k,v]) => el.setAttribute(k, v));
      document.head.appendChild(el); created.push(el);
    });

    return () => { created.forEach((el) => document.head.removeChild(el)); document.title = prevTitle; };
  }, [title, JSON.stringify(metas), JSON.stringify(links)]);

  return null;
}
