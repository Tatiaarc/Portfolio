import data from "./assets/data/projects.json";
import dataExperiments from "./assets/data/experiments.json";

// console.log(dataExperiments);

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
