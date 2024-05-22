import React from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data.js";
import SkillsCard from "./SkillsCard/SkillsCard.jsx";

const Skills = () => {
  return (
    <>
      <section className="skills-container">
        <h5>Compétences techniques</h5>

        <div className="skills-content">
          <div className="skills">
            {SKILLS.map((item) => (
              <SkillsCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
              />
            ))}
          </div>
          <div className="skills-info"></div>
        </div>
      </section>
    </>
  );
};

export default Skills;
