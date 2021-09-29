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

        return jokeObject.data.value;
    }
}

export function getJoke(){
    const broughtJoke =  new JokeApi.getJokeApi();
    return broughtJoke;
}