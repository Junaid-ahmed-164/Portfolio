import React, { useState } from "react";
import "./Latestwork.css";

// Sample image imports (Replace these with actual image paths)
import work1 from "../../assets/work1.jpg";
import work2 from "../../assets/work2.jpeg";
import work3 from "../../assets/work3.jpg";
import work4 from "../../assets/work4.jpg";
import work5 from "../../assets/work5.jpg";
import work6 from "../../assets/work6.jpg";

const Latestwork = () => {
  const [showAll, setShowAll] = useState(false);

  const works = [
    { id: 1, image: work1 },
    { id: 2, image: work2 },
    { id: 3, image: work3 },
    { id: 4, image: work4 },
    { id: 5, image: work5 },
    { id: 6, image: work6 },
  ];

  const visibleWorks = showAll ? works : works.slice(0, 4);

  return (
    <section id="latestwork" className="latest-work-section">
      <h2 className="section-title">Latest Work</h2>
      <div className="work-grid">
        {visibleWorks.map((work) => (
          <div key={work.id} className="work-card">
            <img src={work.image} alt={`work ${work.id}`} className="work-img" />
            <div className="hover-overlay"></div>
          </div>
        ))}
      </div>
      <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default Latestwork;
