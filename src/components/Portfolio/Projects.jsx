import React from "react";
import { NavLink } from "react-router-dom";
import "./Projects.css";

function Projects() {

  const openProject = (link) => {
    window.open(
      link,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="projects-page">

      <section className="projects-section">

        <NavLink to="/" className="back-button">
          ← Home
        </NavLink>

        <p className="section-label">
          WHAT I CREATED
        </p>

        <h1>
          My <span>Projects</span>
        </h1>

        <div className="projects-grid">

          {/* YOUTUBE */}

          <div className="project-card">

            <div className="project-icon">
              ▶️
            </div>

            <h2>
              Bunyod_YouTube
            </h2>

            <p>
              IT, gaming va football
              mavzularidagi YouTube kanalim.
            </p>

            <button
              onClick={() =>
                openProject(
                  "https://www.youtube.com/channel/UC8sMOGi3LKqpk1v4Rf2YA9Q"
                )
              }
            >
              YouTube ↗
            </button>

          </div>

          {/* TELEGRAM */}

          <div className="project-card">

            <div className="project-icon">
              🤖
            </div>

            <h2>
              Bilim Xon Bot
            </h2>

            <p>
              Telegram platformasida
              yaratgan bot loyiham.
            </p>

            <button
              onClick={() =>
                openProject(
                  "https://t.me/Bilim_Xon_bot"
                )
              }
            >
              Telegram Bot ↗
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Projects;