import React from 'react';

function Projects() {   
    return (
        <section>
  <div class="flex-container">
    <div class="flex-left" id="work">
      PROJECTS
    </div>
    <div class="flex-right">
      <a href="https://github.com/Akuruu/Wise_Planning_Project" class="flex-right project project-image" target="_blank">
        <span class="project-box">
          <h3>Wise Planning</h3>
          JavaScript and API's 
        </span>
      </a>
      <a href="https://github.com/efrech/code-quiz" class="secondary-projects project-image1" target="_blank">
        <span class="project-box">
          <h3>Code Quiz</h3>
          Interactive quiz
        </span>
      </a>
      <a href="https://github.com/efrech/weather-dashboard" class="secondary-projects project-image2" target="_blank">
        <span class="project-box">
          <h3>Weather Dashboard</h3>
          API's and JavaScript
        </span>
      </a>
      <a href="https://github.com/efrech" class="secondary-projects project-image3" target="_blank">
        <span class="project-box">
          <h3>Project 4</h3>
          Coming soon
        </span>
      </a>
      <a href="https://github.com/efrech" class="secondary-projects project-image4" target="_blank">
                <span class="project-box">
          <h3>Project 5</h3>
          Coming soon
        </span>
      </a>
    </div>
  </div>
</section>
    )
}

export default Projects;