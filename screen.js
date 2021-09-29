import { getImage } from "./unsplash-api.js";
import { getTranslate } from "./translate-api.js";
import { getJoke } from "./joke-api.js";

class Screen {
    constructor() {
        this.createJokeBtn = document.imoquerySelector(".joke-create-button")
            .addEventListener("click", () => this.createNewJoke());
    }

    async createNewJoke() {
        let randomJoke = await new getJoke();
        let randomPhoto = await new getImage();
        let translateApi = await new getTranslate();

        const allResults = {
            randomJoke: randomJoke,
            randomPhoto: randomPhoto,
            translateApi: translateApi
        }

        this.addJokeToUI(allResults);
    }

    addJokeToUI(allResults) {
        let section = document.querySelector("section");

        section.innerHTML= `
        <div class="random-image">
        <img src="${allResults.randomPhoto}" alt="the image could not be loaded">
    </div>
    
        <article class="english-text">
            <p>${allResults.randomJoke}</p>
        </article>
    
        <article class="turkish-translated">
            <p>${allResults.translateApi}</p>
        </article>
        `;
    }
}

export default function runApp(){
    const screen = new Screen();
}