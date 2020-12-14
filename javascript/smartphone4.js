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
        'title': 'SMART PHONE (PART 2) - SLIDING OVERLAY',
        'id': 'smart-phone-sliding-overlay',
        'link': 'pages/buildslidingoverlay.html'
    },
    {
        'title': 'SMART PHONE (PART 1) - HOME SCREEN',
        'id': 'smart-phone-home-screen',
        'link': 'pages/buildhomescreen.html'
    },
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
    }
        
})


// PROJECT NAVIGATION EVENT LISTENERS

contentContainer.addEventListener('click', (e) => {
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

// How to Build a Digital Clock Project 

// function DigitalClock() {

//     const buildDigitalClockDiv = document.getElementById('build-digital-clock')
//     const date = new Date;

//     let dateHours = date.getHours();
//     let dateMinutes = date.getMinutes();
//     let dateSeconds = date.getSeconds();

//     if (dateHours > 12) {
//         dateHours -= 12;
//     } else if (dateHours === 0) {
//         dateHours = 12;
//     }

//     if (dateHours < 10)  {
//         dateHours = '0' + dateHours;
//     }
//     if (dateMinutes < 10) {
//         dateMinutes = '0' + dateMinutes;
//     }
//     if (dateSeconds < 10) {
//         dateSeconds = '0' + dateSeconds;
//     }

//     buildDigitalClockDiv.innerHTML = `
//     <p>${dateHours}:${dateMinutes}:${dateSeconds}</p>
//     `
// }

// smartPhoneHomeBtn.addEventListener('click', () => {
//     DigitalClock();
//         const buildDigitalClock = document.getElementById('build-digital-clock')
//         if (buildDigitalClock.classList.contains('clicked')) {
//             buildDigitalClock.classList.remove('clicked')
//         } else {
//             buildDigitalClock.classList.add('clicked')
//         }
//     setInterval(DigitalClock, 1000);
// })

// Build a Home Screen Project
const smartPhoneHomeBtn = document.getElementById('smart-phone-home-button')
// const smartPhoneContainer = document.getElementById('smart-phone-container')


const appItems = [
    {
        'title': 'time',
        'icon': 'far fa-clock fa-2x',
        'class': 'digital-clock-app'
    },
];

let appOpen = false;

function populateHomeScreen() {
    const appList = document.getElementById('home-screen-app-list');
    appList.classList.remove('faded-out')
    appList.innerHTML = '';
    appItems.forEach( (appItem) => {
        const appBtn = document.createElement('button')
        const li = document.createElement('li');
        appBtn.setAttribute('class', `${appItem.class}`) 
        appBtn.innerHTML = `
        <i class="${appItem.class} ${appItem.icon}"></i>
        <p class="${appItem.class}">${appItem.title}</p>
        `
        li.appendChild(appBtn)
        appList.appendChild(li);
    })
}

function digitalClockApp() {
    const digitalClockApp = document.getElementById('digital-clock-app-container');
    const topBezel = document.querySelector('.top-bezel-smartphone');
    const bottomBezel = document.querySelector('.bottom-bezel-smartphone');
    const currentTime = document.getElementById('current-time-clock');
    const currentDate = document.getElementById('current-date-clock');
    topBezel.classList.add('app-open')
    bottomBezel.classList.add('app-open')
    digitalClockApp.classList.add('open')
    
    const date = new Date;
    let dateHours = date.getHours();
    let dateMinutes = date.getMinutes();
    let dateSeconds = date.getSeconds();
    let dateYear = date.getFullYear();
    let dateMonth = date.getMonth() + 1;
    let dateDay = date.getDate();

    if (dateHours > 12) {
        dateHours -= 12;
    } else if (dateHours === 0) {
        dateHours = 12;
    }
    if (dateHours < 10) {
        dateHours = '0' + dateHours;
    }
    if (dateMinutes < 10) {
        dateMinutes = '0' + dateMinutes;
    }
    if (dateSeconds < 10) {
        dateSeconds = '0' + dateSeconds;
    }

    currentTime.innerHTML = `
    <p>${dateHours}:${dateMinutes}:${dateSeconds}</p>
    `
    currentDate.innerHTML = `
    ${dateMonth} // ${dateDay} // ${dateYear}
    `
}


smartPhoneHomeBtn.addEventListener('click', () => {
    if (appOpen === false) {
        populateHomeScreen();
        const appSlider = document.getElementById('app-slider')
        appSlider.classList.add('opened')
    } else if (appOpen === true) {
        const digitalClockApp = document.getElementById('digital-clock-app-container');
        digitalClockApp.classList.remove('open')
        const topBezel = document.querySelector('.top-bezel-smartphone');
        const bottomBezel = document.querySelector('.bottom-bezel-smartphone');
        topBezel.classList.remove('app-open')
        bottomBezel.classList.remove('app-open')
    }
})

const smartPhoneContainer = document.getElementById('smart-phone-container')

smartPhoneContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('digital-clock-app')) {
        const digitalClockAppDiv = document.getElementById('digital-clock-app-container');
        const topBezel = document.querySelector('.top-bezel-smartphone');
        const bottomBezel = document.querySelector('.bottom-bezel-smartphone');
        topBezel.classList.add('app-open')
        bottomBezel.classList.add('app-open')
        digitalClockAppDiv.classList.add('open')
        digitalClockApp();
        setInterval(digitalClockApp, 1000)
    }
})

smartPhoneContainer.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if (e.target.classList.contains('digital-clock-app-button')) {
        const buildDigitalClock = document.getElementById('build-digital-clock')
        if (buildDigitalClock.classList.contains('clicked')) {
            buildDigitalClock.classList.remove('clicked')
        } else {
            buildDigitalClock.classList.add('clicked')
        }
    }
    setInterval(DigitalClock, 1000);
})
