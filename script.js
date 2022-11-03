import {projects} from "./projects.js";

const allWorksContainer = document.getElementById("all-works-container");

projects.forEach( item => {
    allWorksContainer.innerHTML += `
        <div onclick="window.location = '${item.url}'" class="work-container">
            <div class="thumbnail-wrapper">
                <img src="${item.image}"/>
            </div>
            <div class="description-wrapper">
                ${ item.artist !== "" ? `<p id="work-artist">${item.artist}</p>` : ``}
                <p id="work-title">${item.title}</p>
                <p id="work-year">${item.year}</p>
            </div>
        </div>
    `;
});

/*

<div onclick="window.location = 'https://www.youtube.com/watch?v=Uth0-2EUnok'" class="work-container">
                <div class="thumbnail-wrapper">
                    <img src="./assets/thumbnails/retro_anorak.jpeg"/>
                </div>
                <div class="description-wrapper">
                    <p>Retro anorak</p>
                    <p>2021</p>
                </div>
            </div>

*/