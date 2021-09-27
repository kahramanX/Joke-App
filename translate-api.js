class TranslateApi{
    constructor(englishJoke){
        this.baseUrl="https://nlp-translation.p.rapidapi.com"
        this.translateApi = axios.create({
            baseURL : this.baseUrl,
            params: {text: 'Hello, world!!', to: 'es', from: 'en'},
            headers: {
                'x-rapidapi-host': 'nlp-translation.p.rapidapi.com',
                'x-rapidapi-key': '75aa3a9944msh08a6701b65d3e25p1e6426jsndaa26a1a387e'
            }
        });
    }

   async getTranslateApi(){
       let translateObject = await this.translateApi.get("/v1/translate");
        console.log(translateObject);
    }
}