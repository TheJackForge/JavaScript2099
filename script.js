const projectsBtn = document.getElementById('projects-button')
const projectsUl = document.getElementById('project-list')
const main = document.getElementById('main')
const nav = document.getElementById('nav')
const showModalBtn = document.getElementById('info-show-modal-button')
const modalCloseBtn = document.getElementById('modal-close-button')
const contentContainer = document.getElementById('content-container')
const indexProjectGrid = document.getElementById('index-project-grid')
const modalContentRight = document.getElementById('modal-content-right')

const projectsArray = [
    {
        'title': 'BUILD A PROGRESS BAR',
        'id': 'progressBar',
        'link': 'pages/buildprogress.html'
    },
    {
        'title': 'BUILD A MODAL',
        'id': 'modal',
        'link': 'pages/buildmodal.html'
    },
    // {
    //     'title': 'HOW TO BUILD A TIMER',
    //     'id': 'timer',
    //     'link': 'pages/buildtimer.html'
    // },
    // {
    //     'title': 'HOW TO BUILD A BURGER MENU',
    //     'id': 'burgermenu',
    //     'link': 'pages/burgermenu.html'
    // },
    // {
    //     'title': 'HOW TO BUILD AN IMAGE CAROUSEL',
    //     'id': 'imagecarousel',
    //     'link': 'pages/imagecarousel.html'
    // }
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

// POPULATE INDEX PAGE WITH LINKS FOR GRID 

window.addEventListener('DOMContentLoaded', () => {
    if (indexProjectGrid) {
        const indexGrid = document.getElementById('index-project-grid')
        projectsArray.forEach(project => {
            const indexProject = document.createElement('div');
            const a = document.createElement('a');
            a.setAttribute('href', `${project.link}`)
            indexProject.classList.add('index-project-styling')
            // indexProject.setAttribute("href", `${project.link}`)
            indexProject.innerHTML = `${project.title}`
            a.appendChild(indexProject)
            indexGrid.appendChild(a)
        })

    } else {
        console.log('DOES NOT EXIST')
    }
})

// POPULATE MODEL CONTENT RIGHT WITH TEXT

window.addEventListener('DOMContentLoaded', () => {
    if (modalContentRight) {
        modalContentRight.innerHTML = `
        <p>Hello my name is Jack Forge and welcome to JavaScript/2099</p>
        <p>I have developed JavaScript/2099 as a way to not only teach others how to code things in JavaScript, but to also use as a sort of technical blog for myself. I would like this to become an ongoing project that I keep working on as I learn new concepts.</p>
        <p>The early projects are going to be very basic as I find my footing and start building things on my own, but hopefully we can ramp things up and eventually get more complex.</p>
        <p>I hope you enjoy what I am building here and if you have any suggestions for future projects, email me (<span class="ide-green">TheJackForge at Gmail.com</span>) or send me a quick message on Twitter (<a href="http://www.twitter.com/thejackforge"><span class="ide-green">@TheJackForge</span></a>).</p>
        <p>Thank you,</p>
        <p>Jack Forge</p>
        `
    } else {
        console.log('MODAL CONTENT DOES NOT EXIST ON THIS PAGE')
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
        // const projectSummaryBtn = document.getElementById('project-summary-button')
        const projectSummaryLi = document.querySelector('.project-li-summary')
        const projectHtmlLi = document.querySelector('.project-li-html')
        const projectCssLi = document.querySelector('.project-li-css')
        const projectJavascriptLi= document.querySelector('.project-li-javascript')
        // LI BORDER BOTTOM REMOVED ON SUMMARY
        projectSummaryLi.classList.add('active')
        projectHtmlLi.classList.remove('active')
        projectCssLi.classList.remove('active')
        projectJavascriptLi.classList.remove('active')

        // OPEN SUMMARY SECTION PAGE - CLOSE ALL OTHERS
        projectSummary.classList.add('active');
        projectHtml.classList.remove('active');
        projectCss.classList.remove('active');
        projectJavaScript.classList.remove('active');
    }
})

contentContainer.addEventListener('click', (e) => {
    if (e.target.id === 'project-html-button') {
        console.log('WORKING')
        const projectSummary = document.getElementById('project-summary')
        const projectHtml = document.getElementById('project-html')
        const projectCss = document.getElementById('project-css')
        const projectJavaScript = document.getElementById('project-javascript')
        const projectSummaryLi = document.querySelector('.project-li-summary')
        const projectHtmlLi = document.querySelector('.project-li-html')
        const projectCssLi = document.querySelector('.project-li-css')
        const projectJavascriptLi= document.querySelector('.project-li-javascript')
//         // LI BORDER BOTTOM REMOVED ON HTML
        projectHtmlLi.classList.add('active')
        projectSummaryLi.classList.remove('active')
        projectCssLi.classList.remove('active')
        projectJavascriptLi.classList.remove('active')

//         // OPEN HTML SECTION PAGE - CLOSE ALL OTHERS
        projectSummary.classList.remove('active');
        projectHtml.classList.add('active');
        projectCss.classList.remove('active');
        projectJavaScript.classList.remove('active');
    }
})

contentContainer.addEventListener('click', (e) => {
    if (e.target.id === 'project-css-button') {
        console.log('WORKING')
        const projectSummary = document.getElementById('project-summary')
        const projectHtml = document.getElementById('project-html')
        const projectCss = document.getElementById('project-css')
        const projectJavaScript = document.getElementById('project-javascript')
        const projectSummaryLi = document.querySelector('.project-li-summary')
        const projectHtmlLi = document.querySelector('.project-li-html')
        const projectCssLi = document.querySelector('.project-li-css')
        const projectJavascriptLi= document.querySelector('.project-li-javascript')
//         // LI BORDER BOTTOM REMOVED ON CSS
        projectHtmlLi.classList.remove('active')
        projectSummaryLi.classList.remove('active')
        projectCssLi.classList.add('active')
        projectJavascriptLi.classList.remove('active')

//         // OPEN HTML SECTION PAGE - CLOSE ALL OTHERS
        projectSummary.classList.remove('active');
        projectHtml.classList.remove('active');
        projectCss.classList.add('active');
        projectJavaScript.classList.remove('active');
    }
})

contentContainer.addEventListener('click', (e) => {
    if (e.target.id === 'project-javascript-button') {
        console.log('WORKING')
        const projectSummary = document.getElementById('project-summary')
        const projectHtml = document.getElementById('project-html')
        const projectCss = document.getElementById('project-css')
        const projectJavaScript = document.getElementById('project-javascript')
        const projectSummaryLi = document.querySelector('.project-li-summary')
        const projectHtmlLi = document.querySelector('.project-li-html')
        const projectCssLi = document.querySelector('.project-li-css')
        const projectJavascriptLi= document.querySelector('.project-li-javascript')
        // LI BORDER BOTTOM REMOVED ON JAVASCRIPT
        projectHtmlLi.classList.remove('active')
        projectSummaryLi.classList.remove('active')
        projectCssLi.classList.remove('active')
        projectJavascriptLi.classList.add('active')

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

contentContainer.addEventListener('click', (e) => {
    const showModal = document.getElementById('build-modal-show');
    if (e.target.id === 'build-modal-button') {
        showModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'
        showModalExample()  
    }
})

function showModalExample() {
    const showModal = document.getElementById('build-modal-show');
    const closeButton = document.getElementById('build-modal-close-button');
        closeButton.addEventListener('click', () => {
            showModal.style.display = 'none'
            document.body.style.overflow = 'scroll'
    })
}

window.addEventListener('click', (e) => {
    const showModal = document.getElementById('build-modal-show');
    if (e.target === showModal) {
        showModal.style.display = 'none'
        document.body.style.overflow = 'scroll'
    }
})

// How to Build a Timer Countdown Project 

function buildCountdownTimer() {
    const buildDigitalClockDiv = document.getElementById('build-digital-clock')
    const date = new Date;

    let dateHours = date.getHours();
    let dateMinutes = date.getMinutes();
    let dateSeconds = date.getSeconds();

    if (dateHours < 10)  {
        dateHours = '0' + dateHours;
    }
    if (dateMinutes < 10) {
        dateMinutes = '0' + dateMinutes;
    }
    if (dateSeconds < 10) {
        dateSeconds = '0' + dateSeconds;
    }

    buildDigitalClockDiv.innerHTML = `
    <p>${dateHours}:${dateMinutes}:${dateSeconds}</p>
    `
}

contentContainer.addEventListener('click', (e) => {
    buildCountdownTimer();
    if (e.target.id === 'digital-clock-home-button') {
        const buildCountdownTimer = document.getElementById('build-digital-clock')
        if (buildCountdownTimer.classList.contains('clicked')) {
            buildCountdownTimer.classList.remove('clicked')
        }else {
            buildCountdownTimer.classList.add('clicked')
        }
    }
    setInterval(buildCountdownTimer, 1000);
})

