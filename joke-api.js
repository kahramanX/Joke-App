class JokeApi{
    constructor(){
        this.baseUrl="https://api.chucknorris.io"
        this.jokeApi = axios.create({
            baseURL : this.baseUrl,
        });
    }

   async getJokeApi(){
       let jokeObject = await this.jokeApi.get("/jokes/random");
        console.log(jokeObject.data.value);
    }
}