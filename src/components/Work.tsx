import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const BASE_URL = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Predictive Sales Modeling",
    category: "Machine Learning Forecasting Project",
    tools: "Python, EDA, Random Forest, Gradient Boosting, OLS, RMSE",
    image: `${BASE_URL}images/projects/predictive-sales-modeling.svg`,
    link: "https://github.com/kv8936",
  },
  {
    title: "Data Analyst Salary Dashboard",
    category: "Compensation Analysis in Excel",
    tools: "Excel, Pivot Tables, Charts, Dashboard Design",
    image: `${BASE_URL}images/projects/callhq-online.jpg`,
    link: "https://github.com/kv8936",
  },
  {
    title: "Movie Rental Database",
    category: "Relational Database Design & Optimization",
    tools: "SQL, DDL, DML, Joins, Aggregations, Normalization",
    image: `${BASE_URL}images/projects/movie-rental-database.jpg`,
    link: "https://github.com/kv8936",
  },
  {
    title: "Urban Auto Insights",
    category: "Automotive Market Analytics Dashboard",
    tools: "Tableau, Data Segmentation, Interactive Filters",
    image: `${BASE_URL}images/projects/orrdr-online.jpg`,
    link: "https://github.com/kv8936",
  },
  {
    title: "Urban Mobility Insights – Berlin",
    category: "Street-Level Traffic Pattern Analysis",
    tools: "Python, GeoPandas, Folium, GeoJSON, Jupyter",
    image: `${BASE_URL}images/projects/urban-mobility-berlin.jpg`,
    link: "https://github.com/kv8936",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
