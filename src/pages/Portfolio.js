import React from 'react';
import projects from '../projects.json';
import Project from '../components/Project';

function Portfolio() {   
    return (
        <section>
  <div class="flex-container">
    <div class="flex-left" id="work">
      PROJECTS
    </div>
    <div class="flex-right">
    {projects.map((project) => (
          <Project
            name={project.name}
            image={project.image}
            github={project.github}
            description={project.description}
            skills={project.skills}
          />
        ))}
    </div>
  </div>
</section>
    )
}

export default Portfolio;