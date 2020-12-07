const projectsBtn = document.getElementById('projects-button')
const projectsUl = document.getElementById('project-list')
const main = document.getElementById('main')
const nav = document.getElementById('nav')
const showModalBtn = document.getElementById('info-show-modal-button')
const modalCloseBtn = document.getElementById('modal-close-button')


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


// function populateDomProjects(index) {
//     main.innerHTML = '';
//     const operatorDiv = document.createElement('div')
//     operatorDiv.className = "mb-20"
//     const operatorData = projectsArray[index].data
//     operatorDiv.innerHTML = operatorData;
//     main.appendChild(operatorDiv)
// }

// Event Listeners for Navigation

showModalBtn.addEventListener('click', () => {
    const infoModalShow = document.getElementById('info-modal-show')
    infoModalShow.style.display = 'flex'     
})


modalCloseBtn.addEventListener('click', () => {
    const infoModalShow = document.getElementById('info-modal-show');
    infoModalShow.style.display = 'none'
})

window.addEventListener('click', (e) => {
    const infoModalShow = document.getElementById('info-modal-show');
    const modalContent = document.getElementById('modal-content');
    if (infoModalShow.style.display === 'flex') {
        if (e.target === infoModalShow) {
            infoModalShow.style.display = 'none';
        }
    }
})


projectsBtn.addEventListener('click', projectsOpen)

projectsUl.addEventListener('click', (e) => {
    if (e.target.tagName = 'li') {
        const index = e.target.dataset.index
        populateDomProjects(index)
    }
})



// PROJECTS SECTION

// Progress Bar - Initiate Hack Project

function progressInitialHack() {
    console.log('CONNECTION MADE')
    const progressInitialHackComplete = document.getElementById('progress-initial-hack-complete')
    
    let height = 0;
    let hack = setInterval(progress, 20);
        function progress() {
            progressInitialHackComplete.className = 'progress-initial-hack-complete'
            if (height >= 100) {
                clearInterval(hack);
            } else {
                height++;
                progressInitialHackComplete.style.height = height + '%';
                    if (height === 100) {
                        console.log('SENDING DATA')
                        progressConnectHack();
                }
            }
        }     
}

function progressConnectHack() {
    const progressConnectHackComplete = document.getElementById('progress-connect-hack-complete')
    let width = 0;
    const hack = setInterval(progress, 40);
        function progress() {
            progressConnectHackComplete.className = 'progress-connect-hack-complete'
            if (width >= 100) {
                clearInterval(hack);
            } else {
                width++;
                progressConnectHackComplete.style.width = width + '%';
                    if (width === 100) {
                        console.log('HACK PREPARED')
                        progressHackComplete();
                    }
            }
        }
}

function progressHackComplete() {
    const progressHackButton = document.getElementById('progress-hack-button');
    progressHackButton.style.color = 'lime'
    progressHackButton.addEventListener('click', () => {
        const progressHack = document.getElementById('progress-hack-complete')
        let width = 0;
        const hack = setInterval(progress, 50);
            function progress() {
                if (width >= 100) {
                    clearInterval(hack);
                } else {
                    width++;
                    progressHack.style.width = width + '%'
                    progressHack.innerText = `${width}%`
                        if (width === 100) {
                            progressHack.innerText = `HACK COMPLETE`
                            console.log('HACK COMPLETE')
                        }
                }
            }
    })
}

function progressRookieHack() {
    console.log('Rookie Hack Initiated')
    const rookieHack = document.getElementById('rookie-progress-hack');
        let width = 0;
        const hack = setInterval(progress, 30)
            function progress() {
                if (width >= 100) {
                clearInterval(hack);
                    } else {
                        width++;
                        rookieHack.style.width = width + '%';
                    } if (width === 100) {
                        rookieHack.innerText = 'OK'
                        console.log('Rookie Hack Complete // Rating: Sloppy')
                    }
             }  
}

main.addEventListener('click', (e) => {
    if (e.target.id === 'progress-button') {
        progressRookieHack();
    }
})

main.addEventListener('click', (e) => {
    if (e.target.id === 'progress-initial-button') {
        progressInitialHack();
    }
})
