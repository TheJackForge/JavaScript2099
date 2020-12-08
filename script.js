const projectsBtn = document.getElementById('projects-button')
const projectsUl = document.getElementById('project-list')
const main = document.getElementById('main')
const nav = document.getElementById('nav')
const showModalBtn = document.getElementById('info-show-modal-button')
const modalCloseBtn = document.getElementById('modal-close-button')
const contentContainer = document.getElementById('content-container')


const projectsArray = [
    {
        'title': 'HOW TO BUILD A PROGRESS BAR',
        'id': 'progressBar',
        'link': 'pages/progress.html'
    },
    {
        'title': 'HOW TO BUILD A MODAL',
        'id': 'modal',
        'link': 'pages/buildmodal.html'
    }
];


function projectsOpen() {
    projectsList();
}

function projectsList() {
    if (projectsUl.classList.contains('projects-ul-closed')) {
        projectsArray.forEach( (project, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a')
        li.className = ('projects-li')
        li.id = project.id
        li.dataset.index = index
        a.setAttribute('href', `../${project.link}`)
        li.innerHTML = `
            ${project.title}
        `
        a.appendChild(li)
        projectsUl.appendChild(a);
        projectsUl.classList.remove('projects-ul-closed')
        projectsUl.classList.add('projects-ul')
        })
    } else {
        projectsUl.textContent = ''
        projectsUl.classList.add('projects-ul-closed')
    }
}


// Event Listeners for Navigation

showModalBtn.addEventListener('click', () => {
    const infoModalShow = document.getElementById('info-modal-show')
    infoModalShow.style.display = 'flex'
    document.body.style.overflow = 'hidden'     
})


modalCloseBtn.addEventListener('click', () => {
    const infoModalShow = document.getElementById('info-modal-show');
    infoModalShow.style.display = 'none'
    document.body.style.overflow = 'scroll'
})

window.addEventListener('click', (e) => {
    const infoModalShow = document.getElementById('info-modal-show');
    if (infoModalShow.style.display === 'flex') {
        if (e.target === infoModalShow) {
            infoModalShow.style.display = 'none';
            document.body.style.overflow = 'scroll'
        }
    }
})

projectsBtn.addEventListener('click', projectsOpen)

projectsUl.addEventListener('click', (e) => {
    if (e.target.tagName = 'li') {
        const index = e.target.dataset.index
        // populateDomProjects(index)
    }
})

// PROJECT NAVIGATION EVENT LISTENERS

contentContainer.addEventListener('click', (e) => {
    console.log(e.target.id)
})

contentContainer.addEventListener('click', (e) => {
    if (e.target.id === 'project-summary-button')   {
        const projectSummary = document.getElementById('project-summary')
        const projectHtml = document.getElementById('project-html')
        const projectCss = document.getElementById('project-css')
        const projectJavaScript = document.getElementById('project-javascript')
        const projectSummaryBtn = document.getElementById('project-summary-button')
        const projectHtmlBtn = document.getElementById('project-html-button')
        const projectCssBtn = document.getElementById('project-css-button')
        const projectJavascriptBtn = document.getElementById('project-javascript-button')
    // BUTTON BORDER BOTTOM REMOVED ON SUMMARY
    projectSummaryBtn.classList.add('active')
    projectHtmlBtn.classList.remove('active')
    projectCssBtn.classList.remove('active')
    projectJavascriptBtn.classList.remove('active')

    // OPEN SUMMARY SECTION PAGE - CLOSE ALL OTHERS
    projectSummary.classList.add('active');
    projectHtml.classList.remove('active');
    projectCss.classList.remove('active');
    projectJavaScript.classList.remove('active');
    }
})

contentContainer.addEventListener('click', (e) => {
    if (e.target.id === 'project-html-button') {
        const projectSummary = document.getElementById('project-summary')
        const projectHtml = document.getElementById('project-html')
        const projectCss = document.getElementById('project-css')
        const projectJavaScript = document.getElementById('project-javascript')
        const projectSummaryBtn = document.getElementById('project-summary-button')
        const projectHtmlBtn = document.getElementById('project-html-button')
        const projectCssBtn = document.getElementById('project-css-button')
        const projectJavascriptBtn = document.getElementById('project-javascript-button')
        // BUTTON BORDER BOTTOM REMOVED ON HTML
        projectHtmlBtn.classList.add('active')
        projectSummaryBtn.classList.remove('active')
        projectCssBtn.classList.remove('active')
        projectJavascriptBtn.classList.remove('active')

        // OPEN HTML SECTION PAGE - CLOSE ALL OTHERS
        projectSummary.classList.remove('active');
        projectHtml.classList.add('active');
        projectCss.classList.remove('active');
        projectJavaScript.classList.remove('active');
    }
})

contentContainer.addEventListener('click', (e) => {
    if (e.target.id === 'project-css-button') {
        const projectSummary = document.getElementById('project-summary')
        const projectHtml = document.getElementById('project-html')
        const projectCss = document.getElementById('project-css')
        const projectJavaScript = document.getElementById('project-javascript')
        const projectSummaryBtn = document.getElementById('project-summary-button')
        const projectHtmlBtn = document.getElementById('project-html-button')
        const projectCssBtn = document.getElementById('project-css-button')
        const projectJavascriptBtn = document.getElementById('project-javascript-button')
        // BUTTON BORDER BOTTOM REMOVED ON CSS
        projectCssBtn.classList.add('active')
        projectHtmlBtn.classList.remove('active')
        projectSummaryBtn.classList.remove('active')
        projectJavascriptBtn.classList.remove('active')
        // OPEN CSS SECTION PAGE - CLOSE ALL OTHERS
        projectSummary.classList.remove('active');
        projectHtml.classList.remove('active');
        projectCss.classList.add('active');
        projectJavaScript.classList.remove('active');
    }
})

contentContainer.addEventListener('click', (e) => {
    if (e.target.id === 'project-javascript-button') {
        const projectSummary = document.getElementById('project-summary')
        const projectHtml = document.getElementById('project-html')
        const projectCss = document.getElementById('project-css')
        const projectJavaScript = document.getElementById('project-javascript')
        const projectSummaryBtn = document.getElementById('project-summary-button')
        const projectHtmlBtn = document.getElementById('project-html-button')
        const projectCssBtn = document.getElementById('project-css-button')
        const projectJavascriptBtn = document.getElementById('project-javascript-button')
        // BUTTON BORDER BOTTOM REMOVED ON JAVASCRIPT
        projectJavascriptBtn.classList.add('active')
        projectHtmlBtn.classList.remove('active')
        projectCssBtn.classList.remove('active')
        projectSummaryBtn.classList.remove('active')
        // OPEN JAVASCRIPT SECTION PAGE - CLOSE ALL OTHERS
        projectSummary.classList.remove('active');
        projectHtml.classList.remove('active');
        projectCss.classList.remove('active');
        projectJavaScript.classList.add('active');
    }
})


// PROJECTS SECTION

// How to Build a Progress Bar Project

contentContainer.addEventListener('click', (e) => {
    if (e.target.id === 'activate-progress-button') {
        const movingProgressBar = document.getElementById('moving-progress-bar')
        let width = 0;
        const progress = setInterval(percentage, 20)
        function percentage() {
            if (width >= 100) {
                clearInterval(progress)
            } else {
                width++;
                movingProgressBar.style.width = width + '%';
            }
        }
    }
})

// How to Build a Modal Project
