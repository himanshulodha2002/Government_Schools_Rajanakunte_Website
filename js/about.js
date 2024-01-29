import {aboutJson} from '../data/about-data.js'

const missionVisionParentDiv = document.getElementById("mission-vision")

missionVisionParentDiv.innerHTML = `
  <p>${aboutJson.mission}</p>
  <p>${aboutJson.vision}</p>
`