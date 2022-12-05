let codeImage = document.getElementsByClassName('code')[0];
let projects = document.getElementsByClassName('projectsText')[0];
projects.hidden = true;

const showProjects = () => {
    projects.hidden = false;
    projects.style.fontWeigth = 'bold';
};

const hideProjects = () => {
    projects.hidden = true;
};


codeImage.addEventListener('mouseover', showProjects);
codeImage.addEventListener('touchstart', showProjects);
codeImage.addEventListener('mouseout', hideProjects);
codeImage.addEventListener('touchend', showProjects)