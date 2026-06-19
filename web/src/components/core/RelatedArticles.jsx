import React from "react";
import PropTypes from "prop-types";
import { Card } from "./Atoms";
import { useNavigate } from "react-router-dom";

const RelatedArticles = ({ articles = [], currentSlug }) => {
  const navigate = useNavigate();

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {articles
        .filter((a) => a.slug !== currentSlug)
        .slice(0, 3)
        .map((a) => (
          <Card
            key={a.slug}
            className="p-3 cursor-pointer"
            onClick={() => navigate(`/core/${a.slug}`)}
          >
            <h4 className="text-white text-sm">{a.title}</h4>
          </Card>
        ))}
    </div>
  );
};

RelatedArticles.propTypes = {
  articles: PropTypes.array,
  currentSlug: PropTypes.string,
};

export default RelatedArticles;