import React from "react";
import PropTypes from "prop-types";

const TableOfContents = ({ headings = [] }) => {
  return (
    <div className="sticky top-24 text-sm space-y-2">
      {headings.map((h) => (
        <a
          key={h.id}
          href={`#${h.id}`}
          className="block text-slate-400 hover:text-emerald-400"
        >
          {h.text}
        </a>
      ))}
    </div>
  );
};

TableOfContents.propTypes = { headings: PropTypes.array };

export default TableOfContents;