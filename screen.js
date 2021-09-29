class Screen {
    constructor() {
        this.createJokeBtn = document.querySelector(".joke-create-button")
            .addEventListener("click", () => this.createNewJoke());

    }

    async createNewJoke() {
        let randomJoke = await new JokeApi().getJokeApi();
        let randomPhoto = await new UnsplashApi().getUnsplashApi();
        let translateApi = await new TranslateApi(randomJoke).getTranslateApi();

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