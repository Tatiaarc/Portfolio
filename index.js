// import data from "portfolio/assets/data/projects.json" assert { type: "json" };
// import dataExperiments from "portfolio/assets/data/experiments.json" assert { type: "json" };
const data = [
  {
    id: 1,
    name: "My Car App",
    description:
      "This is an app about my car collection. Includes a CRUD function.",
    url: "url",
    github: "github",
    photo: "./assets/images/my-car-collection-photo.png",
    techonology: ["React", "Node.js"],
    order: 1,
  },
  {
    id: 2,
    name: "Space Tourism",
    description:
      "App about space exploration. You can chose the destination, crew and technology",
    url: "https://tatiaarc.github.io/space-tourism-app/",
    github: "https://github.com/Tatiaarc/space-tourism-app",
    photo: "./assets/images/space-tourism-photo.png",
    techonology: ["Javascript", "React"],
    order: 2,
  },
  {
    id: 3,
    name: "Invoice App",
    description:
      "App about invoice creation, editing, and listing. You can change the status.",
    url: "url",
    github: "github",
    photo: "./assets/images/invoice-app-photo.png",
    techonology: ["React", "Node.js"],
    order: 3,
  },
  {
    id: 4,
    name: "Kanban",
    description: "App about a Kanban board",
    url: "url",
    github: "github",
    photo: "./assets/images/kanban-app-photo.png",
    techonology: ["React", "Node.js"],
    order: 3,
  },
];

const dataExperiments = [
  {
    id: 1,
    name: "Calculator App",
    description: "This app is a calculator",
    url: "url",
    github: "github",
    photo: "./assets/images/calculator-app.png",
    techonology: ["Javascript"],
    order: 1,
  },
  {
    id: 2,
    name: "To do List",
    description: "This app is a to do list",
    url: "https://tatiaarc.github.io/space-tourism-app/",
    github: "https://github.com/Tatiaarc/space-tourism-app",
    photo: "./assets/images/calculator-app.png",
    techonology: ["Javascript"],
    order: 2,
  },
];

var div = "";
var divExperiments = "";

function renderProjects() {
  for (var i = 0; i < data.length; i++) {
    div +=
      "<div class='main-project-box' id='main-projects-box'>" +
      "<div class='main-project-box-header'>" +
      "<div class='main-project-box-circle'>" +
      "</div>" +
      "<div class='main-project-box-circle'>" +
      "</div>" +
      "<div class='main-project-box-circle'>" +
      "</div>" +
      "</div>" +
      "<div class='main-project-box-photo' >" +
      "<img src=" +
      data[i].photo +
      ">" +
      "</div>" +
      "<div class='main-project-box-content'>" +
      "<div class='main-project-box-content-left'>" +
      " <h3>" +
      data[i].name +
      "</h3>" +
      "<p>" +
      data[i].description +
      "</p>" +
      "<div class='main-project-box-tech'>" +
      "<span>" +
      "<p>" +
      data[i].techonology[0] +
      "</p>" +
      "</span>" +
      "<span>" +
      "<p>" +
      data[i].techonology[1] +
      "</p>" +
      "</span>" +
      "</div>" +
      "</div>" +
      "<div class='main-project-box-content-right'>" +
      "<div class='main-project-box-content-github'>" +
      "<a target='blank' href=" +
      data[i].github +
      ">" +
      "<img src=" +
      "./assets/images/github.png" +
      ">" +
      "</a>" +
      "</div>" +
      "<div class='main-project-box-content-site'>" +
      "<a href=" +
      data[i].url +
      ">" +
      "<img src=" +
      "./assets/images/site.png" +
      ">" +
      "</a>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
  }

  document.getElementById("main-projects-boxes").innerHTML = div;
}

function renderExperiments() {
  for (var j = 0; j < dataExperiments.length; j++) {
    divExperiments +=
      "<div class='main-experiments-box'>" +
      "<div class='main-experiments-circle'>" +
      "<img src=" +
      dataExperiments[j].photo +
      ">" +
      "</div>" +
      "<div class='main-experiments-rectangle'>" +
      "<div class='main-experiments-content'> " +
      "<div class='main-experiments-left'> " +
      "<h3>" +
      dataExperiments[j].name +
      "</h3>" +
      "<p>" +
      dataExperiments[j].description +
      "</p>" +
      "</div>" +
      "<div class='main-experiments-right'> " +
      "<img src=" +
      "./assets/images/site.png" +
      ">" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
    console.log(dataExperiments[j].name);
  }

  document.getElementById("main-experiments-boxes").innerHTML = divExperiments;
}

renderProjects();
renderExperiments();

// Menu

// document.getElementById("header-menu").addEventListener("click", () => {});
