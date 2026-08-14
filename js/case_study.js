/*----------------------------------------------
        Data Searching
----------------------------------------------*/ 
const urlparams = new URLSearchParams(window.location.search);

const projectId = urlparams.get("project");

const currentProject = projectData[projectId];

if (currentProject) {
    
    console.log(
        `Loading ${currentProject.title} case study page...`
    );

}


/*----------------------------------------------
        Element References
----------------------------------------------*/ 
const projectCategory = document.querySelector("#project-category");
const projectTitle = document.querySelector("#project-title");
const shortDescription = document.querySelector("#short-description");
const longDescription = document.querySelector("#long-description");

const projectMeta = document.querySelector("#project-meta");
const techPills = document.querySelector("#technology-pills");

const githubLink = document.querySelector("#github-link");
const demoLink = document.querySelector("#demo-link");

const metricsGrid = document.querySelector("#metrics-grid");

const problem = document.querySelector("#problem");
const solution = document.querySelector("#solution");

const overview = document.querySelector("#overview");

const featureGrid = document.querySelector("#features-grid");

const languageList = document.querySelector("#language-list");
const frameworkList = document.querySelector("#framework-list");
const databaseList = document.querySelector("#database-list");
const authList = document.querySelector("#authentication-list");
const toolsList = document.querySelector("#tools-list");

const challengeSoluGrid = document.querySelector("#challenge-grid");

const contributionsList = document.querySelector("#contributions-list");

const lessonsList = document.querySelector("#lessons-list");

const futureGrid = document.querySelector("#future-grid");

const architectureDescription = document.querySelector("#architecture-description");
const architectureDesignImg = document.querySelector("#architecture-image");

const projectYear = document.querySelector("#year");


/*----------------------------------------------
    Project Information
----------------------------------------------*/
function renderProjectInfo() {
    projectCategory.textContent = currentProject.category;
    
    projectTitle.textContent = currentProject.title;
    
    shortDescription.textContent = currentProject.shortDescription;
    
    longDescription.textContent = currentProject.longDescription;
    
    problem.textContent = currentProject.problem;
    
    solution.textContent = currentProject.solution;
    
    overview.textContent = currentProject.overview;
    
    architectureDescription.textContent = currentProject.architectureDescription;
    
    architectureDesignImg.src = currentProject.architectureImage;
    
    architectureDesignImg.alt = currentProject.architectureDesignImgAltText;
}

renderProjectInfo();



/*----------------------------------------------
            Project MetaData
----------------------------------------------*/
function renderProjectMetaData() {
    const metaData = [
        {
            label: "Status",
            value: currentProject.status
        },
        {
            label: "Role",
            value: currentProject.role
        },
        {
            label: "Duration",
            value: currentProject.duration
        },
        {
            label: "Project Type",
            value: currentProject.projectType
        }
    ];
    
    projectMeta.innerHTML = "";
    
    metaData.forEach(item => {
        const metaCard = document.createElement("div");
        metaCard.classList.add("meta-card");
        
        metaCard.innerHTML = `
        <span class="meta-label">${item.label}</span>
        <span class="meta-value">${item.value}</span>
        `;
        
        projectMeta.appendChild(metaCard);
    });
}


renderProjectMetaData();


/*----------------------------------------------
    Project Links
----------------------------------------------*/
function renderProjectLinks() {
    if (currentProject.github) {

        githubLink.href = currentProject.github;
        githubLink.target = "_blank";
        githubLink.rel = "noopener noreferrer";

    } else {

        githubLink.style.display = "none";

    }
    
    if (currentProject.liveDemo) {

        demoLink.href = currentProject.liveDemo;
        demoLink.target = "_blank";
        demoLink.rel = "noopener noreferrer";

    } else {

        demoLink.style.display = "none";

    }
}

renderProjectLinks();




/*----------------------------------------------
    Technology Pills
----------------------------------------------*/
function renderTechPills() {
    
    techPills.innerHTML = "";
    
    currentProject.technologies.forEach(technology => {
        
        const pill = document.createElement("span");
        pill.classList.add("tech-pill");
        pill.textContent = technology;

        techPills.appendChild(pill);

    });
}

renderTechPills();


