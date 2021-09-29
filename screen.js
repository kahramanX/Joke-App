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
            randomJoke,
            randomPhoto,
            translateApi
        }
        this.addJokeToUI(allResults);
    }

    addJokeToUI(allResults) {
        let section = document.querySelector("section");

        let addJokeToSection = `
        <div class="random-image">
        <img src="${allResults[1]}" alt="">
    </div>
    
        <article class="english-text">
            <p>${allResults[0]}</p>
        </article>
    
        <article class="turkish-translated">
            <p>${allResults[2]}</p>
        </article>
        `;

        section.innerHTML=addJokeToSection;
    }

}