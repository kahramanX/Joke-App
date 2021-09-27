class UnsplashApi {
    constructor() {
        this.baseUrl = "https://api.unsplash.com";

        this.UnsplashApi = axios.create({
            baseURL: this.baseUrl,
            headers: {
                Authorization: "Client-ID B_Cdj3-XfSKfl31ug_W22vmXDRyr-B7S-AZ8DVW9QJE"
            },
            params:{
                query: "animal"
            }
        });
    }

    async getUnsplashApi() {

        try {
            let UnsplashObject = await this.UnsplashApi.get("/photos/random");
            console.log(UnsplashObject.data.urls.regular);

        } catch (error) {
            console.log(error);
        }

    }
}