/*----------------------------------------------
    Metrics Grid
----------------------------------------------*/
function renderProjectMetrics() {
    
    metricsGrid.innerHTML = "";
    
    currentProject.metrics.forEach(metric => {
        
        const metricCard = document.createElement("div");
        metricCard.classList.add("metric-card");

        const metricCardTitle = document.createElement("h3");
        metricCardTitle.classList.add("metric-title");
        metricCardTitle.textContent = metric.value;
        
        const metricCardDescription = document.createElement("p");
        metricCardDescription.classList.add("metric-card-descritpion");
        metricCardDescription.textContent = metric.title;
        
        metricCard.appendChild(metricCardTitle);
        metricCard.appendChild(metricCardDescription);
        
        metricsGrid.appendChild(metricCard);
        
    });
}

renderProjectMetrics();


/*----------------------------------------------
        Features Grid
----------------------------------------------*/
function renderProjectFeature() {
    
    featureGrid.innerHTML = "";
    
    currentProject.features.forEach(feature => {
        
        const featureCard = document.createElement("div");
        featureCard.classList.add("feature-card");
        
        const featureCardTitle = document.createElement("h3");
        featureCardTitle.classList.add("feature-card-title");
        featureCardTitle.textContent = feature.title;
        
        const featureCardDescription = document.createElement("p");
        featureCardDescription.classList.add("feature-card-description");
        featureCardDescription.textContent = feature.description;

        featureCard.appendChild(featureCardTitle);
        featureCard.appendChild(featureCardDescription);
        
        featureGrid.appendChild(featureCard);
        
    });
    
}

renderProjectFeature();


/*----------------------------------------------
        Stack - Programming Language
----------------------------------------------*/
function renderProjectProgLangList() {
    
    languageList.innerHTML = "";

    currentProject.stack.language.forEach(lang => {

        const langListItem = document.createElement("li");
        langListItem.classList.add("lang-list-item");
        langListItem.textContent = lang;
        
        languageList.appendChild(langListItem);
        
    });
    
}

renderProjectProgLangList();


/*----------------------------------------------
        Stack Frameworks 
----------------------------------------------*/
function renderProjectStackFramework() {
    
    frameworkList.innerHTML = "";

    currentProject.stack.framework.forEach(fw => {

        const frameworkItem = document.createElement("li");
        frameworkItem.classList.add("framework-item");
        frameworkItem.textContent = fw;

        frameworkList.appendChild(frameworkItem);

    });

}

renderProjectStackFramework();


/*----------------------------------------------
        Stack Database 
----------------------------------------------*/
function renderProjectStackDB() {
    
    databaseList.innerHTML = "";

    currentProject.stack.database.forEach(db => {

        const databaseItem = document.createElement("li");
        databaseItem.classList.add("database-item");
        databaseItem.textContent = db;

        databaseList.appendChild(databaseItem);

    });

}

renderProjectStackDB();


/*----------------------------------------------
        Stack Auth 
----------------------------------------------*/
function renderProjectStackAuth() {
    
    authList.innerHTML = "";

    currentProject.stack.authentication.forEach(auth => {

        const authItem = document.createElement("li");
        authItem.classList.add("auth-item");
        authItem.textContent = auth;

        authList.appendChild(authItem);

    });

}

renderProjectStackAuth();


/*----------------------------------------------
        Stack Auth 
----------------------------------------------*/
function renderProjectStackTools() {
    
    toolsList.innerHTML = "";
    
    currentProject.stack.tools.forEach(tool => {
        
        const toolItem = document.createElement("li");
        toolItem.classList.add("tool-item");
        toolItem.textContent = tool;

        toolsList.appendChild(toolItem);
        
    });
    
}

renderProjectStackTools();


/*----------------------------------------------
        Challenge - Solution Grid 
----------------------------------------------*/
function renderProjectChalSol() {
    
    challengeSoluGrid.innerHTML = "";
    
    currentProject.challenges.forEach(challenge => {
        
        const chalSoluWrapper = document.createElement("div");
        chalSoluWrapper.classList.add("chal-solu-wrapper");
        
        const challengeCard = document.createElement("div");
        challengeCard.classList.add("challenge-card");
        
        const challengeTitle = document.createElement("h3");
        challengeTitle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
            </svg>

            <span>Challenge</span>
        `;
        
        
        const challengeDetails = document.createElement("p");
        challengeDetails.textContent = challenge.challenge;
        
        challengeCard.append(
            challengeTitle,
            challengeDetails
        );
        
        const solutionCard = document.createElement("div");
        solutionCard.classList.add("sol-card");
        
        const solutionTitle = document.createElement("h3");
        solutionTitle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
                aria-hidden="true">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
            <span>Solution</span>
        `;

        const solutionDetails = document.createElement("p");
        solutionDetails.textContent = challenge.solution;
        
        solutionCard.append(
            solutionTitle,
            solutionDetails
        );
        
        chalSoluWrapper.append(
            challengeCard,
            solutionCard
        );
        
        challengeSoluGrid.appendChild(chalSoluWrapper);
        
    });
    
}

renderProjectChalSol();


/*----------------------------------------------
        Project Contributions 
----------------------------------------------*/
function renderProjectContributions() {
    
    contributionsList.innerHTML = "";
    
    currentProject.contributions.forEach(contribution => {
        
        const contributionItem = document.createElement("li");
        contributionItem.classList.add("contribution-item");
        
        contributionItem.textContent = contribution;
        
        contributionsList.appendChild(contributionItem);

    });

}

renderProjectContributions();


/*----------------------------------------------
        Project Contributions 
----------------------------------------------*/
function renderProjectLessons() {
    
    lessonsList.innerHTML = "";
    
    currentProject.lessons.forEach(lesson => {
        
        const lessonsItem = document.createElement("li");
        lessonsItem.classList.add("lessons-item");
        
        lessonsItem.textContent = lesson;
        
        lessonsList.appendChild(lessonsItem);

    });

}

renderProjectLessons();


/*----------------------------------------------
        Project Future Improvements 
----------------------------------------------*/
function renderFutureImprovements() {

    futureGrid.innerHTML = "";

    currentProject.futureImprovements.forEach((improvement, index) => {

        const improvementCard = document.createElement("div");
        improvementCard.classList.add("improvement-card");

        const improvementTitle = document.createElement("h3");
        improvementTitle.classList.add("improvement-title");
        improvementTitle.textContent = improvement.title;

        const improvementDescription = document.createElement("p");
        improvementDescription.classList.add("improvement-description");
        improvementDescription.textContent = improvement.description;

        improvementCard.append(
            improvementTitle,
            improvementDescription
        );

        futureGrid.appendChild(improvementCard);

    });

}

renderFutureImprovements();


/*----------------------------------------------
        Project Year
----------------------------------------------*/
function renderProjectYear() {
    
    projectYear.textContent = currentProject.year;

}

renderProjectYear();



/*----------------------------------------------
        Projects Navigations
----------------------------------------------*/
const prevProjectBtn = document.querySelector("#previous-project-btn");
const nextProjectBtn = document.querySelector("#next-project-btn");

function renderProjectNav() {

    // const projectIds = projectData.map(project => project.id);
    const projectIds = Object.keys(projectData);
    const currentIndex = projectIds.indexOf(projectId);

    prevProjectBtn.disabled = false;
    nextProjectBtn.disabled = false;

    prevProjectBtn.classList.remove("disabled");
    nextProjectBtn.classList.remove("disabled");


    if (currentIndex === -1) {
        
        prevProjectBtn.disabled = true;
        nextProjectBtn.disabled = true;
        
        prevProjectBtn.classList.add("disabled");
        nextProjectBtn.classList.add("disabled");
        
        return;
    }
    
    if (currentIndex === 0) {
        
        prevProjectBtn.disabled = true;
        prevProjectBtn.classList.add("disabled");
        
    }
    
    if (currentIndex === projectIds.length - 1) {
        
        nextProjectBtn.disabled = true;
        nextProjectBtn.classList.add("disabled");

    }
    
    const prevIndex = (currentIndex - 1 + projectIds.length) % projectIds.length;
    const nextIndex = (currentIndex + 1) % projectIds.length;

    const prevProjectId = projectIds[prevIndex];
    const nextProjectId = projectIds[nextIndex];

    const prevProject = projectData[prevProjectId];
    const nextProject = projectData[nextProjectId];

    prevProjectBtn.addEventListener("click", () => {
        
        console.log("Previous Project Button Clicked!");

        window.location.href = `case_study.html?project=${prevProjectId}#hero`;
        
    });
    
    nextProjectBtn.addEventListener("click", () => {
        
        console.log("Next Project Button Clicked!");
        
        window.location.href = `case_study.html?project=${nextProjectId}#hero`;
        
    });
}

renderProjectNav();
